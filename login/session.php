<?php 

$log=$_POST['login'];
$pass=$_POST['password'];
$login=file_get_contents('../profile/admin-login.txt');
$password=file_get_contents('../profile/admin-password.txt');

if(password_verify($pass, $password)){echo 'true';}
else{echo 'false';}






// session_start();
// $_SESSION['id']=session_id();
// print_r($_SESSION);




?>
