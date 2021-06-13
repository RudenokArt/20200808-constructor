<?php 

require_once '../../modular/connectdb.php';

if (isset($_POST['add_size'])) {
  addSize();
}
if (isset($_POST['roll_size_save'])){
  editSize();
}
if (isset($_POST['roll_size_delete'])) {
  deleteSize();
}

function rollCheck(){
  $flag=true;
  global $mysqli;
  $str='SELECT * FROM `wallpaper_roll` ';
  $sql=$mysqli->query($str);
  $arr=[];
  while ($row=mysqli_fetch_assoc($sql)) {
    if ($row['roll']==trim($_POST['roll_size'])) {
      $flag=false;
    }
  } 
  return $flag;
}

function addSize(){
  global $mysqli;
  if ($_POST['roll_size']>0) {
    if (rollCheck()) {
      $sql='INSERT INTO `wallpaper_roll`(`roll`) 
      VALUES ("'.trim($_POST['roll_size']).'")';
      $mysqli->query($sql);
      echo 'Размер добавлен в базу!';
    } else{
      echo 'Такой размер уже присутствует в базе';
    }
  } else {
    echo 'Укажите корректный размер в см!';
  }
  echo '<meta http-equiv="refresh" content="2; url=../wallpaper.php#tabs-6" />';
}

function editSize(){
 global $mysqli;
 if ($_POST['roll_size_edit']=='') {
   echo 'Не указан размер!';
   echo '<meta http-equiv="refresh" content="2; url=../wallpaper.php#tabs-6" />';
 } else {
   $sql='UPDATE `wallpaper_roll` SET `roll`="'.$_POST['roll_size_edit'].'" 
   WHERE `id`='.$_POST['roll_size_save'];
   $mysqli->query($sql);
   echo 'Размер изменен!';
   echo '<meta http-equiv="refresh" content="2; url=../wallpaper.php#tabs-6" />';
 }
}

function deleteSize (){
 global $mysqli;
 $sql='DELETE FROM `wallpaper_roll` WHERE `id`='.$_POST['roll_size_delete'];
 $mysqli->query($sql);
 echo 'Размер удален!';
 echo '<meta http-equiv="refresh" content="2; url=../wallpaper.php#tabs-6" />';
}

?>