<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
$arr=[];
$i=0;
//$sql = $mysqli->query('SELECT * FROM constructor_interiors');
$sql = $mysqli->query('SELECT * FROM wallpaper_interior');
while ($result = mysqli_fetch_array($sql))
{
	$arr[$i]=[];
	$arr[$i]['id']=$result['id'];
	$arr[$i]['interior']=$result['interior'];
	$i=$i+1;
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
?>