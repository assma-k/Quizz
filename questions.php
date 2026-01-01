<?php
header("Content-Type: application/json"); 

$contenue = file_get_contents("question.json");
$allQuestion = json_decode($contenue, true);
$theme = $_GET["theme"] ?? "personnages";
$question = $allQuestion[$theme] ?? [];

echo json_encode($question);
?>