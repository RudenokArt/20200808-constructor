<?php     header('Content-type: text/html; charset=utf-8');
include_once '../../modular/connectdb.php';
print_r($_POST);
textureDelete();
?>

<br>
<br>
<?php echo 'Текстура удалена!' ?>
<?php echo '<meta http-equiv="refresh" content="1; url=../wallpaper.php#tabs-5" />' ?>

<?php  
function textureDelete(){
  global $mysqli;
  $sql='DELETE FROM `wallpaper_texture` WHERE `id`='.$_POST['id'];
  $mysqli->query($sql);
  unlink('../../wallpaper/img/texture/'.$_POST['texture']);
}



?>