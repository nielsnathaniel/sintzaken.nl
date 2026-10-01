<?php
header('Content-Type: application/json');

// We use the admin db file for simplicity
$dbFile = __DIR__ . '/../admin/database.sqlite';
if (!file_exists($dbFile)) {
    exit(json_encode(['status' => 'error']));
}

try {
    $db = new PDO('sqlite:' . $dbFile);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents('php://input'), true);
    $page = isset($data['page']) ? strip_tags(trim($data['page'])) : '/';
    $user_agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'Unknown';
    $ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'Unknown';

    $stmt = $db->prepare("INSERT INTO pageviews (page, ip_address, user_agent) VALUES (:page, :ip, :ua)");
    $stmt->execute([
        ':page' => $page,
        ':ip' => hash('sha256', $ip), // Hash IP for privacy (GDPR friendly)
        ':ua' => $user_agent
    ]);

    echo json_encode(['status' => 'success']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error']);
}
?>
