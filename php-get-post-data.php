<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['id'])){$id=$_POST['id'];}
$arr=[];
$sql = $mysqli->query('SELECT * FROM `constructor_post` WHERE `id`="'.$id.'"');
while ($result = mysqli_fetch_array($sql))
{
	$arr['id']=$result['id'];
	$arr['post_text']=$result['post_text'];
	$arr['image_name']=$result['image_name'];
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
//echo $where;

?>