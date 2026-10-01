<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}

if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit;
}

require 'db.php';

// Ophalen statistieken
$stats_forms = $db->query("SELECT COUNT(*) FROM contacts")->fetchColumn();
$stats_views = $db->query("SELECT COUNT(*) FROM pageviews")->fetchColumn();
$stats_chats = $db->query("SELECT COUNT(*) FROM chats")->fetchColumn();
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
        
        .container { max-width: 1200px; margin: 2rem auto; padding: 0 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center; text-decoration: none; color: inherit; display: block; transition: transform 0.2s; border: 2px solid transparent; }
        .card:hover { transform: translateY(-5px); border-color: #8a1538; }
        .card h2 { margin-top: 0; color: #1e293b; font-size: 1.2rem; }
        .number { font-size: 3rem; font-weight: 600; color: #8a1538; margin: 1rem 0; }
        .card p { color: #64748b; margin-bottom: 0; }
    </style>
</head>
<body>

<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <div class="nav-links">
        <a href="dashboard.php" class="active">Overzicht</a>
        <a href="forms.php">Formulieren</a>
        <a href="stats.php">Statistieken</a>
        <a href="chats.php">ChatGPiet</a>
        <a href="content.php">Content</a>
        <a href="users.php">Gebruikers</a>
        <a href="?logout=1">Uitloggen</a>
    </div>
</div>

<div class="container">
    <a href="stats.php" class="card">
        <h2>📊 Paginaweergaven</h2>
        <div class="number"><?php echo $stats_views; ?></div>
        <p>Unieke bezoeken</p>
    </a>
    
    <a href="forms.php" class="card">
        <h2>✉️ Aanvragen</h2>
        <div class="number"><?php echo $stats_forms; ?></div>
        <p>Ingevulde formulieren</p>
    </a>
    
    <a href="chats.php" class="card">
        <h2>🤖 Chat Berichten</h2>
        <div class="number"><?php echo $stats_chats; ?></div>
        <p>Via ChatGPiet</p>
    </a>
    
    <a href="content.php" class="card">
        <h2>✏️ Content</h2>
        <div class="number">--</div>
        <p>Website teksten aanpassen</p>
    </a>
</div>

</body>
</html>
