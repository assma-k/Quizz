<?php
header("Content-Type: application/json"); 
$theme = $_GET["theme"] ?? "personnages";
$score = $_GET["score"] ?? 0;
$total = $_GET["total"] ?? 0;

setcookie("score_" . $theme, $score . "/" . $total);
echo json_encode([
    "success " => true,
    "messages" => "score saauvegardé",
    "theme" => $theme,
    "score" => $score . "/" . $total
]);
?>