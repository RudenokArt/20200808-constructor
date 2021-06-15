<?php 

user_upload_image(); // загрузить фото пользователя

function user_upload_image(){
 if (isset($_FILES['user_upload_image']['tmp_name'])) { 
  $ext=explode('.',$_FILES['user_upload_image']['name']);
  move_uploaded_file(
    $_FILES['user_upload_image']['tmp_name'], 
    '../img/wallpaper/user_upload_image.'.$ext[1]);}
    echo 'user_upload_image.'.$ext[1]; 
}




?>