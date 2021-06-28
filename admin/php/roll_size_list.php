<?php 

require_once '../modular/connectdb.php';

function rollSizeList(){
  global $mysqli;
  $str='SELECT * FROM `wallpaper_roll` ORDER BY `roll`';
  $sql=$mysqli->query($str);
  $arr=[];
  while ($row=mysqli_fetch_assoc($sql)) {
    array_push($arr, $row);
  }
  return $arr;
}











?>