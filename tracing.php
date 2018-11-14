<?php
//variables

$action_hitcode="";
$action_airport="";
$action_email="";
$action_EZ="";

if($_Server["Request_Method"]=="POST"){
  $action_hitcode =test_input($_POST["hitcode"]);
  $action_airport =test_input($_POST["airport"]);
  $action_email =test_input($_POST["email"]);
  $action_EZ =test_input($_POST["EZ"]);
}

function test_input($data){
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data)
  return $data
}
 ?>


<?php
echo"<h1> Details<h1>"
echo $action_hitcode;
echo"<br>"
echo $action_email;
echo"<br>"
echo $action_airport;
echo"<br>"
echo $action_EZ;

 ?>
