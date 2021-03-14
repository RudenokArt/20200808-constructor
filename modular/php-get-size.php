<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
$arr=[];
$i=0;
$sql = $mysqli->query('SELECT * FROM constructor_size ORDER BY `template`');
while ($result = mysqli_fetch_array($sql))
{
	$size=$result['size'];
	$id=$result['id'];
	$kof=$result['kof'];
	$template=$result['template'];
	$arr[$i]=[];
	$arr[$i][0]=$id;
	$arr[$i][1]=$size;
	$arr[$i][2]=$kof;
	$arr[$i][3]=$template;
	$i++;
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
?>