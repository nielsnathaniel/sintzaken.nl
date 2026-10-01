<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}
require 'db.php';
$success_msg = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $stmt = $db->prepare("INSERT OR REPLACE INTO content (key, value) VALUES (:key, :value)");
    foreach ($_POST as $key => $value) {
        if (strpos($key, 'content_') === 0) {
            $db_key = substr($key, 8);
            $stmt->execute([':key' => $db_key, ':value' => strip_tags(trim($value))]);
        }
    }
    $success_msg = "Gegevens zijn succesvol opgeslagen! De website is direct bijgewerkt.";
}
$stmt = $db->query("SELECT key, value FROM content");
$results = $stmt->fetchAll();
$content = [];
foreach ($results as $row) { $content[$row['key']] = $row['value']; }
function get_val($key, $default, $content) { return isset($content[$key]) ? htmlspecialchars($content[$key]) : htmlspecialchars($default); }
$tab = isset($_GET['tab']) ? $_GET['tab'] : 'home';
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
        <a href="users.php">Gebruikers</a>
        <a href="logout.php">Uitloggen</a>
    </div>
</div>
<div class="container">
    <?php if($success_msg): ?><div class="alert-success">✅ <?php echo $success_msg; ?></div><?php endif; ?>
    <div class="page-tabs" style="flex-wrap: wrap;">
        <a href="?tab=home" class="tab <?php echo $tab === 'home' ? 'active' : ''; ?>">🏠 Homepagina</a>
        <a href="?tab=shows" class="tab <?php echo $tab === 'shows' ? 'active' : ''; ?>">🎭 Shows</a>
        <a href="?tab=meet-greets" class="tab <?php echo $tab === 'meet-greets' ? 'active' : ''; ?>">🤝 Meet & Greets</a>
        <a href="?tab=bedrijven" class="tab <?php echo $tab === 'bedrijven' ? 'active' : ''; ?>">🏢 Bedrijfsfeesten</a>
        <a href="?tab=particulieren" class="tab <?php echo $tab === 'particulieren' ? 'active' : ''; ?>">🏠 Particulieren</a>
        <a href="?tab=over-ons" class="tab <?php echo $tab === 'over-ons' ? 'active' : ''; ?>">ℹ️ Over Ons</a>
        <a href="?tab=settings" class="tab <?php echo $tab === 'settings' ? 'active' : ''; ?>">⚙️ Instellingen</a>
    </div>
    <form method="POST">
        <?php if($tab === 'home'): ?>
        <div class="card">
            <h2>Header (Bovenste grote blok)</h2>
            <div class="form-group"><label>Hoofd Titel</label><input type="text" name="content_home_hero_title" value="<?php echo get_val('home_hero_title', 'Beleef de Ultieme Sinterklaas Magie', $content); ?>"></div>
            <div class="form-group"><label>Korte introductie tekst</label><textarea name="content_home_hero_subtitle"><?php echo get_val('home_hero_subtitle', 'Laat de Sint en zijn Pieten jullie bedrijf omtoveren tot een feestelijk en warm Sinterklaasfeest. Van onvergetelijke bedrijfsfeesten tot vrolijke meet & greets.', $content); ?></textarea></div>
            <div class="form-group"><label>Tekst op de blauwe knop</label><input type="text" name="content_home_hero_button" value="<?php echo get_val('home_hero_button', 'Bekijk onze shows', $content); ?>"></div>
        </div>
        <div class="card">
            <h2>Diensten (De 3 blokjes)</h2>
            <div class="form-group"><label>Blok 1 - Titel</label><input type="text" name="content_home_service1_title" value="<?php echo get_val('home_service1_title', 'Complete Theatershows', $content); ?>"></div>
            <div class="form-group"><label>Blok 1 - Tekst</label><textarea name="content_home_service1_text" rows="2"><?php echo get_val('home_service1_text', 'Van 45 tot 90 minuten lang spektakel met muziek, dans en een spannend verhaal.', $content); ?></textarea></div>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 2rem 0;">
            <div class="form-group"><label>Blok 2 - Titel</label><input type="text" name="content_home_service2_title" value="<?php echo get_val('home_service2_title', 'Meet & Greets', $content); ?>"></div>
            <div class="form-group"><label>Blok 2 - Tekst</label><textarea name="content_home_service2_text" rows="2"><?php echo get_val('home_service2_text', 'Interactief rondlopen in winkelcentra of bedrijven. Perfect voor een persoonlijk contactmoment.', $content); ?></textarea></div>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 2rem 0;">
            <div class="form-group"><label>Blok 3 - Titel</label><input type="text" name="content_home_service3_title" value="<?php echo get_val('home_service3_title', 'Concept op maat', $content); ?>"></div>
            <div class="form-group"><label>Blok 3 - Tekst</label><textarea name="content_home_service3_text" rows="2"><?php echo get_val('home_service3_text', 'Specifieke wensen? Wij bedenken en produceren een Sinterklaasconcept dat perfect aansluit.', $content); ?></textarea></div>
        </div>

        <?php elseif($tab === 'shows'): ?>
        <div class="card">
            <h2>De Hoofdshow: De Magische Koffer</h2>
            <div class="form-group"><label>Titel</label><input type="text" name="content_shows_main_title" value="<?php echo get_val('shows_main_title', '2. De Hoofdshow: De Magische Koffer', $content); ?>"></div>
            <div class="form-group"><label>Alinea 1</label><textarea name="content_shows_main_text1"><?php echo get_val('shows_main_text1', 'Zodra de Sinterklaaskoffer op het podium staat, begint het avontuur. De meter op de koffer moet naar de 100% voordat Sinterklaas kan verschijnen. De kinderen helpen actief mee door samen liedjes te zingen.', $content); ?></textarea></div>
            <div class="form-group"><label>Alinea 2</label><textarea name="content_shows_main_text2"><?php echo get_val('shows_main_text2', 'Wanneer de meter vol is, maakt Sinterklaas zijn entree. Een gezellig en interactief programma dat leuk is voor alle leeftijden.', $content); ?></textarea></div>
            <div class="form-group"><label>Rode USP Tekst</label><input type="text" name="content_shows_main_usp" value="<?php echo get_val('shows_main_usp', '✓ Te boeken voor 30, 45 of 60 minuten.', $content); ?>"></div>
        </div>

        <?php elseif($tab === 'meet-greets'): ?>
        <div class="card">
            <h2>Meet & Greets (Header)</h2>
            <div class="form-group"><label>Titel</label><input type="text" name="content_mg_title" value="<?php echo get_val('mg_title', 'Sinterklaas Meet & Greets', $content); ?>"></div>
            <div class="form-group"><label>Korte Introductie</label><textarea name="content_mg_subtitle"><?php echo get_val('mg_subtitle', 'Geef uw evenement of winkelcentrum extra magie met een interactieve meet & greet met Sinterklaas en zijn Pieten. Een onvergetelijk moment voor de kinderen.', $content); ?></textarea></div>
        </div>
        <div class="card">
            <h2>Waarom een Meet & Greet? (Tekst)</h2>
            <div class="form-group"><label>Alinea 1</label><textarea name="content_mg_text1"><?php echo get_val('mg_text1', 'Een meet & greet is de perfecte manier om kinderen persoonlijk in contact te brengen met Sinterklaas. Zonder de verplichting van een lange show, maar wel met de volledige aandacht van de Sint en zijn Pieten.', $content); ?></textarea></div>
            <div class="form-group"><label>Alinea 2</label><textarea name="content_mg_text2"><?php echo get_val('mg_text2', 'Onze Pieten delen pepernoten uit, maken grapjes en zorgen voor een ontspannen sfeer, terwijl Sinterklaas rustig de tijd neemt voor een praatje en een foto met elk kind.', $content); ?></textarea></div>
            <div class="form-group"><label>Highlight Tekst (Rood)</label><input type="text" name="content_mg_highlight" value="<?php echo get_val('mg_highlight', '✓ Perfect voor winkelcentra, beurzen en openbare evenementen.', $content); ?>"></div>
        </div>

        <?php elseif($tab === 'bedrijven'): ?>
        <div class="card">
            <h2>Bedrijfsfeesten (Header)</h2>
            <div class="form-group"><label>Titel</label><input type="text" name="content_bf_title" value="<?php echo get_val('bf_title', 'Bedrijfsfeesten', $content); ?>"></div>
            <div class="form-group"><label>Korte Introductie</label><textarea name="content_bf_subtitle"><?php echo get_val('bf_subtitle', 'Verwen de kinderen van uw werknemers met een onvergetelijk Sinterklaasfeest. Van compleet georganiseerde theatershows tot kleinschalige interactieve middagen.', $content); ?></textarea></div>
        </div>
        <div class="card">
            <h2>Waarom een bedrijfsfeest via ons?</h2>
            <div class="form-group"><label>Alinea 1</label><textarea name="content_bf_text1"><?php echo get_val('bf_text1', 'Een Sinterklaasfeest op het werk is een prachtig moment van verbinding, niet alleen voor de kinderen, maar ook voor uw medewerkers. Wij nemen de volledige organisatie uit handen zodat u zelf kunt genieten.', $content); ?></textarea></div>
            <div class="form-group"><label>Alinea 2</label><textarea name="content_bf_text2"><?php echo get_val('bf_text2', 'Met een professioneel team van acteurs en actrices zorgen wij voor een hoogwaardige beleving die past bij de cultuur van uw bedrijf.', $content); ?></textarea></div>
            <div class="form-group"><label>USP (Rood)</label><input type="text" name="content_bf_usp" value="<?php echo get_val('bf_usp', '✓ Zorgeloos genieten: Wij regelen alles van decor tot entertainment.', $content); ?>"></div>
        </div>

        <?php elseif($tab === 'particulieren'): ?>
        <div class="card">
            <h2>Huisbezoeken (Particulieren)</h2>
            <div class="form-group"><label>Titel</label><input type="text" name="content_part_title" value="<?php echo get_val('part_title', 'Een Exclusief Huisbezoek', $content); ?>"></div>
            <div class="form-group"><label>Korte Introductie</label><textarea name="content_part_subtitle"><?php echo get_val('part_subtitle', 'Haal de absolute magie naar uw huiskamer. Wij bieden een onvergetelijke, tot in de puntjes verzorgde Sinterklaas beleving voor het hele gezin.', $content); ?></textarea></div>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 2rem 0;">
            <div class="form-group"><label>Prijs aanduiding</label><input type="text" name="content_part_price" value="<?php echo get_val('part_price', '€450,-', $content); ?>"></div>
            <div class="form-group"><label>Disclaimer tekst onder de prijs</label><textarea name="content_part_disclaimer"><?php echo get_val('part_disclaimer', 'Vul onderstaand formulier in om een tijdslot (30 min) aan te vragen. Beschikbaarheid is beperkt. Let op: dit is een aanvraag. De definitieve boeking wordt per mail bevestigd.', $content); ?></textarea></div>
        </div>

        <?php elseif($tab === 'over-ons'): ?>
        <div class="card">
            <h2>Over Ons (Organisatie)</h2>
            <div class="form-group"><label>Titel</label><input type="text" name="content_about_title" value="<?php echo get_val('about_title', 'De Organisatie achter de Traditie', $content); ?>"></div>
            <div class="form-group"><label>Verhaal / Filosofie</label><textarea name="content_about_text" rows="5"><?php echo get_val('about_text', 'Achter elke magische glimlach van een kind, schuilt een feilloos georganiseerde machine. Sint Zaken is geboren uit de wens om de standaard van het Sinterklaasfeest te verhogen. Geen chaos, geen concessies in kwaliteit, maar een premium beleving waarbij traditie en strakke event-regie samenkomen. Wij zijn de stille motor die de magie feilloos laat draaien.', $content); ?></textarea></div>
        </div>

        <?php elseif($tab === 'settings'): ?>
        <div class="card">
            <h2>ChatGPiet Instellingen</h2>
            <div class="form-group">
                <label>Gemini API Key</label>
                <input type="password" name="content_gemini_api_key" placeholder="Plak hier je Google AI Studio API key (bijv. AIzaSy...)" value="<?php echo get_val('gemini_api_key', '', $content); ?>">
                <small style="color: #64748b; margin-top: 0.5rem; display: block;">Deze sleutel wordt veilig opgeslagen en uitsluitend gebruikt om ChatGPiet te laten praten.</small>
            </div>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 2rem 0;">
            <div class="form-group">
                <label>De "Geheime Instructie" (Prompt) van ChatGPiet</label>
                <textarea name="content_gemini_prompt" rows="6"><?php echo get_val('gemini_prompt', 'Je bent ChatG-Piet, een uiterst professionele, maar ook licht speelse en hartelijke virtuele assistent van "Sint Zaken", gepositioneerd op de openbare website voor potentiële klanten.', $content); ?></textarea>
                <small style="color: #64748b; margin-top: 0.5rem; display: block;">Dit is het "brein" van ChatGPiet. Klanten zien dit niet. Beschrijf hier wat hij wel en niet mag zeggen, de prijzen, de diensten, en zijn persoonlijkheid.</small>
            </div>
        </div>
        <?php endif; ?>
        <button type="submit" class="btn-save">💾 Opslaan</button>
    </form>
</div>
</body>
</html>
