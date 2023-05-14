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
    $user->id = $_POST["id"] ;
    // print_r($data->photo);
    $targetDir = "../../frontend/thecontractor/public/profilephotos/";
    $fileName = ($_FILES["file"]["name"]);
    $targetPath = $targetDir . $fileName;
    move_uploaded_file($_FILES["file"]["tmp_name"], $targetPath);
    $user->user_photo = $fileName ;
    echo json_encode($user->uploadphoto());


?>