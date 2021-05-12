<?php     header('Content-type: text/html; charset=utf-8');
include_once '../../modular/connectdb.php';
print_r($_POST);
textureEdit();
?>
<br>
<br>
<?php 
echo 'Данные отправлены на сервер!';
echo '<meta http-equiv="refresh" content="1; url=../wallpaper.php#tabs-5" />' ;

?>

<?php  
function textureEdit(){
  global $mysqli;
  $sql='UPDATE `wallpaper_texture` SET `title`="'.$_POST['title'].'",
  `size`="'.$_POST['size'].'",`width`="'.$_POST['width'].'",
  `length`="'.$_POST['length'].'",`density`="'.$_POST['density'].'",
  `color_rendering`="'.$_POST['color_rendering'].'",`base`="'.$_POST['base'].'",
  `video`="'.$_POST['video'].'" WHERE id="'.$_POST['id'].'"';
  $mysqli->query($sql);
}



?>