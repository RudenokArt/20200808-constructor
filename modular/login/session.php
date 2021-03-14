<?php 
session_start();
if (isset($_POST['login'])) {$log=$_POST['login'];} 
if (isset($_POST['password'])) {$pass=$_POST['password'];}
$login=file_get_contents('../profile/admin-login.txt');
$password=file_get_contents('../profile/admin-password.txt');


if (isset($log)&&isset($pass)) {
  if(password_verify($pass, $password)&&$login==$log){
    $_SESSION['id']=session_id();
    echo 'true';
  }else{echo 'false';}
}


if(isset($_POST['data'])){
  if (isset($_SESSION['id'])) {
    if ($_SESSION['id']!=$_COOKIE['PHPSESSID']) {
      echo 'false';
    } else {echo'true';}
  }else{echo'false';}
}





// session_start();
// $_SESSION['id']=session_id();
// print_r($_SESSION);




?>
