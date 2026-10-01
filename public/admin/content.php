<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}

require 'db.php';

// Verwerken van formulier data
$success_msg = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $stmt = $db->prepare("INSERT OR REPLACE INTO content (key, value) VALUES (:key, :value)");
    foreach ($_POST as $key => $value) {
        // Alleen velden updaten die beginnen met "content_" (die we hebben verzonden)
        if (strpos($key, 'content_') === 0) {
            $db_key = substr($key, 8); // Haal "content_" weg
            $stmt->execute([
                ':key' => $db_key,
                ':value' => strip_tags(trim($value))
            ]);
        }
    }
    $success_msg = "Teksten zijn succesvol opgeslagen! De website is direct bijgewerkt.";
}

// Alle content ophalen
$stmt = $db->query("SELECT key, value FROM content");
$results = $stmt->fetchAll();
$content = [];
foreach ($results as $row) {
    $content[$row['key']] = $row['value'];
}

// Helper functie om waardes in te vullen
function get_val($key, $default, $content) {
    return isset($content[$key]) ? htmlspecialchars($content[$key]) : htmlspecialchars($default);
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Content Beheer - Sint Zaken Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1.5rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        .container { max-width: 900px; margin: 2rem auto; padding: 0 2rem; }
        
        .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 2rem; margin-bottom: 2rem; }
        .card h2 { margin-top: 0; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
        
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; font-weight: 500; color: #334155; margin-bottom: 0.5rem; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 1rem; box-sizing: border-box; }
        .form-group input:focus, .form-group textarea:focus { border-color: #8a1538; outline: none; }
        .form-group textarea { resize: vertical; min-height: 100px; }
        
        .btn-save { background: #8a1538; color: white; border: none; padding: 1rem 2rem; border-radius: 8px; font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: background 0.2s; width: 100%; }
        .btn-save:hover { background: #a01b44; }
        
        .alert-success { background: #dcfce7; color: #166534; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; font-weight: 500; text-align: center; border: 1px solid #bbf7d0; }
        
        .page-tabs { display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 2px solid #e2e8f0; }
        .tab { padding: 0.75rem 1.5rem; color: #64748b; text-decoration: none; font-weight: 500; border-bottom: 2px solid transparent; margin-bottom: -2px; cursor: pointer; }
        .tab.active { color: #8a1538; border-bottom-color: #8a1538; }
    </style>
</head>
<body>

<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <div class="nav-links">
        <a href="dashboard.php">Overzicht</a>
        <a href="forms.php">Formulieren</a>
        <a href="stats.php">Statistieken</a>
        <a href="chats.php">ChatGPiet</a>
        <a href="content.php" class="active">Content</a>
        <a href="?logout=1">Uitloggen</a>
    </div>
</div>

<div class="container">
    <?php if($success_msg): ?>
        <div class="alert-success">✅ <?php echo $success_msg; ?></div>
    <?php endif; ?>

    <div class="page-tabs">
        <a href="?page=home" class="tab active">🏠 Homepagina</a>
        <!-- Hier kunnen we later meer tabbladen toevoegen (Shows, Over Ons, etc) -->
    </div>

    <form method="POST">
        
        <div class="card">
            <h2>Header (Bovenste grote blok)</h2>
            <div class="form-group">
                <label>Hoofd Titel</label>
                <input type="text" name="content_home_hero_title" value="<?php echo get_val('home_hero_title', 'Beleef de Ultieme Sinterklaas Magie', $content); ?>">
            </div>
            <div class="form-group">
                <label>Korte introductie tekst</label>
                <textarea name="content_home_hero_subtitle"><?php echo get_val('home_hero_subtitle', 'Laat de Sint en zijn Pieten jullie bedrijf omtoveren tot een feestelijk en warm Sinterklaasfeest. Van onvergetelijke bedrijfsfeesten tot vrolijke meet & greets.', $content); ?></textarea>
            </div>
            <div class="form-group">
                <label>Tekst op de blauwe knop</label>
                <input type="text" name="content_home_hero_button" value="<?php echo get_val('home_hero_button', 'Bekijk onze shows', $content); ?>">
            </div>
        </div>

        <div class="card">
            <h2>Diensten (De 3 blokjes)</h2>
            <div class="form-group">
                <label>Blok 1 - Titel</label>
                <input type="text" name="content_home_service1_title" value="<?php echo get_val('home_service1_title', 'Complete Theatershows', $content); ?>">
            </div>
            <div class="form-group">
                <label>Blok 1 - Tekst</label>
                <textarea name="content_home_service1_text" rows="2"><?php echo get_val('home_service1_text', 'Van 45 tot 90 minuten lang spektakel met muziek, dans en een spannend verhaal.', $content); ?></textarea>
            </div>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 2rem 0;">
            <div class="form-group">
                <label>Blok 2 - Titel</label>
                <input type="text" name="content_home_service2_title" value="<?php echo get_val('home_service2_title', 'Meet & Greets', $content); ?>">
            </div>
            <div class="form-group">
                <label>Blok 2 - Tekst</label>
                <textarea name="content_home_service2_text" rows="2"><?php echo get_val('home_service2_text', 'Interactief rondlopen in winkelcentra of bedrijven. Perfect voor een persoonlijk contactmoment.', $content); ?></textarea>
            </div>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 2rem 0;">
            <div class="form-group">
                <label>Blok 3 - Titel</label>
                <input type="text" name="content_home_service3_title" value="<?php echo get_val('home_service3_title', 'Concept op maat', $content); ?>">
            </div>
            <div class="form-group">
                <label>Blok 3 - Tekst</label>
                <textarea name="content_home_service3_text" rows="2"><?php echo get_val('home_service3_text', 'Specifieke wensen? Wij bedenken en produceren een Sinterklaasconcept dat perfect aansluit.', $content); ?></textarea>
            </div>
        </div>

        <button type="submit" class="btn-save">💾 Opslaan en direct live zetten</button>
    </form>
</div>

</body>
</html>
