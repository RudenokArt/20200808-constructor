<?php header('Content-type: text/html; charset=utf-8');
if (isset($_POST['data'])&&$_POST['data']!=''){
	$password=$_POST['data'];
  $hash = password_hash($password, PASSWORD_BCRYPT);
	file_put_contents('admin-password.txt', $hash);
}
echo 'Пароль изменен!';


?>