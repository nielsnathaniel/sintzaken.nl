<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}

require 'db.php';

$success_msg = '';
$error_msg = '';

// Check of de ingelogde gebruiker wel admin-rechten heeft
$is_superadmin = (isset($_SESSION['is_admin']) && $_SESSION['is_admin'] == 1);
if (!$is_superadmin) {
    // We kunnen de gebruiker alleen toestaan zijn eigen wachtwoord te wijzigen?
    // Laten we dat als simpeler design doen: non-admins zien alleen hun eigen edit form.
}

// Acties (Add / Edit / Delete)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        
        // --- ADD USER ---
        if ($_POST['action'] === 'add' && $is_superadmin) {
            $username = trim($_POST['username']);
            $password = $_POST['password'];
            $is_admin = isset($_POST['is_admin']) ? 1 : 0;
            
            if (!empty($username) && !empty($password)) {
                $hash = password_hash($password, PASSWORD_DEFAULT);
                try {
                    $stmt = $db->prepare("INSERT INTO users (username, password, is_admin) VALUES (?, ?, ?)");
                    $stmt->execute([$username, $hash, $is_admin]);
                    $success_msg = "Gebruiker succesvol toegevoegd.";
                } catch(PDOException $e) {
                    $error_msg = "Deze gebruikersnaam bestaat al.";
                }
            } else {
                $error_msg = "Vul alle velden in.";
            }
        }
        
        // --- EDIT USER ---
        if ($_POST['action'] === 'edit') {
            $user_id = (int)$_POST['user_id'];
            
            // Controle: superadmin mag iedereen bewerken, normale gebruiker alleen zichzelf
            if ($is_superadmin || $user_id === $_SESSION['user_id']) {
                $username = trim($_POST['username']);
                $new_password = $_POST['new_password'];
                $is_admin = isset($_POST['is_admin']) ? 1 : 0;
                
                // Zorg dat non-admins hun admin-rechten niet kunnen hacken
                if (!$is_superadmin) {
                    // Haal de huidige is_admin waarde op, dit mag de non-admin niet wijzigen
                    $stmt = $db->prepare("SELECT is_admin FROM users WHERE id = ?");
                    $stmt->execute([$user_id]);
                    $is_admin = $stmt->fetchColumn();
                }

                if (!empty($username)) {
                    if (!empty($new_password)) {
                        // Password is being updated
                        $hash = password_hash($new_password, PASSWORD_DEFAULT);
                        $stmt = $db->prepare("UPDATE users SET username = ?, password = ?, is_admin = ? WHERE id = ?");
                        $stmt->execute([$username, $hash, $is_admin, $user_id]);
                        $success_msg = "Gegevens en wachtwoord gewijzigd.";
                    } else {
                        // Only username/admin status is updated
                        $stmt = $db->prepare("UPDATE users SET username = ?, is_admin = ? WHERE id = ?");
                        $stmt->execute([$username, $is_admin, $user_id]);
                        $success_msg = "Gegevens gewijzigd.";
                    }
                    
                    // Update session if it's the current user
                    if ($user_id === $_SESSION['user_id']) {
                        $_SESSION['username'] = $username;
                    }
                }
            }
        }
    }
}

// --- DELETE USER ---
if (isset($_GET['delete']) && is_numeric($_GET['delete']) && $is_superadmin) {
    $delete_id = (int)$_GET['delete'];
    if ($delete_id !== $_SESSION['user_id']) {
        $stmt = $db->prepare("DELETE FROM users WHERE id = ?");
        $stmt->execute([$delete_id]);
        header("Location: users.php?deleted=1");
        exit;
    } else {
        $error_msg = "Je kunt jezelf niet verwijderen.";
    }
}

if(isset($_GET['deleted'])) {
    $success_msg = "Gebruiker succesvol verwijderd.";
}

