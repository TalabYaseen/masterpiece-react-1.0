<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './offer.php';
    $database = new DB();
    $db = $database->getConnection();
    $offer = new Offer($db);
    $data = json_decode(file_get_contents("php://input"));
    $user_id = ($data->user_id);
    $bid_id = ($data->bid_id);
    $offer->offer_user_id = $user_id;
    $offer->offer_bid_id = $bid_id;
    echo json_encode($offer->checkoffer());
?>