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
    $bid_id = $data;
    $offer->offer_bid_id = $bid_id;
    $num_biders = 0;
    $count = 0 ;
    $data = $offer->getoffers();
    if ($data) {
    foreach ($data as $item) {
        if ($num_biders == 0) {
            $num_biders ++ ;
            $count ++ ;
        }else if ($data [$count-1]["offer_user_id"] !== $item["offer_user_id"]) {
                $num_biders ++ ;
                $count ++ ;
            }else {
                $count ++ ;
            }
      }

    $num_items = count($data) / $num_biders;
    $result = [] ;
        for($i = 0; $i < count($data);) {
            $temp = [] ;
            for($x=0; $x < $num_items; $x++) {
                array_push($temp, $data[$i]);
                ++$i ;
            }
            array_push($result, $temp);
        }
    echo json_encode($result); 
}
?>