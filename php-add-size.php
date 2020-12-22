<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['size'])){
	$size=$_POST['size'];
	$kof=$_POST['kofSize'];
	$template=$_POST['template'];
}
$mysqli->query('INSERT INTO `constructor_size`(`size`, `kof`, `template`) 
	VALUES ("'.$size.'", "'.$kof.'", "'.$template.'")');
?>