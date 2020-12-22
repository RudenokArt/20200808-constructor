<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
$arr=[];
$i=0;
$category=$_POST['category'];
$sql = $mysqli->query('SELECT * FROM `constructor_subcategory` WHERE `category`="'.$category.'"');
while($result=mysqli_fetch_array($sql))
{
	$subcategory=$result['subcategory'];
	$id=$result['id'];
	$arr[$i]=[];
	$arr[$i][0]=$id;
	$arr[$i][1]=$subcategory;
	$i++;
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
?>