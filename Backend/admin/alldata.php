<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once '../Bids/bid.php';
    include_once '../users/users.php';
    include_once '../offers/offer.php';
    $database = new DB();
    $db = $database->getConnection();
    $bid = new Bid($db);
    $bids =  ($bid->allbids());
    $user = new User($db);
    $users = ($user->allusers());
    $offer = new offer($db);
    $offers = $offer->alloffers();
    $data = [$users,$bids,$offers] ;
    echo (json_encode($data))
?>