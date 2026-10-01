<?php
header('Content-Type: application/json');

$dbFile = __DIR__ . '/../admin/database.sqlite';
if (!file_exists($dbFile)) {
    exit(json_encode(['status' => 'error']));
}

try {
    $db = new PDO('sqlite:' . $dbFile);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents('php://input'), true);
    
    $session_id = isset($data['session_id']) ? strip_tags(trim($data['session_id'])) : 'Unknown';
    $role = isset($data['role']) ? strip_tags(trim($data['role'])) : 'user';
    $message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

    if (empty($message)) {
        exit(json_encode(['status' => 'empty']));
    }

    $stmt = $db->prepare("INSERT INTO chats (session_id, role, message) VALUES (:session, :role, :msg)");
    $stmt->execute([
        ':session' => $session_id,
        ':role' => $role,
        ':msg' => $message
    ]);

    echo json_encode(['status' => 'success']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error']);
}
?>
