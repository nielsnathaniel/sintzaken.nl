<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    http_response_code(403);
    exit(json_encode(['error' => 'Unauthorized']));
}

require 'db.php';

$session_id = isset($_GET['session']) ? $_GET['session'] : '';

if (empty($session_id)) {
    echo json_encode([]);
    exit;
}

$stmt = $db->prepare("SELECT role, message, created_at FROM chats WHERE session_id = :session ORDER BY created_at ASC");
$stmt->execute([':session' => $session_id]);
$messages = $stmt->fetchAll();

echo json_encode($messages);
?>
