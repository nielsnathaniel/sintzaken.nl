<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) { header("Location: index.php"); exit; }
require 'db.php';

$success_msg = '';
$error_msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] === 'add') {
        $title = trim($_POST['title']);
        $description = trim($_POST['description']);
        $created_by = $_SESSION['username'] ?? 'Onbekend';
        
        if(!empty($title) && !empty($description)) {
            $stmt = $db->prepare("INSERT INTO tickets (title, description, created_by) VALUES (?, ?, ?)");
            $stmt->execute([$title, $description, $created_by]);
            $success_msg = "Ticket aangemaakt! Je kunt de tekst nu kopiëren voor de AI developer.";
        }
    } elseif ($_POST['action'] === 'update_status') {
        $id = $_POST['id'];
        $status = $_POST['status'];
        $db->prepare("UPDATE tickets SET status = ? WHERE id = ?")->execute([$status, $id]);
        $success_msg = "Status bijgewerkt.";
    }
}

if (isset($_GET['delete'])) {
    $db->prepare("DELETE FROM tickets WHERE id=?")->execute([$_GET['delete']]);
    header("Location: tickets.php?deleted=1");
    exit;
}

$tickets = $db->query("SELECT * FROM tickets ORDER BY status DESC, created_at DESC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>AI Developer Tickets - Sint Zaken Admin</title>
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
        
        .ticket-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem; }
        .ticket-card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; position: relative; background: #fff; }
        .ticket-card.done { background: #f8fafc; opacity: 0.7; }
        .ticket-title { font-weight: 600; font-size: 1.1rem; color: #1e293b; margin-bottom: 0.5rem; }
        .ticket-meta { font-size: 0.85rem; color: #64748b; margin-bottom: 1rem; }
        .ticket-desc { background: #f1f5f9; padding: 1rem; border-radius: 6px; font-family: monospace; font-size: 0.9rem; white-space: pre-wrap; margin-bottom: 1rem; border: 1px solid #e2e8f0; }
        
        .form-group { margin-bottom: 1rem; }
        .form-group label { display: block; font-weight: 500; margin-bottom: 0.3rem; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
        
        .btn-primary { background: #8a1538; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; }
        .btn-secondary { background: #e2e8f0; color: #475569; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 600; cursor: pointer; }
        .btn-copy { background: #1e40af; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.85rem; cursor: pointer; }
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
    <div style="display:grid; grid-template-columns: 1fr 2fr; gap: 2rem;">
        
        <!-- Add Ticket Form -->
        <div class="card" style="align-self: start;">
            <h2>➕ Nieuwe Wens / Ticket</h2>
            <p style="font-size:0.9rem; color:#64748b; margin-bottom:1.5rem;">Heb je een programmeer-wens? Beschrijf hem hier, zodat de beheerder hem direct naar de AI Developer kan kopiëren.</p>
            <form method="POST">
                <input type="hidden" name="action" value="add">
                <div class="form-group">
                    <label>Titel (Korte omschrijving)</label>
                    <input type="text" name="title" required placeholder="bijv. Extra knop op homepagina">
                </div>
                <div class="form-group">
                    <label>Uitgebreide wens voor de AI</label>
                    <textarea name="description" rows="5" required placeholder="Wat moet er precies gebouwd of aangepast worden?"></textarea>
                </div>
                <button type="submit" class="btn-primary">Ticket Aanmaken</button>
            </form>
        </div>

        <!-- Ticket List -->
        <div>
            <div class="ticket-grid">
                <?php foreach($tickets as $t): ?>
                <div class="ticket-card <?php echo $t['status'] == 'done' ? 'done' : ''; ?>">
                    <div class="ticket-title"><?php echo htmlspecialchars($t['title']); ?></div>
                    <div class="ticket-meta">Door: <?php echo htmlspecialchars($t['created_by']); ?> | Datum: <?php echo date('d-m-Y H:i', strtotime($t['created_at'])); ?></div>
                    
                    <div class="ticket-desc" id="desc-<?php echo $t['id']; ?>"><?php echo htmlspecialchars($t['description']); ?></div>
                    
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem;">
                        <button class="btn-copy" onclick="copyText('desc-<?php echo $t['id']; ?>', this)">📋 Kopieer voor AI</button>
                        
                        <div style="display:flex; gap:0.5rem; align-items:center;">
                            <form method="POST" style="margin:0;">
                                <input type="hidden" name="action" value="update_status">
                                <input type="hidden" name="id" value="<?php echo $t['id']; ?>">
                                <input type="hidden" name="status" value="<?php echo $t['status'] == 'open' ? 'done' : 'open'; ?>">
                                <button type="submit" class="btn-secondary" style="font-size:0.85rem;">
                                    <?php echo $t['status'] == 'open' ? 'Vink af ✅' : 'Heropen 🔄'; ?>
                                </button>
                            </form>
                            <a href="?delete=<?php echo $t['id']; ?>" onclick="return confirm('Verwijderen?')" style="color:#ef4444; font-size:0.85rem; text-decoration:none;">🗑️</a>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>

    </div>
</div>

<script>
function copyText(elementId, btn) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const oldText = btn.innerText;
        btn.innerText = "Gekopieerd! ✔️";
        btn.style.background = "#166534";
        setTimeout(() => {
            btn.innerText = oldText;
            btn.style.background = "#1e40af";
        }, 2000);
    });
}
</script>
</body>
</html>
