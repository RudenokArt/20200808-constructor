<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';

if (isset($_POST['id'])){$id=$_POST['id'];}
if (isset($_POST['image'])){$image=$_POST['image'];}
unlink (dirname(__FILE__).'/post-image/'.$image);


$mysqli->query('DELETE FROM `constructor_post` WHERE `id`="'.$id.'"');
echo $image;
?>