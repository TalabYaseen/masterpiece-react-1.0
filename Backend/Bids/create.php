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
    $bid->userid_bidid = $data->userid;
    $bid->subject = $data->Subject;
    $bid->phone = $data->Phone;
    $bid->location = $data->Location;
    $bid->description = $data->Description;
    $bid->details = $data->Details;

    if($bid->createBid()){
        echo json_encode("Bid created");
    } else{
        echo json_encode("Failed to create Bid");
    }
?>