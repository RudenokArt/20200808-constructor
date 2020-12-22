<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['category']))
	{$category=$_POST['category'];}
$mysqli->query('INSERT INTO `constructor_category`(`category`) 
	VALUES ("'.$category.'")');

?>