<?php
//---------data base configuration-----------
class dbconfig{
  function connection(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "purchasinglanka";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection

    if($conn === false){
      die("ERROR: Could not connect. " . $conn->connect_error);
    }
      return $conn;
  }
}
?>
