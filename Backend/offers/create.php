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
    $offer_items =  ($data->offerdata);
    $user_id = ($data->user_id);
    $bid_id = ($data->bid_id);

    foreach ($offer_items as $item) {
        $offer->offer_user_id = $user_id;
        $offer->offer_bid_id = $bid_id;
        $offer->offer_item_id = $item->item_id;
        $offer->offer_item_unit_price = $item->item_price_per_unit;
        $offer->offer_item_description = $item->item_description;
        $offer->offer_item_unit = $item->item_unit;
        $offer->offer_item_quantity = $item->item_quantity;
        $offer->offer_item_price_total = $item->item_price_total;
        $offer->createOffer();
        
      }
      echo json_encode("offer created");




?>