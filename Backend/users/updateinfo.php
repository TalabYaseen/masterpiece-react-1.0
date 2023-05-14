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
    $data = json_decode(file_get_contents("php://input"));
    echo($data->first_name);
    $user->id = $data->user_id;
    $user->first_name = $data->first_name;
    $user->second_name = $data->second_name;
    $user->last_name = $data->last_name;
    $user->email = $data->email;
    $user->password = $data->password;
    $user->occupation = $data->occupation;
    $user->phone_number = $data->phone_number;
    // // $itemCount = $stmt->rowCount();

    // if($stmt){
    //     echo json_encode($stmt);
    //     }
    // else{
    //     echo json_encode('user not found');
    // }

?>