<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['id'])){$id=$_POST['id'];}
$arr=[];
$sql = $mysqli->query('SELECT * FROM `constractor_templates` WHERE `id`="'.$id.'"');
while ($result = mysqli_fetch_array($sql))
{
	$arr['id']=$result['id'];
	$arr['template']=$result['template'];
	$arr['size']=$result['size'];
	$arr['price']=$result['price'];
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
//echo $where;

?>