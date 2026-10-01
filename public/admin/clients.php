<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}
require 'db.php';

$success_msg = '';
$error_msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'save') {
    $id = $_POST['id'] ?? null;
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $company = trim($_POST['company']);
    $address = trim($_POST['address']);
    $status = trim($_POST['status']);
    
    if (!empty($name)) {
        if ($id) {
            $stmt = $db->prepare("UPDATE clients SET name = ?, email = ?, phone = ?, company = ?, address = ?, status = ? WHERE id = ?");
            $stmt->execute([$name, $email, $phone, $company, $address, $status, $id]);
            $success_msg = "Klant succesvol bijgewerkt.";
        } else {
            $stmt = $db->prepare("INSERT INTO clients (name, email, phone, company, address, status) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->execute([$name, $email, $phone, $company, $address, $status]);
            $success_msg = "Nieuwe klant succesvol toegevoegd.";
        }
    } else {
        $error_msg = "Naam is verplicht.";
    }
}

if (isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    $stmt = $db->prepare("DELETE FROM clients WHERE id = ?");
    $stmt->execute([$_GET['delete']]);
    header("Location: clients.php?deleted=1");
    exit;
}
if(isset($_GET['deleted'])) $success_msg = "Klant verwijderd.";

// Get all clients
$stmt = $db->query("SELECT * FROM clients ORDER BY id DESC");
$clients = $stmt->fetchAll();

// Edit modus
$edit_client = null;
if (isset($_GET['edit']) && is_numeric($_GET['edit'])) {
    $stmt = $db->prepare("SELECT * FROM clients WHERE id = ?");
    $stmt->execute([$_GET['edit']]);
    $edit_client = $stmt->fetch();
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Klanten - Sint Zaken Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        .container { max-width: 1200px; margin: 2rem auto; padding: 0 2rem; }
        .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 2rem; margin-bottom: 2rem; border: 1px solid #e2e8f0; }
        h2 { margin-top: 0; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { text-align: left; padding: 1rem; border-bottom: 1px solid #e2e8f0; }
        th { background-color: #f1f5f9; color: #475569; font-weight: 600; }
        .status-badge { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.85rem; font-weight: 600; }
        .status-nieuw { background: #dbeafe; color: #1e40af; }
        .status-offerte { background: #fef08a; color: #854d0e; }
        .status-akkoord { background: #dcfce7; color: #166534; }
        .form-group { margin-bottom: 1.2rem; }
        .form-group label { display: block; font-weight: 500; color: #334155; margin-bottom: 0.5rem; }
        .form-group input, .form-group select { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 1rem; box-sizing: border-box; }
        .btn-primary { background: #8a1538; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; }
        .btn-secondary { background: #64748b; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; }
        .btn-danger { color: #ef4444; text-decoration: none; font-weight: 500; margin-left: 1rem; }
        .alert-success { background: #dcfce7; color: #166534; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid #bbf7d0; }
        .alert-error { background: #fef2f2; color: #991b1b; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid #fecaca; }
    </style>
</head>
<body>
<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <div class="nav-links">
        <a href="dashboard.php">Overzicht</a>
        <a href="clients.php" class="active">Klanten</a>
        <a href="agenda.php">Agenda</a>
        <a href="forms.php">Formulieren</a>
        <a href="mail_templates.php">Mail Templates</a>
        <a href="users.php">Gebruikers</a>
        <a href="logout.php">Uitloggen</a>
    </div>
</div>
<div class="container">
    <?php if($success_msg): ?><div class="alert-success">✅ <?php echo $success_msg; ?></div><?php endif; ?>
    <?php if($error_msg): ?><div class="alert-error">❌ <?php echo $error_msg; ?></div><?php endif; ?>

    <!-- EDIT FORM -->
    <div class="card" style="<?php echo $edit_client ? '' : 'display: none;' ?>">
        <h2>✏️ Klant Bewerken</h2>
        <form method="POST" action="clients.php" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <input type="hidden" name="action" value="save">
            <input type="hidden" name="id" value="<?php echo $edit_client ? $edit_client['id'] : ''; ?>">
            
            <div class="form-group">
                <label>Naam *</label>
                <input type="text" name="name" value="<?php echo htmlspecialchars($edit_client['name'] ?? ''); ?>" required>
            </div>
            <div class="form-group">
                <label>Status</label>
                <select name="status">
                    <option value="nieuw" <?php echo ($edit_client['status']??'')=='nieuw'?'selected':'';?>>Nieuwe Lead</option>
                    <option value="offerte" <?php echo ($edit_client['status']??'')=='offerte'?'selected':'';?>>Offerte Verstuurd</option>
                    <option value="akkoord" <?php echo ($edit_client['status']??'')=='akkoord'?'selected':'';?>>Akkoord / Inplannen</option>
                </select>
            </div>
            <div class="form-group">
                <label>E-mail</label>
                <input type="email" name="email" value="<?php echo htmlspecialchars($edit_client['email'] ?? ''); ?>">
            </div>
            <div class="form-group">
                <label>Telefoon</label>
                <input type="text" name="phone" value="<?php echo htmlspecialchars($edit_client['phone'] ?? ''); ?>">
            </div>
            <div class="form-group">
                <label>Bedrijfsnaam</label>
                <input type="text" name="company" value="<?php echo htmlspecialchars($edit_client['company'] ?? ''); ?>">
            </div>
            <div class="form-group">
                <label>Adres & Plaats</label>
                <input type="text" name="address" value="<?php echo htmlspecialchars($edit_client['address'] ?? ''); ?>">
            </div>
            
            <div style="grid-column: 1 / -1; margin-top: 1rem;">
                <button type="submit" class="btn-primary">💾 Opslaan</button>
                <a href="clients.php" class="btn-secondary" style="margin-left: 1rem;">Annuleren</a>
            </div>
        </form>
    </div>

    <!-- LIST -->
    <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.5rem; margin-bottom: 1.5rem;">
            <h2 style="border: none; margin: 0; padding: 0;">👥 Klanten & Leads</h2>
            <button class="btn-primary" onclick="document.querySelector('.card:first-of-type').style.display='block'; window.scrollTo(0,0);">➕ Nieuwe Klant</button>
        </div>
        
        <?php if (count($clients) > 0): ?>
            <div style="overflow-x: auto;">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Naam</th>
                            <th>Bedrijf</th>
                            <th>Contact</th>
                            <th>Status</th>
                            <th>Acties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($clients as $client): ?>
                        <tr>
                            <td>#<?php echo $client['id']; ?></td>
                            <td><strong><?php echo htmlspecialchars($client['name']); ?></strong></td>
                            <td><?php echo htmlspecialchars($client['company'] ?: '-'); ?></td>
                            <td>
                                <a href="mailto:<?php echo htmlspecialchars($client['email']); ?>"><?php echo htmlspecialchars($client['email']); ?></a><br>
                                <span style="font-size:0.85rem; color:#64748b;"><?php echo htmlspecialchars($client['phone']); ?></span>
                            </td>
                            <td>
                                <span class="status-badge status-<?php echo $client['status']; ?>">
                                    <?php echo ucfirst($client['status']); ?>
                                </span>
                            </td>
                            <td>
                                <a href="send_mail.php?client_id=<?php echo $client['id']; ?>" class="btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.9rem; background:#1e40af;">✉️ Mail</a>
                                <a href="?edit=<?php echo $client['id']; ?>" class="btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.9rem; margin-left: 0.5rem;">Bewerken</a>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        <?php else: ?>
            <p style="color: #64748b; text-align: center; padding: 2rem 0;">Er zijn nog geen klanten. Laat bezoekers de Configurator invullen of voeg er zelf een toe!</p>
        <?php endif; ?>
    </div>
</div>
</body>
</html>
