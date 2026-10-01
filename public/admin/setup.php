<?php
require 'db.php';

// Tabel voor contactaanvragen
$db->exec("CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

// Tabel voor website statistieken (simpele pageviews)
$db->exec("CREATE TABLE IF NOT EXISTS pageviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page TEXT NOT NULL,
    ip_address TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

// Tabel voor chat geschiedenis (ChatGPiet / Open Taai Taai)
$db->exec("CREATE TABLE IF NOT EXISTS chats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    role TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

// Tabel voor content beheer
$db->exec("CREATE TABLE IF NOT EXISTS content (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

// Dummy data voor content (als voorbeeld)
$stmt = $db->prepare("INSERT OR IGNORE INTO content (key, value) VALUES (:key, :value)");
$stmt->execute([':key' => 'hero_title', ':value' => 'Beleef de Ultieme Sinterklaas Magie']);
$stmt->execute([':key' => 'hero_subtitle', ':value' => 'Laat de Sint en zijn Pieten jullie bedrijf omtoveren tot een feestelijk en warm Sinterklaasfeest. Van onvergetelijke bedrijfsfeesten tot vrolijke meet & greets.']);

echo "Database succesvol opgezet!";
?>
