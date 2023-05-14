<?php
   header('Access-Control-Allow-Origin: *');
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: *");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './users.php';

    $database = new DB();
    $db = $database->getConnection();


    // check email
    $user = new User($db);
    $data = json_decode(file_get_contents("php://input"));
    $user->email = $data->Email;
    if (count($user->getUserByEmail()) > 0){
        echo json_encode("email used");
    }else {
    $user = new User($db);
    $data = json_decode(file_get_contents("php://input"));
    $user->first_name = $data->First_Name;
    $user->second_name = $data->Second_Name;
    $user->last_name = $data->Last_Name;
    $user->occupation = $data->Occupation;
    $user->email = $data->Email;
    $user->password = $data->password;
    $user->phone_number = $data->Phone_Number;
   
    if($user->createUser()){
        $user = new User($db);
    $data = json_decode(file_get_contents("php://input"));
    $user->email = $data->Email;
    echo json_encode($user->getUserByEmail());
    } else{
        echo json_encode("Failed to create user.");
    }
    } ;



?>