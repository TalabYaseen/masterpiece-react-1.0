<?php

    class Item{

        // conn
        private $conn;

        // table
        private $dbTable = "bidsiteams";

        // col
        public $item_id;
        public $item_bid_id;
        public $item_description;
        public $item_quantity;
        public $item_unit;
        
              // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET Users
        // public function getUsers(){
        //     $sqlQuery = "SELECT * FROM " . $this->dbTable;
        //     $stmt = $this->conn->prepare($sqlQuery);
        //     $stmt->execute();
        //     return $stmt;
        // }

        // CREATE User
        public function createItem(){
            $sqlQuery = "INSERT INTO ". $this->dbTable ."
                    SET
                    item_id = :item_id,  
                    item_bid_id = :item_bid_id,  
                    item_description = :item_description, 
                    item_quantity = :item_quantity,
                    item_unit = :item_unit
                    ";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->item_id=htmlspecialchars(strip_tags($this->item_id));
            $this->item_bid_id=htmlspecialchars(strip_tags($this->item_bid_id));
            $this->item_description=htmlspecialchars(strip_tags($this->item_description));
            $this->item_quantity=htmlspecialchars(strip_tags($this->item_quantity));
            $this->item_unit=htmlspecialchars(strip_tags($this->item_unit));
                   
            // bind data
            $stmt->bindParam(":item_id", $this->item_id);
            $stmt->bindParam(":item_bid_id", $this->item_bid_id);
            $stmt->bindParam(":item_description", $this->item_description);
            $stmt->bindParam(":item_quantity", $this->item_quantity);
            $stmt->bindParam(":item_unit", $this->item_unit);
           
            if($stmt->execute()){
               return true;
            }
            return false;
        }

       // GET items
       public function getitems($id){
        $sqlQuery = "SELECT
                    *
                  FROM  ". $this->dbTable ."
                WHERE 
                item_bid_id = $id";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $dataRow;
      
    }      
        

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