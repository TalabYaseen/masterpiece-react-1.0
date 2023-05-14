<?php
    class offer{

        // conn
        private $conn;

        // table
        private $dbTable = " offers";

        // col
        public $offer_user_id;
        public $offer_bid_id;
        public $offer_item_id;
        public $offer_item_unit_price;
        public $offer_item_description;
        public $offer_item_unit;
        public $offer_item_quantity;
        public $offer_item_price_total;

        
              // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET Users
        public function checkoffer(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable .
            " WHERE offer_user_id = :offer_user_id AND 
            offer_bid_id = :offer_bid_id";
            $stmt = $this->conn->prepare($sqlQuery);
            $this->offer_user_id=htmlspecialchars(strip_tags($this->offer_user_id));
            $this->offer_bid_id=htmlspecialchars(strip_tags($this->offer_bid_id));
            $stmt->bindParam(":offer_user_id", $this->offer_user_id);
            $stmt->bindParam(":offer_bid_id", $this->offer_bid_id);
            $stmt->execute();
            $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $dataRow ;
        }

        // CREATE offer
        public function createOffer(){
            $sqlQuery = "INSERT INTO ". $this->dbTable ."
                    SET
                    offer_user_id = :offer_user_id,  
                    offer_bid_id = :offer_bid_id,  
                    offer_item_id = :offer_item_id, 
                    offer_item_unit_price = :offer_item_unit_price,
                    offer_item_description = :offer_item_description,
                    offer_item_unit = :offer_item_unit,
                    offer_item_quantity = :offer_item_quantity,
                    offer_item_price_total = :offer_item_price_total
                    ";
        
            $stmt = $this->conn->prepare($sqlQuery);
            // sanitize
            $this->offer_user_id=htmlspecialchars(strip_tags($this->offer_user_id));
            $this->offer_bid_id=htmlspecialchars(strip_tags($this->offer_bid_id));
            $this->offer_item_id=htmlspecialchars(strip_tags($this->offer_item_id));
            $this->offer_item_unit_price=htmlspecialchars(strip_tags($this->offer_item_unit_price));
            $this->offer_item_price_total=htmlspecialchars(strip_tags($this->offer_item_price_total));
            $this->offer_item_quantity=htmlspecialchars(strip_tags($this->offer_item_quantity));
            $this->offer_item_unit=htmlspecialchars(strip_tags($this->offer_item_unit));
            $this->offer_item_description=htmlspecialchars(strip_tags($this->offer_item_description));
                   
            // bind data
            $stmt->bindParam(":offer_user_id", $this->offer_user_id);
            $stmt->bindParam(":offer_bid_id", $this->offer_bid_id);
            $stmt->bindParam(":offer_item_id", $this->offer_item_id);
            $stmt->bindParam(":offer_item_unit_price", $this->offer_item_unit_price);
            $stmt->bindParam(":offer_item_description", $this->offer_item_description);
            $stmt->bindParam(":offer_item_unit", $this->offer_item_unit);
            $stmt->bindParam(":offer_item_price_total", $this->offer_item_price_total);
            $stmt->bindParam(":offer_item_quantity", $this->offer_item_quantity);
           
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        public function getoffers(){
            $sqlQuery = "SELECT *  FROM "  . $this->dbTable . " INNER JOIN users
            ON offers.offer_user_id = users.user_id  WHERE offer_bid_id = :offer_bid_id  ORDER BY offer_user_id DESC";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(":offer_bid_id", $this->offer_bid_id);
            if($stmt->execute()){
                $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
                return $dataRow;
             }
             return false;
         }
        public function alloffers(){
            $sqlQuery = "SELECT *  FROM "  . $this->dbTable . " INNER JOIN users
            ON offers.offer_user_id = users.user_id  ORDER BY offer_user_id DESC";
            $stmt = $this->conn->prepare($sqlQuery);
            if($stmt->execute()){
                $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
                return $dataRow;
             }
             return false;
         }
        public function delete(){
            $sqlQuery = "DELETE FROM `offers` WHERE  offer_bid_id  = :id";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(":id", $this->offer_bid_id );
            if($stmt->execute()){
                return true;
             }
             return false;
         }
         

       // GET User
    //    public function latestbids(){
    //     $sqlQuery = "SELECT
    //                 *
    //               FROM  ". $this->dbTable ."
    //             INNER JOIN users
    //             ON bids.userid_bidid = users.user_id 
    //             ORDER BY created_at DESC LIMIT 6;";

    //     $stmt = $this->conn->prepare($sqlQuery);
    //     $stmt->execute();
    //     $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //     return $dataRow ;
    // }      
    //    public function findbid($id){
    //     $sqlQuery = "SELECT
    //                 *
    //               FROM  ". $this->dbTable ."
    //             INNER JOIN users
    //             Where bid_id = $id;";

    //     $stmt = $this->conn->prepare($sqlQuery);
    //     $stmt->execute();
    //     $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
    //     return $dataRow ;
    // }      
    //    public function numofbidsbyuser($id){
    //     $sqlQuery = "SELECT
    //                 *
    //               FROM  ". $this->dbTable ."
    //             Where userid_bidid = $id;";

    //     $stmt = $this->conn->prepare($sqlQuery);
    //     $stmt->execute();
    //     $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //     return count($dataRow) ;
    // }      
        

//         // UPDATE User
//         public function updateUser(){
//             $sqlQuery = "UPDATE
//                         ". $this->dbTable ."
//                     SET
//                     first_name = :first_name, 
//                     last_name = :last_name, 
//                     email = :email
//                     WHERE 
//                         id = :id";
        
//             $stmt = $this->conn->prepare($sqlQuery);
        
//             $this->first_name=htmlspecialchars(strip_tags($this->first_name));
//             $this->last_name=htmlspecialchars(strip_tags($this->last_name));
//             $this->email=htmlspecialchars(strip_tags($this->email));
//             $this->id=htmlspecialchars(strip_tags($this->id));
        
//             // bind data
//             $stmt->bindParam(":first_name", $this->first_name);
//             $stmt->bindParam(":last_name", $this->last_name);
//             $stmt->bindParam(":email", $this->email);
//             $stmt->bindParam(":id", $this->id);
        
//             if($stmt->execute()){
//                return true;
//             }
//             return false;
//         }

//         // DELETE User
//         function deleteUser(){
//             $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
//             $stmt = $this->conn->prepare($sqlQuery);
        
//             $this->id=htmlspecialchars(strip_tags($this->id));
        
//             $stmt->bindParam(1, $this->id);
        
//             if($stmt->execute()){
//                 return true;
//             }
//             return false;
//         }

    }
 ?>