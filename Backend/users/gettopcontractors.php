<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: *");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    
    include_once '../config.php';
    include_once './users.php';

    $database = new DB();
    $db = $database->getConnection();

    $user = new User($db);
    // print_r($data);
    // echo "good";
    $user->occupation = "Contractor";
    $stmt = $user->gettopcontractors();
    // $itemCount = $stmt->rowCount();

    if($stmt){
        echo json_encode($stmt);
        }
    else{
    }

?>