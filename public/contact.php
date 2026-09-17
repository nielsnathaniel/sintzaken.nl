<?php
header('Content-Type: application/json');

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the JSON data if sent via fetch
    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data) {
        $data = $_POST;
    }
    
    $name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
    $email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
    $message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';
    $phone = isset($data['phone']) ? strip_tags(trim($data['phone'])) : 'Niet opgegeven';

    // Validate inputs
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Vul alle verplichte velden correct in."]);
        exit;
    }

    $recipient = "info@sintzaken.nl";
    $subject = "Nieuw contactformulier bericht van $name (SintZaken.nl)";
    
    $email_content = "Er is een nieuw bericht binnengekomen via het contactformulier op SintZaken.nl.\n\n";
    $email_content .= "Gegevens van de afzender:\n";
    $email_content .= "--------------------------------------------------\n";
    $email_content .= "Naam: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Telefoon: $phone\n\n";
    $email_content .= "Bericht:\n";
    $email_content .= "--------------------------------------------------\n";
    $email_content .= "$message\n";
    $email_content .= "--------------------------------------------------\n";

    // Set headers
    $email_headers = "From: SintZaken Website <info@sintzaken.nl>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Uw bericht is succesvol verzonden. Wij nemen zo spoedig mogelijk contact met u op!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Er is een fout opgetreden bij het verzenden. Probeer het later nog eens of stuur direct een mail."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Ongeldige aanvraag."]);
}
?>
