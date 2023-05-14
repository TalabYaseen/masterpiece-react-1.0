<?php
    class User{

        // conn
        private $conn;

        // table
        private $dbTable = "users";

        // col
        public $id;
        public $first_name;
        public $second_name;
        public $last_name;
        public $email;
        public $password;
        public $occupation;
        public $phone_number;
        public $user_photo;
        
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
        public function createUser(){
            $sqlQuery = "INSERT INTO ". $this->dbTable ."
                    SET
                    first_name = :first_name,  
                    second_name = :second_name,  
                    email = :email,  
                    last_name = :last_name,  
                    password = :password, 
                    occupation = :occupation, 
                    phone_number = :phone_number";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->first_name=htmlspecialchars(strip_tags($this->first_name));
            $this->second_name=htmlspecialchars(strip_tags($this->second_name));
            $this->last_name=htmlspecialchars(strip_tags($this->last_name));
            $this->occupation=htmlspecialchars(strip_tags($this->occupation));
            $this->phone_number=htmlspecialchars(strip_tags($this->phone_number));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->password=htmlspecialchars(strip_tags($this->password));
                   
            // bind data
            $stmt->bindParam(":first_name", $this->first_name);
            $stmt->bindParam(":last_name", $this->last_name);
            $stmt->bindParam(":password", $this->password);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":second_name", $this->second_name);
            $stmt->bindParam(":occupation", $this->occupation);
            $stmt->bindParam(":phone_number", $this->phone_number);
           
            if($stmt->execute()){
               return true;
            }
            return false;
        }

       // GET User
       public function getSingleUser(){
        $sqlQuery = "SELECT
                    id, 
                    first_name, 
                    last_name, 
                    email
                  FROM  ". $this->dbTable ."
                WHERE 
                   id = :id
                LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":id", $this->id);
        $stmt->execute();
        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->first_name = $dataRow['first_name'];
        $this->last_name = $dataRow['last_name'];
        $this->email = $dataRow['email'];
      
    }      
       public function gettopcontractors(){
        $sqlQuery = "SELECT
                    user_id, 
                    first_name,
                    second_name, 
                    last_name,
                    user_photo
                  FROM  ". $this->dbTable ."
                WHERE 
                occupation = :occupation 
                ORDER BY user_id DESC
                LIMIT 3";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":occupation", $this->occupation);
        $stmt->execute();
        $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $dataRow;
      
    }      
       public function gettopproviders(){
        $sqlQuery = "SELECT
                    user_id, 
                    first_name,
                    second_name, 
                    last_name,
                    user_photo
                  FROM  ". $this->dbTable ."
                WHERE 
                occupation = :occupation 
                ORDER BY user_id DESC
                LIMIT 3";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":occupation", $this->occupation);
        $stmt->execute();
        $dataRow = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $dataRow;
      
    }      
        

        // UPDATE User
        public function updateUser(){
            $sqlQuery = "UPDATE
                        ". $this->dbTable ."
                    SET
                    first_name = :first_name, 
                    last_name = :last_name, 
                    email = :email
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->first_name=htmlspecialchars(strip_tags($this->first_name));
            $this->last_name=htmlspecialchars(strip_tags($this->last_name));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":first_name", $this->first_name);
            $stmt->bindParam(":last_name", $this->last_name);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE User
        function deleteUser(){
            $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

        // get user by email
        function getUserByEmail(){
            $sqlQuery = "SELECT
            *
          FROM  ". $this->dbTable ."
        WHERE 
           email = :email";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->email=htmlspecialchars(strip_tags($this->email));
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(":email", $this->email);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

    }

    public function findUser (){
        $sqlQuery = "SELECT
                    *
                  FROM
                    ". $this->dbTable ."
                WHERE 
                   email = :email AND
                   password = :password

                LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);
        $stmt->execute();
        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        return $dataRow;
        if ($dataRow) {
            echo (json_decode($dataRow));
        }else {
            echo "user not found";
        }
        
        // $this->first_name = $dataRow['first_name'];
        // $this->last_name = $dataRow['last_name'];
        // $this->email = $dataRow['email'];
      
    } 

    public function findUserbyid (){
        $sqlQuery = "SELECT
                    *
                  FROM
                    ". $this->dbTable ."  
                WHERE 
                user_id  = :id";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":id", $this->id );
        $stmt->execute();
        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        return $dataRow;
        
        // $this->first_name = $dataRow['first_name'];
        // $this->last_name = $dataRow['last_name'];
        // $this->email = $dataRow['email'];
      
    }
    public function updateuserinfo(){
        $sqlQuery = "UPDATE ". $this->dbTable ." SET first_name = :first_name , second_name = :second_name ,last_name = :last_name , email = :email, password = :password, occupation = :occupation, phone_number = :phone_number WHERE  user_id = :id";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":first_name", $this->first_name );
        $stmt->bindParam(":second_name", $this->second_name );
        $stmt->bindParam(":last_name", $this->last_name );
        $stmt->bindParam(":email", $this->email );
        $stmt->bindParam(":password", $this->password );
        $stmt->bindParam(":occupation", $this->occupation );
        $stmt->bindParam(":phone_number", $this->phone_number );
        $stmt->bindParam(":id", $this->id );
        // print_r($stmt);
        if($stmt->execute()) {
            return "good";
        }else {
            return "bad";
        };
      
    }
    public function uploadphoto (){
        $sqlQuery = "UPDATE ". $this->dbTable ." SET user_photo = :user_photo WHERE  user_id = :id";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":user_photo", $this->user_photo );
        $stmt->bindParam(":id", $this->id );
        // print_r($stmt);
        if($stmt->execute()) {
            return $this->user_photo;
        }else {
            return "bad";
        };
      
    }
    public function allusers (){
        $sqlQuery = "Select * from ". $this->dbTable . " ";
        $stmt = $this->conn->prepare($sqlQuery);
        // print_r($stmt);
        if($stmt->execute()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }else {
            return "bad";
        };
      
    }
    public function delete (){
        $sqlQuery = "DELETE FROM `users` WHERE  user_id  = :id";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":id", $this->id );
        $stmt->execute() ;
    }  

    public function updateuserinfoadmin(){
        $sqlQuery = "UPDATE ". $this->dbTable ." SET first_name = :first_name , second_name = :second_name ,last_name = :last_name , email = :email, occupation = :occupation, phone_number = :phone_number WHERE  user_id = :id";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":first_name", $this->first_name );
        $stmt->bindParam(":second_name", $this->second_name );
        $stmt->bindParam(":last_name", $this->last_name );
        $stmt->bindParam(":email", $this->email );
        $stmt->bindParam(":occupation", $this->occupation );
        $stmt->bindParam(":phone_number", $this->phone_number );
        $stmt->bindParam(":id", $this->id );
        // print_r($stmt);
        if($stmt->execute()) {
            return "good";
        }else {
            return "bad";
        };
      
    }
}
?>