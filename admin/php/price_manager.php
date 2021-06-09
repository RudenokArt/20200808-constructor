<?php 

require_once '../../modular/connectdb.php';

if (isset($_POST['price_add'])) {
  addPrice();
}

function addPrice(){
  global $mysqli;
  if (checkPrice()) {
    $sql='INSERT INTO `wallpaper_price`(`texture_id`, `size_id`, `price`) 
    VALUES ("'.$_POST['price_texture'].'","'.$_POST['price_size'].'",
    "'.$_POST['price_value'].'")';
    $mysqli->query($sql);
    echo 'Цена добавлена в базу!';
  } elseif ($_POST['price_value']=='') {
    echo 'Не указана цена!';
  }  else{
    echo 'Для данной фактуры с указанным размером цена уже установлена!';
  }
  echo '<meta http-equiv="refresh" content="2; url=../wallpaper.php#tabs-7" />';
}

function checkPrice(){
 $flag=true;
 global $mysqli;
 $str='SELECT * FROM `wallpaper_price` ';
 $sql=$mysqli->query($str);
 $arr=[];
 while ($row=mysqli_fetch_assoc($sql)) {
  if (  $row['texture_id']==trim($_POST['price_texture']) and
    $row['size_id']==trim($_POST['price_size'])) 
  {    
    $flag=false;    }
  } 
  return $flag;
}








?>