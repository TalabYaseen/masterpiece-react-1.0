<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './item.php';

    $database = new DB();
    $db = $database->getConnection();

    $item = new Item($db);
    $data = json_decode(file_get_contents("php://input"));
    echo json_encode($item->getitems($data));

?>