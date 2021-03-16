<?php 

require_once '../modular/connectdb.php';
$quantity=[];
$sql=$mysqli->query('SELECT * FROM `wallpaper_wallpaper` ');
$quantity['wallpaper']=$sql->num_rows;
$sql=$mysqli->query('SELECT * FROM `wallpaper_category` ');
$quantity['category']=$sql->num_rows;


?>