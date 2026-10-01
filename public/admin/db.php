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
