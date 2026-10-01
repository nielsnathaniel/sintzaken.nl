<?php
session_start();
header('Content-Type: application/json');

// Pre-flight for CORS if needed
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Niet ingelogd"]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !isset($data['key']) || !isset($data['value'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing parameters"]);
    exit;
}

require '../admin/db.php';

$key = trim($data['key']);
$value = trim($data['value']); // Keep HTML tags for inline bold/italic if wanted, but strip scripts
$value = strip_tags($value, '<b><i><strong><em><br><a>');

try {
    $stmt = $db->prepare("INSERT OR REPLACE INTO content (key, value) VALUES (:key, :value)");
    $stmt->execute([':key' => $key, ':value' => $value]);
    echo json_encode(["status" => "success"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error"]);
}
?>
