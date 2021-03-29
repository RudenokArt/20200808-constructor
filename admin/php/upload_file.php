<?php 
require_once '../../modular/connectdb.php';

if (isset($_FILES['interiorImage']['tmp_name'])) {
  print_r($_FILES['interiorImage']['name']);
  move_uploaded_file(
    $_FILES['interiorImage']['tmp_name'], 
    '../../wallpaper/img/interior/'.$_FILES['interiorImage']['name']);
    $sql = $mysqli->query('INSERT INTO `wallpaper_interior`(`interior`) 
      VALUES ("'.$_FILES['interiorImage']['name'].'")');
}
if (isset($_FILES['wallpaperImage']['tmp_name'])) {
  print_r($_FILES['wallpaperImage']['name']);
  move_uploaded_file(
    $_FILES['wallpaperImage']['tmp_name'], 
    '../../wallpaper/img/wallpaper/'.$_FILES['wallpaperImage']['name']);
}

?>