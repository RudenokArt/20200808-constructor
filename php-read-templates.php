<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
$arr=[];
$i=0;
$sql = $mysqli->query('SELECT * FROM `constractor_templates` ORDER BY `price`');
while ($result = mysqli_fetch_array($sql))
{
	$arr[$i]=[];
	$arr[$i]['id']=$result['id'];
	$arr[$i]['template']=$result['template'];
	$arr[$i]['size']=$result['size'];
	$arr[$i]['price']=$result['price'];
	$i++;
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
//print_r($arr);

?>