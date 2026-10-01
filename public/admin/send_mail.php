<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) { header("Location: index.php"); exit; }
require 'db.php';

$client_id = $_GET['client_id'] ?? null;
if(!$client_id) { header("Location: clients.php"); exit; }

$stmt = $db->prepare("SELECT * FROM clients WHERE id = ?");
$stmt->execute([$client_id]);
$client = $stmt->fetch();
if(!$client) { header("Location: clients.php"); exit; }

$stmt = $db->query("SELECT * FROM mail_templates ORDER BY title ASC");
$templates = $stmt->fetchAll();

$success_msg = '';
$error_msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = $client['email'];
    $subject = $_POST['subject'] ?? '';
    $body = $_POST['body'] ?? '';
    
    if(!empty($to) && !empty($subject) && !empty($body)) {
        $headers = "From: Sint Zaken <sint@sintzaken.nl>\r\n";
        $headers .= "Reply-To: sint@sintzaken.nl\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        if (mail($to, $subject, $body, $headers)) {
            $success_msg = "E-mail is succesvol verzonden naar " . htmlspecialchars($to);
            // Optioneel: Update status naar 'offerte'
            if(isset($_POST['update_status'])) {
                $db->prepare("UPDATE clients SET status = 'offerte' WHERE id = ?")->execute([$client_id]);
                $client['status'] = 'offerte';
            }
        } else {
            $error_msg = "Er ging iets mis bij het versturen van de e-mail.";
        }
    } else {
        $error_msg = "Controleer of het e-mailadres, onderwerp en bericht zijn ingevuld.";
    }
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>E-mail Versturen - Sint Zaken</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 2rem; }
        .card { background: white; padding: 2rem; border-radius: 12px; max-width: 800px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        h2 { margin-top: 0; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.5rem; }
        .form-group { margin-bottom: 1.2rem; }
        .form-group label { display: block; font-weight: 500; margin-bottom: 0.5rem; }
        .form-group input, .form-group textarea, .form-group select { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; font-size: 1rem; box-sizing: border-box; }
        .btn-primary { background: #8a1538; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; }
        .btn-secondary { background: #64748b; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none; }
        .alert-success { background: #dcfce7; color: #166534; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; }
        .alert-error { background: #fef2f2; color: #991b1b; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; }
    </style>
    <script>
        const templates = <?php echo json_encode($templates); ?>;
        const client = <?php echo json_encode($client); ?>;
        
        function loadTemplate() {
            const id = document.getElementById('template_select').value;
            if(!id) return;
            const tpl = templates.find(t => t.id == id);
            if(tpl) {
                let subject = tpl.subject;
                let body = tpl.body;
                
                // Replace variables
                const vars = {
                    '{{naam}}': client.name || '',
                    '{{bedrijf}}': client.company || '',
                    '{{datum}}': '[Vul datum in]',
                    '{{prijs}}': '[Vul prijs in]'
                };
                
                for (const [key, value] of Object.entries(vars)) {
                    subject = subject.split(key).join(value);
                    body = body.split(key).join(value);
                }
                
                document.getElementById('mail_subject').value = subject;
                document.getElementById('mail_body').value = body;
            }
        }
    </script>
</head>
<body>
    <div class="card">
        <h2>✉️ E-mail naar <?php echo htmlspecialchars($client['name']); ?></h2>
        
        <?php if($success_msg): ?><div class="alert-success">✅ <?php echo $success_msg; ?></div><?php endif; ?>
        <?php if($error_msg): ?><div class="alert-error">❌ <?php echo $error_msg; ?></div><?php endif; ?>

        <form method="POST">
            <div class="form-group">
                <label>Kies een Template (optioneel)</label>
                <select id="template_select" onchange="loadTemplate()">
                    <option value="">-- Zelf typen --</option>
                    <?php foreach($templates as $tpl): ?>
                        <option value="<?php echo $tpl['id']; ?>"><?php echo htmlspecialchars($tpl['title']); ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            
            <div class="form-group">
                <label>Aan</label>
                <input type="text" value="<?php echo htmlspecialchars($client['email']); ?>" disabled>
            </div>
            
            <div class="form-group">
                <label>Onderwerp</label>
                <input type="text" name="subject" id="mail_subject" required>
            </div>
            
            <div class="form-group">
                <label>Bericht</label>
                <textarea name="body" id="mail_body" rows="12" required></textarea>
            </div>
            
            <div class="form-group" style="display:flex; gap:0.5rem; align-items:center;">
                <input type="checkbox" name="update_status" id="update_status" value="1" style="width:auto;">
                <label for="update_status" style="margin:0; font-weight:normal;">Markeer klant als 'Offerte Verstuurd' na verzenden</label>
            </div>

            <button type="submit" class="btn-primary">Versturen 🚀</button>
            <a href="clients.php" class="btn-secondary" style="margin-left: 1rem;">Terug naar Klanten</a>
        </form>
    </div>
</body>
</html>
