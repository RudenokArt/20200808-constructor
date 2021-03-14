<?php header('Content-type: text/html; charset=utf-8');
$mail=file_get_contents('admin-mail.txt');
if (isset($_POST['mail'])&&$_POST['mail']!=''){
	$mail=$_POST['mail'];
	file_put_contents('admin-mail.txt', $mail);
}

echo $mail;

?>