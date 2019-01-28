<?php
if(isset($_POST['submit']))
{
$name=$_POST['name'];
$last_name=$_POST['lname'];
$con=odbc_connect("abc","","");
$sql="INSERT INTO tableone(name,lastname) VALUES('$name','$last_name')";
if(odbc_exe($con,$sql))
{
    echo "<br>Data Added<br>Please wait ,Page is redirecting";
    header("refresh:1;url=index.php");
}
else
{
    echo "Error";
}
}
?>

<?php

$connection = odbc_connect("Dashboard","","") or die ("Unable to Connect to the DB");

$companyName = htmlspecialchars($_POST['companyName']);
$companyName = htmlspecialchars($_POST['companyName']);
$mailGroup  = htmlspecialchars($_POST['mailGroup']);
$members = htmlspecialchars($_POST['members']);
$add = htmlspecialchars($_POST['add']);
$remove = htmlspecialchars($_POST['remove']);
$sql = "
    INSERT INTO tableone (companyName,mailGroup,members,add,remove)
    VALUES ('$name', '$mailGroup','$members','$add ' ,'$remove','$last_name')
";

odbc_exec($connection, $sql);
?>
<!-- <?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $companyName = htmlspecialchars($_POST['companyName']);
  $mailGroup  = htmlspecialchars($_POST['mailGroup']);
  $members = htmlspecialchars($_POST['members']);
  $add = htmlspecialchars($_POST['add']);
  $remove = htmlspecialchars($_POST['remove']);

  echo  $companyName,
  $mailGroup,
  $members,
  $add,
  $remove;
?> -->
