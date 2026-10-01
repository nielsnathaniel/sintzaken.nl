<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['error' => 'Method not allowed']));
}
header('Content-Type: application/json');

$dbFile = __DIR__ . '/admin/database.sqlite';
$api_key = '';
$prompt = 'Je bent ChatG-Piet, een uiterst professionele, maar ook licht speelse en hartelijke virtuele assistent van "Sint Zaken", gepositioneerd op de openbare website voor potentiële klanten.';

if (file_exists($dbFile)) {
    try {
        $db = new PDO('sqlite:' . $dbFile);
        $stmt = $db->query("SELECT key, value FROM content WHERE key IN ('gemini_api_key', 'gemini_prompt')");
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            if ($row['key'] === 'gemini_api_key') $api_key = trim($row['value']);
            if ($row['key'] === 'gemini_prompt' && !empty(trim($row['value']))) $prompt = trim($row['value']);
        }
    } catch (Exception $e) {}
}

if (empty($api_key)) {
    http_response_code(500);
    exit(json_encode(['error' => ['status' => 'NO_API_KEY', 'message' => 'Geen API sleutel ingesteld in het admin paneel.']]));
}

// Fetch all website content to inject into the bot's context
$site_context = "";
if (isset($db)) {
    $stmt = $db->query("SELECT key, value FROM content WHERE key NOT LIKE 'gemini_%' AND value != ''");
    $data_strings = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // Strip HTML tags for cleaner context
        $clean_val = strip_tags($row['value']);
        $data_strings[] = $row['key'] . ": " . $clean_val;
    }
    if (!empty($data_strings)) {
        $site_context = "

BELANGRIJKE WEBSITE INFORMATIE:
Je hebt toegang tot de actuele teksten en prijzen van de website. Gebruik dit om vragen accuraat te beantwoorden. Hier is de data:
" . implode("
", $data_strings);
    }
}
$prompt .= $site_context;


$inputJSON = file_get_contents('php://input');
$inputData = json_decode($inputJSON, true);

if (!$inputData || !isset($inputData['contents'])) {
    http_response_code(400);
    exit(json_encode(['error' => 'Invalid request']));
}

$inputData['systemInstruction'] = [
    'parts' => [['text' => $prompt]]
];
$modifiedJSON = json_encode($inputData);

// Stuur verzoek door naar Gemini
$url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'x-goog-api-key: ' . $api_key
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $modifiedJSON);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
    error_log("CURL Error: " . $error_msg);
}
curl_close($ch);

if ($http_code >= 400) {
    error_log("Gemini API Error (HTTP $http_code): $response");
    // Return detailed error for debugging
    http_response_code($http_code);
    echo json_encode([
        'error' => [
            'status' => 'API_ERROR',
            'http_code' => $http_code,
            'details' => json_decode($response, true)
        ]
    ]);
    exit;
}

http_response_code($http_code);
echo $response;
?>
