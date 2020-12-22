<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['category'])){$category=$_POST['category'];}
if (isset($_POST['field'])){$field=$_POST['field'];}

$i=0;
$sql = $mysqli->query('SELECT * FROM `constructor_galеry` WHERE `'.$field.'`= "'.$category.'"');
while ($result = mysqli_fetch_array($sql))
{
	$i=$i+1;
}
echo $i;

?>