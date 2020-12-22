<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';

if (isset($_POST['str'])){$str=$_POST['str'];}
$ob=json_decode($str);
$id=$ob->id;
$size=$ob->size;
$price=$ob->price;

$mysqli->query('UPDATE `constractor_templates` SET `size`="'.$size.'", `price`="'.$price.'" WHERE id='.$id);

//$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>