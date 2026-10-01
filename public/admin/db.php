<?php
// Pad naar de SQLite database
$dbFile = __DIR__ . '/database.sqlite';
$isNew = !file_exists($dbFile);

try {
    $db = new PDO('sqlite:' . $dbFile);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    
    // Auto-migrate to add is_read column if it doesn't exist yet
    try {
        $db->exec("ALTER TABLE chats ADD COLUMN is_read INTEGER DEFAULT 0");
    } catch (PDOException $e) {
        // Column already exists, ignore
    }

    // Initialize users table
    $db->exec("CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        is_admin INTEGER DEFAULT 0
    )");

    // Initialize CRM tables
    $db->exec("CREATE TABLE IF NOT EXISTS mail_templates (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        subject TEXT NOT NULL,
        body TEXT NOT NULL
    )");

    $db->exec("CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        company TEXT,
        address TEXT,
        status TEXT DEFAULT 'nieuw',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    $db->exec("CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER,
        title TEXT NOT NULL,
        event_date DATE,
        event_time TEXT,
        status TEXT DEFAULT 'gepland',
        notes TEXT,
        FOREIGN KEY(client_id) REFERENCES clients(id)
    )");

    $db->exec("CREATE TABLE IF NOT EXISTS tickets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        status TEXT DEFAULT 'open',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        created_by TEXT
    )");

    // Insert default admin if table is empty
    $stmt = $db->query("SELECT COUNT(*) FROM users");
    if ($stmt->fetchColumn() == 0) {
        $default_user = 'sint';
        $default_pass = password_hash('zaken2024', PASSWORD_DEFAULT);
        $db->exec("INSERT INTO users (username, password, is_admin) VALUES ('$default_user', '$default_pass', 1)");
    }
} catch (PDOException $e) {
    die("Database fout: " . $e->getMessage());
}
?>