// Haal gebruikers op (of alleen de ingelogde gebruiker als deze geen admin is)
if ($is_superadmin) {
    $stmt = $db->query("SELECT id, username, is_admin FROM users ORDER BY id ASC");
    $users = $stmt->fetchAll();
} else {
    $stmt = $db->prepare("SELECT id, username, is_admin FROM users WHERE id = ?");
    $stmt->execute([$_SESSION['user_id']]);
    $users = $stmt->fetchAll();
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gebruikersbeheer - Sint Zaken Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .header { background-color: #8a1538; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-family: 'Playfair Display', serif; margin: 0; font-size: 1.5rem; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; margin-left: 1.5rem; opacity: 0.8; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        .container { max-width: 1000px; margin: 2rem auto; padding: 0 2rem; }
        .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); padding: 2rem; margin-bottom: 2rem; border: 1px solid #e2e8f0; }
        h2 { margin-top: 0; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.5rem; margin-bottom: 1.5rem; }
        .form-group { margin-bottom: 1rem; }
        .form-group label { display: block; font-weight: 500; color: #334155; margin-bottom: 0.5rem; }
        .form-group input { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-family: inherit; box-sizing: border-box; }
        .btn-primary { background: #8a1538; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; }
        .btn-danger { color: #ef4444; text-decoration: none; font-weight: 500; margin-left: 1rem; }
        .alert-success { background: #dcfce7; color: #166534; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid #bbf7d0; }
        .alert-error { background: #fef2f2; color: #991b1b; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid #fecaca; }
        
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { text-align: left; padding: 1rem; border-bottom: 1px solid #e2e8f0; }
        th { background-color: #f1f5f9; color: #475569; font-weight: 600; }
        
        .user-edit-box { display: none; background: #f8fafc; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; border: 1px solid #e2e8f0; }
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
        <a href="content.php">Content</a>
        <a href="users.php" class="active">Gebruikers</a>
        <a href="?logout=1">Uitloggen</a>
    </div>
</div>
<div class="container">
    <?php if($success_msg): ?><div class="alert-success">✅ <?php echo $success_msg; ?></div><?php endif; ?>
    <?php if($error_msg): ?><div class="alert-error">❌ <?php echo $error_msg; ?></div><?php endif; ?>

    <div class="card">
        <h2>👥 Bestaande Gebruikers</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Gebruikersnaam</th>
                    <th>Rol</th>
                    <th>Acties</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($users as $user): ?>
                <tr>
                    <td><?php echo $user['id']; ?></td>
                    <td><strong><?php echo htmlspecialchars($user['username']); ?></strong></td>
                    <td><?php echo $user['is_admin'] ? '🟢 Beheerder' : '⚪️ Gebruiker'; ?></td>
                    <td>
                        <button class="btn-primary" onclick="document.getElementById('edit-user-<?php echo $user['id']; ?>').style.display='block'" style="padding: 0.5rem 1rem;">Bewerken</button>
                        <?php if($is_superadmin && $user['id'] !== $_SESSION['user_id']): ?>
                        <a href="?delete=<?php echo $user['id']; ?>" class="btn-danger" onclick="return confirm('Gebruiker verwijderen?');">Verwijderen</a>
                        <?php endif; ?>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" style="padding: 0; border: none;">
                        <div id="edit-user-<?php echo $user['id']; ?>" class="user-edit-box">
                            <form method="POST">
                                <input type="hidden" name="action" value="edit">
                                <input type="hidden" name="user_id" value="<?php echo $user['id']; ?>">
                                
                                <div class="form-group">
                                    <label>Gebruikersnaam</label>
                                    <input type="text" name="username" value="<?php echo htmlspecialchars($user['username']); ?>" required>
                                </div>
                                <div class="form-group">
                                    <label>Nieuw wachtwoord (Laat leeg om niet te wijzigen)</label>
                                    <input type="password" name="new_password" placeholder="Nieuw wachtwoord">
                                </div>
                                <?php if($is_superadmin && $user['id'] !== $_SESSION['user_id']): ?>
                                <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" name="is_admin" style="width:auto;" <?php if($user['is_admin']) echo 'checked'; ?>>
                                    <label style="margin:0;">Geef Beheerder (Admin) rechten</label>
                                </div>
                                <?php endif; ?>
                                <button type="submit" class="btn-primary" style="margin-top: 1rem;">Opslaan</button>
                                <button type="button" class="btn-primary" style="background:#64748b; margin-left:1rem;" onclick="document.getElementById('edit-user-<?php echo $user['id']; ?>').style.display='none'">Annuleren</button>
                            </form>
                        </div>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>

    <?php if($is_superadmin): ?>
    <div class="card">
        <h2>➕ Nieuwe Gebruiker Aanmaken</h2>
        <form method="POST">
            <input type="hidden" name="action" value="add">
            <div class="form-group">
                <label>Gebruikersnaam</label>
                <input type="text" name="username" required placeholder="bijv. admin2">
            </div>
            <div class="form-group">
                <label>Wachtwoord</label>
                <input type="password" name="password" required placeholder="Wachtwoord">
            </div>
            <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" name="is_admin" style="width:auto;">
                <label style="margin:0;">Geef Beheerder (Admin) rechten</label>
            </div>
            <button type="submit" class="btn-primary" style="margin-top: 1rem;">Gebruiker Toevoegen</button>
        </form>
    </div>
    <?php endif; ?>

</div>
</body>
</html>
