<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['material'])){
		$material=$_POST['material'];
		$kofMaterial=$_POST['kofMaterial'];
	}
$mysqli->query('INSERT INTO `constructor_mat`(`material`, `kof`) 
	VALUES ("'.$material.'", "'.$kofMaterial.'")');
?>