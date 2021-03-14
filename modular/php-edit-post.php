<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';

if (isset($_POST['str'])){$str=$_POST['str'];}
$ob=json_decode($str);
$id=$ob->id;
$post_text=$ob->post_text;

$mysqli->query('UPDATE `constructor_post` SET `post_text`="'.$post_text.'" WHERE id='.$id);

//$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
print_r($ob);
?>