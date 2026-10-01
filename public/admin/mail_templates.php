<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}
require 'db.php';

$success_msg = '';
$error_msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    if ($action === 'save') {
        $id = $_POST['id'] ?? null;
        $title = trim($_POST['title']);
        $subject = trim($_POST['subject']);
        $body = trim($_POST['body']);
        
        if (!empty($title) && !empty($subject) && !empty($body)) {
            if ($id) {
                // Update
                $stmt = $db->prepare("UPDATE mail_templates SET title = ?, subject = ?, body = ? WHERE id = ?");
                $stmt->execute([$title, $subject, $body, $id]);
                $success_msg = "Template succesvol bijgewerkt.";
            } else {
                // Insert
                $stmt = $db->prepare("INSERT INTO mail_templates (title, subject, body) VALUES (?, ?, ?)");
                $stmt->execute([$title, $subject, $body]);
                $success_msg = "Nieuw template succesvol aangemaakt.";
            }
        } else {
            $error_msg = "Vul alle velden in.";
        }
    }
}

if (isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    $stmt = $db->prepare("DELETE FROM mail_templates WHERE id = ?");
    $stmt->execute([$_GET['delete']]);
    header("Location: mail_templates.php?deleted=1");
    exit;
}
if(isset($_GET['deleted'])) $success_msg = "Template verwijderd.";

$stmt = $db->query("SELECT * FROM mail_templates ORDER BY title ASC");
$templates = $stmt->fetchAll();

// Edit modus
$edit_template = null;
if (isset($_GET['edit']) && is_numeric($_GET['edit'])) {
    $stmt = $db->prepare("SELECT * FROM mail_templates WHERE id = ?");
    $stmt->execute([$_GET['edit']]);
    $edit_template = $stmt->fetch();
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail Templates - Sint Zaken Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        .container { max-width: 1000px; margin: 2rem auto; padding: 0 2rem; }
        .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 2rem; margin-bottom: 2rem; border: 1px solid #e2e8f0; }
        h2 { margin-top: 0; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
        .form-group { margin-bottom: 1.2rem; }
        .form-group label { display: block; font-weight: 500; color: #334155; margin-bottom: 0.5rem; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 1rem; box-sizing: border-box; }
        .btn-primary { background: #8a1538; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; }
        .btn-secondary { background: #64748b; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; }
        .btn-danger { color: #ef4444; text-decoration: none; font-weight: 500; margin-left: 1rem; }
        .alert-success { background: #dcfce7; color: #166534; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid #bbf7d0; }
        .alert-error { background: #fef2f2; color: #991b1b; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid #fecaca; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { text-align: left; padding: 1rem; border-bottom: 1px solid #e2e8f0; }
        th { background-color: #f1f5f9; color: #475569; font-weight: 600; }
        .variables-box { background: #f8fafc; padding: 1rem; border-radius: 8px; font-size: 0.9rem; margin-bottom: 1.5rem; border: 1px solid #e2e8f0; color: #475569; }
        .variables-box code { background: white; padding: 0.2rem 0.4rem; border-radius: 4px; color: #8a1538; font-weight: bold; border: 1px solid #e2e8f0; }
    </style>
</head>
<body>
<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <div class="nav-links">
        <a href="dashboard.php">Overzicht</a>
        <a href="clients.php">Klanten</a>
        <a href="agenda.php">Agenda</a>
        <a href="forms.php">Formulieren</a>
        <a href="mail_templates.php" class="active">Mail Templates</a>
        <a href="content.php">Content</a>
        <a href="users.php">Gebruikers</a>
        <a href="logout.php">Uitloggen</a>
    </div>
</div>
<div class="container">
    <?php if($success_msg): ?><div class="alert-success">✅ <?php echo $success_msg; ?></div><?php endif; ?>
    <?php if($error_msg): ?><div class="alert-error">❌ <?php echo $error_msg; ?></div><?php endif; ?>

    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <!-- Left: List -->
        <div class="card" style="flex: 1; min-width: 300px;">
            <h2>📧 Opgeslagen Templates</h2>
            <?php if (count($templates) > 0): ?>
                <table>
                    <thead>
                        <tr>
                            <th>Naam (Intern)</th>
                            <th>Onderwerp</th>
                            <th>Acties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($templates as $tpl): ?>
                        <tr style="<?php echo ($edit_template && $edit_template['id'] == $tpl['id']) ? 'background-color: #fef2f2;' : ''; ?>">
                            <td><strong><?php echo htmlspecialchars($tpl['title']); ?></strong></td>
                            <td><?php echo htmlspecialchars($tpl['subject']); ?></td>
                            <td>
                                <a href="?edit=<?php echo $tpl['id']; ?>" style="color: #8a1538; text-decoration: none; font-weight: 600;">Bewerk</a>
                                <a href="?delete=<?php echo $tpl['id']; ?>" class="btn-danger" onclick="return confirm('Weet je zeker dat je dit template wilt verwijderen?');">Verwijder</a>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php else: ?>
                <p style="color: #64748b;">Je hebt nog geen mail templates aangemaakt.</p>
            <?php endif; ?>
            
            <?php if($edit_template): ?>
                <div style="margin-top: 2rem;">
                    <a href="mail_templates.php" class="btn-primary">➕ Nieuw Template Maken</a>
                </div>
            <?php endif; ?>
        </div>

        <!-- Right: Editor -->
        <div class="card" style="flex: 1; min-width: 350px;">
            <h2><?php echo $edit_template ? '✏️ Template Bewerken' : '➕ Nieuw Template'; ?></h2>
            
            <div class="variables-box">
                <strong>Handige Variabelen:</strong><br>
                Gebruik deze codes in het onderwerp of bericht. Ze worden automatisch ingevuld bij verzenden:<br><br>
                <code>{{naam}}</code> Klantnaam (bijv. "Jan")<br>
                <code>{{bedrijf}}</code> Bedrijfsnaam<br>
                <code>{{datum}}</code> Datum van opdracht<br>
                <code>{{prijs}}</code> Totaalprijs
            </div>

            <form method="POST" action="mail_templates.php">
                <input type="hidden" name="action" value="save">
                <?php if($edit_template): ?>
                    <input type="hidden" name="id" value="<?php echo $edit_template['id']; ?>">
                <?php endif; ?>
                
                <div class="form-group">
                    <label>Interne Naam (bijv. "Offerte Bedrijfsfeest")</label>
                    <input type="text" name="title" value="<?php echo $edit_template ? htmlspecialchars($edit_template['title']) : ''; ?>" required>
                </div>
                
                <div class="form-group">
                    <label>Onderwerp E-mail (Wordt door klant gezien)</label>
                    <input type="text" name="subject" value="<?php echo $edit_template ? htmlspecialchars($edit_template['subject']) : ''; ?>" required>
                </div>
                
                <div class="form-group">
                    <label>E-mail Bericht</label>
                    <textarea name="body" rows="12" required><?php echo $edit_template ? htmlspecialchars($edit_template['body']) : ''; ?></textarea>
                </div>
                
                <button type="submit" class="btn-primary">💾 Opslaan</button>
                <?php if($edit_template): ?>
                    <a href="mail_templates.php" class="btn-secondary" style="margin-left: 1rem;">Annuleren</a>
                <?php endif; ?>
            </form>
        </div>
    </div>
</div>
</body>
</html>
