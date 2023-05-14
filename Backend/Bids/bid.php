<?php
    class Bid{

        // conn
        private $conn;

        // table
        private $dbTable = "Bids";

        // col
        public $bid_id;
        public $userid_bidid;
        public $subject;
        public $phone;
        public $location;
        public $description;
        public $details;
        public $created_at;
        
              // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET Users
        public function getUsers(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE User
        public function createBid(){
            $sqlQuery = "INSERT INTO ". $this->dbTable ."
                    SET
                    userid_bidid = :userid_bidid,  
                    subject = :subject,  
                    phone = :phone, 
                    location = :location,
                    description = :description,
                    details = :details
                    ";
        
            $stmt = $this->conn->prepare($sqlQuery);
            // sanitize
            $this->userid_bidid=htmlspecialchars(strip_tags($this->userid_bidid));
            $this->subject=htmlspecialchars(strip_tags($this->subject));
            $this->phone=htmlspecialchars(strip_tags($this->phone));
            $this->location=htmlspecialchars(strip_tags($this->location));
            $this->description=htmlspecialchars(strip_tags($this->description));
            $this->details=htmlspecialchars(strip_tags($this->details));
                   
            // bind data
            $stmt->bindParam(":userid_bidid", $this->userid_bidid);
            $stmt->bindParam(":subject", $this->subject);
            $stmt->bindParam(":phone", $this->phone);
            $stmt->bindParam(":location", $this->location);
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":details", $this->details);
           
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        public function lastbid(){
            $sqlQuery = "SELECT bid_id  FROM  bids ORDER BY bid_id DESC LIMIT 1";
            $stmt = $this->conn->prepare($sqlQuery);
            if($stmt->execute()){
                $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
                return $dataRow;
             }
             return false;
         }
         

       // GET User
       public function latestbids(){
        $sqlQuery = "SELECT
                    *
                  FROM  ". $this->dbTable ."
                INNER JOIN users
                ON bids.userid_bidid = users.user_id 
                ORDER BY created_at DESC LIMIT 6;";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $dataRow ;
    }      
       public function allbids(){
        $sqlQuery = "SELECT
                    *
                  FROM  ". $this->dbTable ."
                INNER JOIN users
                ON bids.userid_bidid = users.user_id 
                ORDER BY created_at DESC";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $dataRow ;
    }      
       public function searchbids($con){
        $sqlQuery = "SELECT * FROM  ". $this->dbTable ." INNER JOIN users ON bids.userid_bidid = users.user_id WHERE 1 ";
                if ($con) {
                  $sqlQuery = $sqlQuery.$con;
                }

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $dataRow ;
    }      
       public function findbid($id){
        $sqlQuery = "SELECT
                    *
                  FROM  ". $this->dbTable ."
                INNER JOIN users
                Where bid_id = $id;";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        return $dataRow ;
    }      
       public function numofbidsbyuser($id){
        $sqlQuery = "SELECT
                    *
                  FROM  ". $this->dbTable ."
                Where userid_bidid = $id;";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return count($dataRow) ;
    }      
       public function mybids($id){
        $sqlQuery = "SELECT
                    *
                  FROM  ". $this->dbTable ."
                Where userid_bidid = $id;";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $dataRow ;
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

        // DELETE User
        function delete(){
            $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE bid_id  = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->bid_id =htmlspecialchars(strip_tags($this->bid_id));
        
            $stmt->bindParam(1, $this->bid_id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

    }
 ?>