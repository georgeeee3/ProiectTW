<?php
$host = 'db';
$db   = 'scoala';
$user = 'student';
$pass = 'pass';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $sql = "SELECT * FROM studenti ORDER BY id DESC";
    $result = $conn->query($sql);
    $studenti = [];
    while($row = $result->fetch_assoc()) {
        $studenti[] = $row;
    }
    echo json_encode($studenti);
} 

elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if(isset($data['nume'], $data['an'], $data['media'])) {
        $nume = $conn->real_escape_string($data['nume']);
        $an = intval($data['an']);
        $media = floatval($data['media']);

        $sql = "INSERT INTO studenti (nume, an, media) VALUES ('$nume', '$an', '$media')";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "error" => $conn->error]);
        }
    }
}

$conn->close();
?>