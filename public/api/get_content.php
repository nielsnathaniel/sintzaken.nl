<?php
header('Content-Type: application/json');

$dbFile = __DIR__ . '/../admin/database.sqlite';
if (!file_exists($dbFile)) {
    echo json_encode([]);
    exit;
}

try {
    $db = new PDO('sqlite:' . $dbFile);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    $page = isset($_GET['page']) ? strip_tags($_GET['page']) : '';
    
    if ($page) {
        $stmt = $db->prepare("SELECT key, value FROM content WHERE key LIKE :page_key");
        $stmt->execute([':page_key' => $page . '_%']);
    } else {
        $stmt = $db->query("SELECT key, value FROM content");
    }
    
    $results = $stmt->fetchAll();
    
    $content = [];
    foreach ($results as $row) {
        $content[$row['key']] = $row['value'];
    }
    
    session_start();
    $content['_is_admin'] = (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true);
    
    echo json_encode($content);
} catch (Exception $e) {
    echo json_encode([]);
}
?>
