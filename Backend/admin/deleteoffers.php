<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once '../offers/offer.php';
    $database = new DB();
    $db = $database->getConnection();
    $offer = new offer($db);
    $data = json_decode(file_get_contents("php://input"));
    $offer->offer_bid_id = $data ;
    $offer = ($offer->delete());

?>