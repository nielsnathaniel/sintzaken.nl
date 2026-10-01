<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}

require 'db.php';

// Ophalen statistieken
$stats_forms = $db->query("SELECT COUNT(*) FROM contacts")->fetchColumn();
$stats_views = $db->query("SELECT COUNT(*) FROM pageviews")->fetchColumn();
$stats_chats = $db->query("SELECT COUNT(*) FROM chats")->fetchColumn();
$stats_clients = $db->query("SELECT COUNT(*) FROM clients")->fetchColumn();
$stats_appointments = $db->query("SELECT COUNT(*) FROM appointments WHERE status != 'geannuleerd' AND status != 'voltooid'")->fetchColumn();
$stats_tickets = $db->query("SELECT COUNT(*) FROM tickets WHERE status = 'open'")->fetchColumn();
$stats_users = $db->query("SELECT COUNT(*) FROM users")->fetchColumn();
$stats_mail = $db->query("SELECT COUNT(*) FROM mail_templates")->fetchColumn();

?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sint Zaken - Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1.5rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        
        .container { max-width: 1400px; margin: 2rem auto; padding: 0 2rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; }
        .card { background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center; text-decoration: none; color: inherit; display: block; transition: transform 0.2s, box-shadow 0.2s; border: 2px solid transparent; }
        .card:hover { transform: translateY(-3px); border-color: #8a1538; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
        .card h2 { margin-top: 0; color: #1e293b; font-size: 1.1rem; }
        .number { font-size: 2.5rem; font-weight: 600; color: #8a1538; margin: 0.5rem 0; }
        .card p { color: #64748b; margin-bottom: 0; font-size: 0.9rem; }
    </style>
</head>
<body>

<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <div class="nav-links" style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:flex-end;">
        <a href="dashboard.php" class="active">Overzicht</a>
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
    <a href="clients.php" class="card">
        <h2>👥 Klanten & Leads</h2>
        <div class="number"><?php echo $stats_clients; ?></div>
        <p>Totaal in adressenboek</p>
    </a>

    <a href="agenda.php" class="card">
        <h2>📅 Agenda</h2>
        <div class="number"><?php echo $stats_appointments; ?></div>
        <p>Aankomende afspraken</p>
    </a>

    <a href="tickets.php" class="card">
        <h2>🛠️ AI Tickets</h2>
        <div class="number"><?php echo $stats_tickets; ?></div>
        <p>Openstaande IT wensen</p>
    </a>

    <a href="mail_templates.php" class="card">
        <h2>✉️ Mail Templates</h2>
        <div class="number"><?php echo $stats_mail; ?></div>
        <p>Klaar voor gebruik</p>
    </a>

    <a href="chats.php" class="card">
        <h2>🤖 ChatGPiet</h2>
        <div class="number"><?php echo $stats_chats; ?></div>
        <p>Gesprekken gevoerd</p>
    </a>

    <a href="content.php" class="card">
        <h2>✏️ Content</h2>
        <div class="number">--</div>
        <p>Website teksten & CMS</p>
    </a>

    <a href="forms.php" class="card">
        <h2>📝 Formulieren</h2>
        <div class="number"><?php echo $stats_forms; ?></div>
        <p>Oude inbox / Ingevuld</p>
    </a>

    <a href="stats.php" class="card">
        <h2>📊 Statistieken</h2>
        <div class="number"><?php echo $stats_views; ?></div>
        <p>Paginaweergaven</p>
    </a>

    <a href="users.php" class="card">
        <h2>👤 Gebruikers</h2>
        <div class="number"><?php echo $stats_users; ?></div>
        <p>Ingeschreven admins</p>
    </a>
</div>

</body>
</html>
