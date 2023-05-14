<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './bid.php';

    $cond = "";
    $database = new DB();
    $db = $database->getConnection();
    $params = json_decode(file_get_contents("php://input"));
    // print_r($params)
    if($params->filter) {
        $temp = strtolower($params->filter);
        $cond =$cond . " AND subject = "."'$temp'"." ";
    }
    if($params->keyword) {
        $temp = strtolower($params->keyword);
        $cond =$cond . " AND description LIKE '%".$temp. "%' ";
    }
    if($params->sort) {
        $temp = ($params->sort);
        $cond =$cond . " ORDER BY ".$temp." DESC; ";
    }
    $bid = new Bid($db);
    echo json_encode($bid->searchbids($cond));
?>