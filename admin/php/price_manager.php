<?php 

require_once '../../modular/connectdb.php';

if (isset($_POST['price_add'])) {
  addPrice();
}
if (isset($_POST['price_delete'])){
  priceDelete();
}
if (isset($_POST['price_save_button'])) {
  priceEdit();
}

function addPrice(){
  global $mysqli;
  if ($_POST['price_value']=='') {
    echo 'Не указана цена!';
  }elseif (checkPrice()) {
    $sql='INSERT INTO `wallpaper_price`(`texture_id`, `size_id`, `price`) 
    VALUES ("'.$_POST['price_texture'].'","'.$_POST['price_size'].'",
    "'.$_POST['price_value'].'")';
    $mysqli->query($sql);
    echo 'Цена добавлена в базу!';
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

function priceDelete(){
  global $mysqli;
  $sql='DELETE FROM `wallpaper_price` WHERE `id`="'.$_POST['price_delete'].'"';
  $mysqli->query($sql);
  echo 'Цена удалена!';
  echo '<meta http-equiv="refresh" content="2; url=../wallpaper.php#tabs-7" />';
}

function priceEdit(){
  if ($_POST['price_edit']=='') {
    echo 'Не указана цена!';
  } else {
    print_r($_POST);
    global $mysqli;
    $sql='UPDATE `wallpaper_price` 
    SET `price`="'.$_POST['price_edit'].'" WHERE `id`="'.$_POST['price_id'].'"';
    $mysqli->query($sql);
    echo 'Цена изменена!';
    echo '<meta http-equiv="refresh" content="2; url=../wallpaper.php#tabs-7" />';
  }
}







?>