<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './bid.php';

    $database = new DB();
    $db = $database->getConnection();

    $bid = new Bid($db);
    $data = json_decode(file_get_contents("php://input"));
    if($bid->findbid($data)){
        echo json_encode($bid->findbid($data));
    } else{
        echo json_encode("Failed to create Bid");
    }
?>