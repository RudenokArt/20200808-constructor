<?php 
require_once '../../modular/connectdb.php';
print_r($_FILES);
echo array_keys($_FILES)[0];
//exit();
$mysqli->query('UPDATE `wallpaper_post` 
  SET `image`="'.$_FILES[array_keys($_FILES)[0]]['name'].'" 
  WHERE id='.array_keys($_FILES)[0]);
move_uploaded_file(
  $_FILES[array_keys($_FILES)[0]]['tmp_name'], 
  '../../wallpaper/img/post/'.$_FILES[array_keys($_FILES)[0]]['name']);

  ?>