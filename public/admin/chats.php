<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}

require 'db.php';

// Haal unieke sessies op
$stmt = $db->query("
    SELECT session_id, MIN(created_at) as started_at, COUNT(*) as msg_count, MIN(is_read) as session_read
    FROM chats 
    GROUP BY session_id 
    ORDER BY started_at DESC
");
$sessions = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Geschiedenis - Sint Zaken Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1.5rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        
        .container { max-width: 1200px; margin: 2rem auto; padding: 0 2rem; display: flex; gap: 2rem; height: 75vh; }
        
        .sidebar { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); width: 350px; display: flex; flex-direction: column; overflow: hidden; }
        .sidebar-header { padding: 1.5rem; border-bottom: 1px solid #e2e8f0; }
        .sidebar-header h2 { margin: 0; font-size: 1.2rem; color: #1e293b; }
        .session-list { flex: 1; overflow-y: auto; }
        .session-item { padding: 1rem 1.5rem; border-bottom: 1px solid #f1f5f9; cursor: pointer; transition: background 0.2s; }
        .session-item:hover { background: #f8fafc; }
        .session-item.active { background: #fef2f2; border-left: 4px solid #8a1538; }
        .session-time { font-size: 0.85rem; color: #64748b; margin-bottom: 0.25rem; }
        .session-id { font-weight: 500; color: #334155; font-size: 0.95rem; }
        .session-count { font-size: 0.8rem; color: #8a1538; background: #fee2e2; padding: 0.2rem 0.5rem; border-radius: 12px; display: inline-block; margin-top: 0.5rem; }
        
        .chat-view { flex: 1; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; flex-direction: column; overflow: hidden; }
        .chat-header { padding: 1.5rem; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
        .chat-header h2 { margin: 0; font-size: 1.2rem; color: #1e293b; }
        .chat-content { flex: 1; overflow-y: auto; padding: 2rem; display: flex; flex-direction: column; gap: 1rem; }
        
        .msg { max-width: 70%; padding: 1rem; border-radius: 12px; line-height: 1.5; }
        .msg.user { background: #8a1538; color: white; align-self: flex-end; border-bottom-right-radius: 2px; }
        .msg.bot { background: #f1f5f9; color: #1e293b; align-self: flex-start; border-bottom-left-radius: 2px; }
        
        .empty-state { text-align: center; color: #64748b; padding: 3rem; margin: auto; }
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
    <!-- Linker zijbalk met alle gesprekken -->
    <div class="sidebar">
        <div class="sidebar-header">
            <h2>Gesprekken</h2>
        </div>
        <div class="session-list">
            <?php if(count($sessions) > 0): ?>
                <?php foreach($sessions as $session): ?>
                    <div class="session-item" id="session-<?php echo htmlspecialchars($session['session_id']); ?>" onclick="loadChat('<?php echo htmlspecialchars($session['session_id']); ?>')">
                        <div class="session-time" style="display: flex; justify-content: space-between;">
                            <span><?php echo date('d-m-Y H:i', strtotime($session['started_at'])); ?></span>
                            <?php if($session['session_read'] == 0): ?>
                                <span class="unread-dot" style="background: #ef4444; width: 8px; height: 8px; border-radius: 50%; display: inline-block;"></span>
                            <?php endif; ?>
                        </div>
                        <div class="session-id" style="<?php echo ($session['session_read'] == 0) ? 'font-weight: 700;' : ''; ?>">Bezoeker #<?php echo substr($session['session_id'], -5); ?></div>
                        <div class="session-count"><?php echo $session['msg_count']; ?> berichten</div>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <div style="padding: 2rem; text-align: center; color: #64748b;">Nog geen gesprekken gevoerd.</div>
            <?php endif; ?>
        </div>
    </div>
    
    <!-- Rechter kant met het geselecteerde gesprek -->
    <div class="chat-view">
        <div class="chat-header">
            <h2 id="chat-title">Selecteer een gesprek</h2>
        </div>
        <div class="chat-content" id="chat-box">
            <div class="empty-state">
                Klik op een gesprek in de zijbalk om de berichten te lezen.
            </div>
        </div>
    </div>
</div>

<script>
function loadChat(sessionId) {
    document.getElementById('chat-title').innerText = 'Laden...';
    
    // Simpele API call naar een helper scriptje om de berichten op te halen
    fetch('api_get_chat.php?session=' + sessionId)
        .then(response => response.json())
        .then(data => {
            const chatBox = document.getElementById('chat-box');
            chatBox.innerHTML = '';
            
            document.getElementById('chat-title').innerText = 'Gesprek met Bezoeker #' + sessionId.slice(-5);
            
            data.forEach(msg => {
                const div = document.createElement('div');
                div.className = 'msg ' + (msg.role === 'user' ? 'user' : 'bot');
                // Simpele Markdown (Bold) parser voor weergave
                let htmlText = msg.message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                div.innerHTML = htmlText;
                chatBox.appendChild(div);
            });
            
            // Scroll naar onderen
            chatBox.scrollTop = chatBox.scrollHeight;
            
            // Verberg de ongelezen stip visueel
            const sessionDiv = document.getElementById('session-' + sessionId);
            if(sessionDiv) {
                const dot = sessionDiv.querySelector('.unread-dot');
                if(dot) dot.style.display = 'none';
                sessionDiv.querySelector('.session-id').style.fontWeight = '500';
            }
        })
        .catch(err => {
            document.getElementById('chat-box').innerHTML = '<div class="empty-state">Er ging iets mis bij het laden.</div>';
        });
}
</script>
</body>
</html>
