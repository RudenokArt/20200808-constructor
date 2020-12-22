<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['category']))
	{$category=$_POST['category'];}
if (isset($_POST['subcategory']))
	{$subcategory=$_POST['subcategory'];}
echo $subcategory;
$mysqli->query('INSERT INTO `constructor_subcategory`(`category`, `subcategory`) 
	VALUES ("'.$category.'","'.$subcategory.'")');
?>