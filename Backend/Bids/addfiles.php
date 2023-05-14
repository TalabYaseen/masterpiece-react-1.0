<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './file.php';
    include_once './bid.php';
    $database = new DB();
    $db = $database->getConnection();
    $bid = new Bid($db);
    $file = new File($db);
    $data = json_decode(file_get_contents("php://input"));
    $bid_id =  ($bid->lastbid())["bid_id"];
    $targetDir = "../../frontend/thecontractor/public/bidsfiles/";
    $fileName = ($_FILES["file"]["name"]);
    $targetPath = $targetDir . $fileName;
    move_uploaded_file($_FILES["file"]["tmp_name"], $targetPath);
    $file->file_bid_id = $bid_id;
    $file->filename = $fileName;
    $file->createfile();
?>