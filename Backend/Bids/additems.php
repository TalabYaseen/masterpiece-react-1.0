<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './item.php';
    include_once './bid.php';
    $database = new DB();
    $db = $database->getConnection();
    $bid = new Bid($db);
    $item = new Item($db);
    $data = json_decode(file_get_contents("php://input"));
    $bid_id =  ($bid->lastbid())["bid_id"];
    // $sqlQuery = "";
    // $stmt = $conn->prepare($sqlQuery);
    // $stmt->execute();

    foreach ($data as $iteminf) {
        $item->item_id = $iteminf->itemid;
        $item->item_bid_id = $bid_id;
        $item->item_description = $iteminf->itemdescription;
        $item->item_quantity = $iteminf->itemquantity;
        $item->item_unit = $iteminf->itemunit;
    if($item->createItem()){
        echo json_encode("item created");
    } else{
        echo json_encode("Failed to create item");
    }
      }



?>