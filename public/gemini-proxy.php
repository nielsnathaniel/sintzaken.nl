<?php
// Enkel toegankelijk via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['error' => 'Method not allowed']));
}

header('Content-Type: application/json');

// Haal API key op uit de database
$dbFile = __DIR__ . '/admin/database.sqlite';
$api_key = '';

if (file_exists($dbFile)) {
    try {
        $db = new PDO('sqlite:' . $dbFile);
        $stmt = $db->query("SELECT value FROM content WHERE key = 'gemini_api_key'");
        if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $api_key = trim($row['value']);
        }
    } catch (Exception $e) {}
}

if (empty($api_key)) {
    http_response_code(500);
    exit(json_encode(['error' => ['status' => 'NO_API_KEY', 'message' => 'Geen API sleutel ingesteld in het admin paneel.']]));
}

// Lees de request data
$inputJSON = file_get_contents('php://input');
$inputData = json_decode($inputJSON, true);

if (!$inputData || !isset($inputData['contents'])) {
    http_response_code(400);
    exit(json_encode(['error' => 'Invalid request']));
}

// Stuur verzoek door naar de échte Google Gemini API
$url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' . $api_key;

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $inputJSON);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($http_code);
echo $response;
?>
