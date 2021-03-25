<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';

if (isset($_POST['str'])){$str=$_POST['str'];}
$ob=json_decode($str);
$id=$ob->id;
$category=$ob->category;
$subcategory=$ob->subcategory;
$i40x70=$ob->i40x70;
$i46x80=$ob->i46x80;
// $i51x90=$ob->i51x90;
// $i57x100=$ob->i57x100;
// $i63x110=$ob->i63x110;
// $i68x120=$ob->i68x120;
// $i74x130=$ob->i74x130;
// $i80x140=$ob->i80x140;
$discount=$ob->discount;
$template=$ob->template;

$mysqli->query('UPDATE `constructor_galеry` SET `category`="'.$category.'",
	`subcategory`="'.$subcategory.'", `discount`="'.$discount.'",
  `40x70`="'.$i40x70.'",`46x80`="'.$i46x80.'",
	`template`="'.$template.'" WHERE id='.$id);

// $mysqli->query('UPDATE `constructor_galеry` SET `category`="'.$category.'",`subcategory`="'.$subcategory.'",
// 	`40x70`="'.$i40x70.'",`46x80`="'.$i46x80.'",`51x90`="'.$i51x90.'",`57x100`="'.$i57x100.'",
// 	`63x110`="'.$i63x110.'",	`68x120`="'.$i68x120.'",`74x130`="'.$i74x130.'",
// 	`80x140`="'.$i80x140.'",`discount`="'.$discount.'" WHERE id='.$id);

//$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
print_r($ob);
echo $ob->category;
//echo $where;

?>