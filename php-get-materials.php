<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
$arr=[];
$i=0;
$sql = $mysqli->query('SELECT * FROM constructor_mat ORDER BY `material`');
while ($result = mysqli_fetch_array($sql))
{
	$material=$result['material'];
	$kof=$result['kof'];
	$id=$result['id'];
	$arr[$i]=[];
	$arr[$i][0]=$id;
	$arr[$i][1]=$material;
	$arr[$i][2]=$kof;
	$i++;
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
?>