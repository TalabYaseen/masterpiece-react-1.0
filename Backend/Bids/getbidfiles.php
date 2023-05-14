<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './file.php';

    $database = new DB();
    $db = $database->getConnection();

    $file = new file($db);
    $data = json_decode(file_get_contents("php://input"));
    $files = ($file->getfiles($data));
    function getname($n)
{
    return ($n["filename"]);
}

$file_names = array_map('getname', $files);
echo json_encode($file_names);

?>