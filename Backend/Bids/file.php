<?php

    class File{

        // conn
        private $conn;

        // table
        private $dbTable = "bidsfiles";

        // col
        public $file_bid_id;
        public $filename;

        
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
        public function createfile(){
            $sqlQuery = "INSERT INTO ". $this->dbTable ."
                    SET
                    file_bid_id = :file_bid_id,  
                    filename = :filename
                    ";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->file_bid_id=htmlspecialchars(strip_tags($this->file_bid_id));
            $this->filename=htmlspecialchars(strip_tags($this->filename));
                   
            // bind data
            $stmt->bindParam(":file_bid_id", $this->file_bid_id);
            $stmt->bindParam(":filename", $this->filename);
           
            if($stmt->execute()){
               return true;
            }
            return false;
        }

    //    GET files
       public function getfiles($id){
        $sqlQuery = "SELECT
                    *
                  FROM  ". $this->dbTable ."
                WHERE 
                file_bid_id = $id";

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