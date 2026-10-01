<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}

require 'db.php';

// Totale weergaven
$total_views = $db->query("SELECT COUNT(*) FROM pageviews")->fetchColumn();

// Weergaven vandaag
$today_views = $db->query("SELECT COUNT(*) FROM pageviews WHERE date(created_at) = date('now')")->fetchColumn();

// Unieke bezoekers vandaag (op basis van IP hash)
$today_unique = $db->query("SELECT COUNT(DISTINCT ip_address) FROM pageviews WHERE date(created_at) = date('now')")->fetchColumn();

// Top 10 pagina's
$stmt = $db->query("SELECT page, COUNT(*) as count FROM pageviews GROUP BY page ORDER BY count DESC LIMIT 10");
$top_pages = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistieken - Sint Zaken Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1.5rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        .container { max-width: 1200px; margin: 2rem auto; padding: 0 2rem; }
        
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem; }
        .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 2rem; }
        .card h2 { margin-top: 0; color: #1e293b; font-size: 1.1rem; }
        .number { font-size: 2.5rem; font-weight: 600; color: #8a1538; margin: 0.5rem 0; }
        
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { text-align: left; padding: 1rem; border-bottom: 1px solid #e2e8f0; }
        th { background-color: #f1f5f9; color: #475569; font-weight: 600; }
        tr:hover { background-color: #f8fafc; }
    </style>
</head>
<body>

<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <div class="nav-links" style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:flex-end;">
        <a href="dashboard.php">Overzicht</a>
        <a href="clients.php">Klanten</a>
        <a href="agenda.php">Agenda</a>
        <a href="tickets.php">Tickets</a>
        <a href="forms.php">Formulieren</a>
        <a href="mail_templates.php">Mail</a>
        <a href="chats.php">Chat</a>
        <a href="content.php">Content</a>
        <a href="users.php">Gebruikers</a>
        <a href="logout.php">Uitloggen</a>
    </div>
</div>

<div class="container">
    <div class="grid">
        <div class="card" style="text-align: center;">
            <h2>Totaal Paginaweergaven</h2>
            <div class="number"><?php echo $total_views; ?></div>
        </div>
        <div class="card" style="text-align: center;">
            <h2>Weergaven Vandaag</h2>
            <div class="number"><?php echo $today_views; ?></div>
        </div>
        <div class="card" style="text-align: center;">
            <h2>Unieke Bezoekers Vandaag</h2>
            <div class="number"><?php echo $today_unique; ?></div>
        </div>
    </div>

    <div class="card">
        <h2>🏆 Meest bezochte pagina's</h2>
        <?php if(count($top_pages) > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>Pagina URL</th>
                        <th>Aantal weergaven</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($top_pages as $page): ?>
                    <tr>
                        <td style="font-family: monospace;"><?php echo htmlspecialchars($page['page']); ?></td>
                        <td><strong><?php echo $page['count']; ?></strong></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p style="color: #64748b; text-align: center; padding: 2rem 0;">Er zijn nog geen bezoekers geregistreerd.</p>
        <?php endif; ?>
    </div>
</div>

</body>
</html>
