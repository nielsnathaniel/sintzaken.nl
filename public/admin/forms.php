<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}

require 'db.php';

// Verwijder functionaliteit
if (isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    $stmt = $db->prepare("DELETE FROM contacts WHERE id = ?");
    $stmt->execute([$_GET['delete']]);
    header("Location: forms.php");
    exit;
}

$stmt = $db->query("SELECT * FROM contacts ORDER BY created_at DESC");
$contacts = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulieren - Sint Zaken Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1.5rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        .container { max-width: 1200px; margin: 2rem auto; padding: 0 2rem; }
        
        .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 2rem; margin-bottom: 2rem; }
        h2 { margin-top: 0; color: #1e293b; }
        
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { text-align: left; padding: 1rem; border-bottom: 1px solid #e2e8f0; }
        th { background-color: #f1f5f9; color: #475569; font-weight: 600; }
        tr:hover { background-color: #f8fafc; }
        .btn-delete { color: #ef4444; text-decoration: none; font-weight: 500; }
        .btn-delete:hover { text-decoration: underline; }
        
        .empty-state { text-align: center; color: #64748b; padding: 3rem 0; font-size: 1.1rem; }
    </style>
</head>
<body>

<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <div class="nav-links">
        <a href="dashboard.php">Overzicht</a>
        <a href="forms.php" class="active">Formulieren</a>
        <a href="?logout=1">Uitloggen</a>
    </div>
</div>

<div class="container">
    <div class="card">
        <h2>✉️ Binnengekomen Aanvragen</h2>
        
        <?php if (count($contacts) > 0): ?>
            <div style="overflow-x: auto;">
                <table>
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Naam</th>
                            <th>Email</th>
                            <th>Telefoon</th>
                            <th>Bericht</th>
                            <th>Actie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($contacts as $contact): ?>
                        <tr>
                            <td><?php echo date('d-m-Y H:i', strtotime($contact['created_at'])); ?></td>
                            <td><strong><?php echo htmlspecialchars($contact['name']); ?></strong></td>
                            <td><a href="mailto:<?php echo htmlspecialchars($contact['email']); ?>"><?php echo htmlspecialchars($contact['email']); ?></a></td>
                            <td><?php echo htmlspecialchars($contact['phone']); ?></td>
                            <td style="max-width: 400px; line-height: 1.5; white-space: pre-wrap; font-size: 0.95rem; color: #334155;">
                                <?php echo nl2br(htmlspecialchars($contact['message'])); ?>
                            </td>
                            <td>
                                <a href="forms.php?delete=<?php echo $contact['id']; ?>" class="btn-delete" onclick="return confirm('Weet je zeker dat je dit bericht wilt verwijderen?');">Verwijder</a>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        <?php else: ?>
            <div class="empty-state">
                Er zijn nog geen contactaanvragen binnengekomen in de database.
            </div>
        <?php endif; ?>
    </div>
</div>

</body>
</html>
