<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
$arr=[];
$i=0;
$sql = $mysqli->query('SELECT * FROM `constructor_post` ORDER BY `id` DESC');
while ($result = mysqli_fetch_array($sql))
{
	$arr[$i]=[];
	$arr[$i]['id']=$result['id'];
	$arr[$i]['image_name']=$result['image_name'];
	$arr[$i]['post_text']=$result['post_text'];
	$i++;
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
//print_r($arr);

?>