<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once '../Bids/bid.php';
    $database = new DB();
    $db = $database->getConnection();
    $bid = new Bid($db);
    $data = json_decode(file_get_contents("php://input"));
    $bid->bid_id = $data ;
    $bid = ($bid->delete());

?>