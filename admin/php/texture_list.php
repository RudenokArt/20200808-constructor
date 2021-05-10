<?php 

include_once '../modular/connectdb.php';

function textureListGet(){
  global $mysqli;
  $str='SELECT * FROM `wallpaper_texture` ';
  $sql=$mysqli->query($str);
  $arr=[];
  while ($row=mysqli_fetch_assoc($sql)) {
    array_push($arr, $row);
  }
  return $arr;
}




?>