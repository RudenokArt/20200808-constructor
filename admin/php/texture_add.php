<?php     header('Content-type: text/html; charset=utf-8');
include_once '../../modular/connectdb.php';
print_r($_POST);
textureImageUpload();
textureAdd();
?>

<br>
<br>
<?php echo 'Текстура загружена!' ?>
<?php echo '<meta http-equiv="refresh" content="1; url=../wallpaper.php#tabs-5" />' ?>

<?php  
function textureAdd(){
  global $mysqli;
  $sql='INSERT INTO `wallpaper_texture`
  (`texture`, `title`, `size`, `width`, `length`, 
  `density`, `color_rendering`, `base`, `video`) 
  VALUES ("'.textureImageUpload().'","'.trim($_POST['title']).'",
  "'.trim($_POST['size']).'","'.trim($_POST['width']).'",
  "'.trim($_POST['length']).'","'.trim($_POST['density']).'",
  "'.trim($_POST['color_rendering']).'","'.trim($_POST['base']).'",
  "'.trim($_POST['video']).'")';
  $mysqli->query($sql);
}



function textureImageUpload(){
 $take = $_FILES['texture']['tmp_name'];
 $name = $_FILES['texture']['name'];
 $name = mb_strtolower($name);
 move_uploaded_file($take, '../../wallpaper/img/texture/'.$name);
 return $name; 
}

?>