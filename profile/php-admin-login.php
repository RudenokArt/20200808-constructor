<?php header('Content-type: text/html; charset=utf-8');
$login=file_get_contents('admin-login.txt');
if (isset($_POST['data'])&&$_POST['data']!=''){
	$login=$_POST['data'];
	file_put_contents('admin-login.txt', $login);
}
echo $login;

?>