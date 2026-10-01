<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) { header("Location: index.php"); exit; }
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'save') {
    $id = $_POST['id'] ?? null;
    $client_id = $_POST['client_id'];
    $title = trim($_POST['title']);
    $event_date = $_POST['event_date'];
    $event_time = $_POST['event_time'];
    $status = $_POST['status'];
    $notes = trim($_POST['notes']);
    
    if($id) {
        $stmt = $db->prepare("UPDATE appointments SET client_id=?, title=?, event_date=?, event_time=?, status=?, notes=? WHERE id=?");
        $stmt->execute([$client_id, $title, $event_date, $event_time, $status, $notes, $id]);
    } else {
        $stmt = $db->prepare("INSERT INTO appointments (client_id, title, event_date, event_time, status, notes) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([$client_id, $title, $event_date, $event_time, $status, $notes]);
        
        // Also update client status to 'akkoord' since it's planned
        $db->prepare("UPDATE clients SET status='akkoord' WHERE id=?")->execute([$client_id]);
    }
    header("Location: agenda.php?saved=1");
    exit;
}

if(isset($_GET['delete'])) {
    $db->prepare("DELETE FROM appointments WHERE id=?")->execute([$_GET['delete']]);
    header("Location: agenda.php?deleted=1");
    exit;
}

// Fetch all appointments + client names
$stmt = $db->query("
    SELECT a.*, c.name as client_name 
    FROM appointments a 
    LEFT JOIN clients c ON a.client_id = c.id 
    ORDER BY a.event_date ASC, a.event_time ASC
");
$appointments = $stmt->fetchAll();

// Fetch clients for dropdown
$clients = $db->query("SELECT id, name FROM clients ORDER BY name ASC")->fetchAll();

// For FullCalendar
$events = [];
foreach($appointments as $app) {
    $events[] = [
        'id' => $app['id'],
        'title' => $app['title'] . ' (' . $app['client_name'] . ')',
        'start' => $app['event_date'] . ($app['event_time'] ? 'T' . $app['event_time'] : ''),
        'color' => ($app['status'] == 'voltooid') ? '#166534' : '#8a1538'
    ];
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Agenda - Sint Zaken Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <!-- FullCalendar CSS/JS -->
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.global.min.js'></script>
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        .container { max-width: 1200px; margin: 2rem auto; padding: 0 2rem; }
        .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 2rem; margin-bottom: 2rem; border: 1px solid #e2e8f0; }
        .btn-primary { background: #8a1538; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 600; cursor: pointer; text-decoration: none; }
        .btn-secondary { background: #64748b; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 600; cursor: pointer; }
        .btn-danger { color: #ef4444; text-decoration: none; font-weight: 500; margin-left: 1rem; }
        
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { text-align: left; padding: 1rem; border-bottom: 1px solid #e2e8f0; }
        th { background-color: #f1f5f9; color: #475569; font-weight: 600; }
        
        /* Modal for adding/editing */
        .modal { display: none; position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:1000; justify-content:center; align-items:center; }
        .modal-content { background: white; padding: 2rem; border-radius: 12px; width: 100%; max-width: 500px; }
        .form-group { margin-bottom: 1rem; }
        .form-group label { display: block; font-weight: 500; margin-bottom: 0.3rem; }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
        
        #view-toggle { margin-bottom: 1.5rem; }
    </style>
</head>
<body>
<div class="header">
    <h1>Sint Zaken Dashboard</h1>
    <div class="nav-links">
        <a href="dashboard.php">Overzicht</a>
        <a href="clients.php">Klanten</a>
        <a href="agenda.php" class="active">Agenda</a>
        <a href="forms.php">Formulieren</a>
        <a href="mail_templates.php">Mail Templates</a>
        <a href="users.php">Gebruikers</a>
        <a href="logout.php">Uitloggen</a>
    </div>
</div>

<div class="container">
    <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
            <h2 style="margin:0;">📅 Agenda & Planning</h2>
            <div>
                <button class="btn-secondary" onclick="toggleView()" id="btn-toggle">Wissel naar Kalender</button>
                <button class="btn-primary" onclick="openModal()">➕ Afspraak Inplannen</button>
            </div>
        </div>

        <!-- LIST VIEW -->
        <div id="list-view">
            <?php if(count($appointments) > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>Datum & Tijd</th>
                        <th>Wat</th>
                        <th>Klant</th>
                        <th>Status</th>
                        <th>Acties</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($appointments as $app): ?>
                    <tr>
                        <td><strong><?php echo date('d-m-Y', strtotime($app['event_date'])); ?></strong><br><span style="color:#64748b; font-size:0.9rem;"><?php echo $app['event_time'] ?: 'Tijd n.b.'; ?></span></td>
                        <td><?php echo htmlspecialchars($app['title']); ?></td>
                        <td>
                            <?php echo htmlspecialchars($app['client_name']); ?><br>
                            <a href="send_mail.php?client_id=<?php echo $app['client_id']; ?>" style="font-size:0.85rem; color:#8a1538; font-weight:bold; text-decoration:none;">✉️ Mail Sturen</a>
                        </td>
                        <td>
                            <span style="background:<?php echo $app['status']=='voltooid'?'#dcfce7':'#fef08a'; ?>; padding:0.2rem 0.5rem; border-radius:4px; font-size:0.85rem;">
                                <?php echo ucfirst($app['status']); ?>
                            </span>
                        </td>
                        <td>
                            <!-- Minimal edit approach: just delete for now to keep code simple, full edit via modal would need JS data filling -->
                            <a href="?delete=<?php echo $app['id']; ?>" class="btn-danger" onclick="return confirm('Verwijderen?');">Verwijder</a>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <?php else: ?>
                <p style="color:#64748b; text-align:center; padding:2rem 0;">Nog geen afspraken gepland.</p>
            <?php endif; ?>
        </div>

        <!-- CALENDAR VIEW -->
        <div id="calendar-view" style="display:none;">
            <div id='calendar'></div>
        </div>
    </div>
</div>

<!-- Modal for adding appointment -->
<div class="modal" id="addModal">
    <div class="modal-content">
        <h3 style="margin-top:0;">Nieuwe Afspraak</h3>
        <form method="POST">
            <input type="hidden" name="action" value="save">
            <div class="form-group">
                <label>Klant</label>
                <select name="client_id" required>
                    <option value="">-- Kies Klant --</option>
                    <?php foreach($clients as $c): ?>
                        <option value="<?php echo $c['id']; ?>"><?php echo htmlspecialchars($c['name']); ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="form-group">
                <label>Titel (bijv. Huisbezoek / Theatershow)</label>
                <input type="text" name="title" required>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                <div class="form-group">
                    <label>Datum</label>
                    <input type="date" name="event_date" required>
                </div>
                <div class="form-group">
                    <label>Tijd (optioneel)</label>
                    <input type="time" name="event_time">
                </div>
            </div>
            <div class="form-group">
                <label>Status</label>
                <select name="status">
                    <option value="gepland">Gepland (Voorbereiding)</option>
                    <option value="voltooid">Voltooid</option>
                </select>
            </div>
            <div class="form-group">
                <label>Notities</label>
                <textarea name="notes" rows="3"></textarea>
            </div>
            <div style="margin-top:1.5rem; display:flex; justify-content:flex-end; gap:1rem;">
                <button type="button" class="btn-secondary" onclick="closeModal()">Annuleren</button>
                <button type="submit" class="btn-primary">Opslaan</button>
            </div>
        </form>
    </div>
</div>

<script>
    let currentView = 'list';
    
    function toggleView() {
        const list = document.getElementById('list-view');
        const cal = document.getElementById('calendar-view');
        const btn = document.getElementById('btn-toggle');
        
        if(currentView === 'list') {
            list.style.display = 'none';
            cal.style.display = 'block';
            btn.innerText = 'Wissel naar Lijst';
            currentView = 'cal';
            // Render calendar (FullCalendar needs to render when visible)
            setTimeout(() => { calendar.render(); }, 100);
        } else {
            cal.style.display = 'none';
            list.style.display = 'block';
            btn.innerText = 'Wissel naar Kalender';
            currentView = 'list';
        }
    }

    function openModal() { document.getElementById('addModal').style.display = 'flex'; }
    function closeModal() { document.getElementById('addModal').style.display = 'none'; }

    // Initialize FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'nl',
        firstDay: 1,
        events: <?php echo json_encode($events); ?>,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
        }
    });
</script>
</body>
</html>
