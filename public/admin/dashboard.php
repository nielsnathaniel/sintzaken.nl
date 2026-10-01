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
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sint Zaken - Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
        }
        .header {
            background-color: #8a1538;
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1 {
            font-family: 'Playfair Display', serif;
            margin: 0;
            font-size: 1.5rem;
        }
        .header a {
            color: white;
            text-decoration: none;
            font-weight: 500;
        }
        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        .card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            text-align: center;
        }
        .card h2 {
            margin-top: 0;
            color: #1e293b;
        }
        .card p {
            color: #64748b;
        }
    </style>
</head>
<body>

<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <a href="?logout=1">Uitloggen</a>
</div>

<div class="container">
    <div class="card">
        <h2>📊 Statistieken</h2>
        <p>Binnenkort beschikbaar. Hier zie je straks je bezoekersaantallen.</p>
    </div>
    <div class="card">
        <h2>✉️ Formulieren</h2>
        <p>Binnenkort beschikbaar. Hier zie je straks de binnengekomen aanvragen.</p>
    </div>
    <div class="card">
        <h2>🤖 ChatGPiet</h2>
        <p>Binnenkort beschikbaar. Lees hier straks de gesprekken van je AI chatbot mee.</p>
    </div>
    <div class="card">
        <h2>✏️ Teksten</h2>
        <p>Binnenkort beschikbaar. Pas hier straks live de teksten op je website aan.</p>
    </div>
</div>

</body>
</html>
