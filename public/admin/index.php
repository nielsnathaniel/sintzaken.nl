<?php
session_start();
require 'db.php';

// Check of users tabel bestaat en inloggen
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['username']) && !empty($_POST['password'])) {
        $stmt = $db->prepare("SELECT id, username, password, is_admin FROM users WHERE username = ?");
        $stmt->execute([$_POST['username']]);
        $user = $stmt->fetch();

        if ($user && password_verify($_POST['password'], $user['password'])) {
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['is_admin'] = $user['is_admin'];
            header("Location: dashboard.php");
            exit;
        } else {
            $error = 'Ongeldige inloggegevens.';
        }
    } else {
        $error = 'Vul aub beide velden in.';
    }
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sint Zaken - Admin Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-box {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        h1 {
            font-family: 'Playfair Display', serif;
            color: #8a1538;
            margin-bottom: 2rem;
            font-size: 2rem;
        }
        input {
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            box-sizing: border-box;
            font-size: 1rem;
        }
        button {
            width: 100%;
            padding: 1rem;
            background-color: #8a1538;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }
        button:hover {
            background-color: #a01b44;
        }
        .error {
            color: #ef4444;
            margin-bottom: 1rem;
            font-weight: 500;
        }
    </style>
</head>
<body>

<div class="login-box">
    <h1>Sint Zaken Admin</h1>
    <?php if($error): ?>
        <div class="error"><?php echo htmlspecialchars($error); ?></div>
    <?php endif; ?>
    <form method="POST">
        <input type="text" name="username" placeholder="Gebruikersnaam" required>
        <input type="password" name="password" placeholder="Wachtwoord" required>
        <button type="submit">Inloggen</button>
    </form>
</div>

</body>
</html>
