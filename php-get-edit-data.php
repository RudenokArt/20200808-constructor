<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';
if (isset($_POST['id'])){$id=$_POST['id'];}
$arr=[];
$i=0;
$sql = $mysqli->query('SELECT * FROM `constructor_galеry` WHERE `id`="'.$id.'"');
while ($result = mysqli_fetch_array($sql))
{
	$arr['id']=$result['id'];
	$arr['image']=$result['image'];
	$arr['category']=$result['category'];
	$arr['subcategory']=$result['subcategory'];
	$arr['i40x70']=$result['40x70'];
	$arr['i46x80']=$result['46x80'];
	$arr['i51x90']=$result['51x90'];
	$arr['i57x100']=$result['57x100'];
	$arr['i63x110']=$result['63x110'];
	$arr['i68x120']=$result['68x120'];
	$arr['i74x130']=$result['74x130'];
	$arr['i80x140']=$result['80x140'];
	$arr['discount']=$result['discount'];
	$i++;
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;
//echo $where;

?>