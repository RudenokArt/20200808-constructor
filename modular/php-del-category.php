<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['id']))
	{$id=$_POST['id'];}
echo $id;
$mysqli->query('DELETE FROM `constructor_category` WHERE `id`="'.$id.'"');
unlink('icon/'.$id.'.svg');
?>