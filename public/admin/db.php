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
} catch (PDOException $e) {
    die("Database fout: " . $e->getMessage());
}
?>
