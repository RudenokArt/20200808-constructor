<?php     header('Content-type: text/html; charset=utf-8');


print_r($dataArr);
$dataStyle='
#backButton,.simple-button,.header-menu_button,
.template-tape-item,.sign-blue,.radio-label_active,
.header-top,.header-menu,.footer {
  background-color:'.$dataArr["themeColor"].';
}
.header-info_icon-large,.header-info_icon{
  color:'.$dataArr["themeColor"].';
}
#range-vidget,.radio-label,.radio-label_active{
border-color:'.$dataArr["themeColor"].';
}
#range-slider{
background-color: '.$dataArr["themeColor"].';
}
.header-top a,.footer *,.header-menu a,#backButton,
.simple-button,.sign-blue{
  color:'.$dataArr["fontColor"].';
}
#backButton:hover,.header-menu a:hover,.company-name:hover,
.action-button:hover,.simple-button:hover,
.button-search:hover,.item-list:hover{
  background-color: '.$dataArr["hoverColor"].';
}';
$favoriteStyle='
button{
  background-color:'.$dataArr["themeColor"].';
}
button{
  color:'.$dataArr["fontColor"].';
}
.content-item,label,input[type="text"]{
  border-color:'.$dataArr["themeColor"].' !important;
}';
$wallpaperStyle='
.sidebar-category:hover,
.sidebar-subcategory:hover{
  background-color: '.$dataArr["hoverColor"].';
}
.wallpaper-galery_item-icon,.wallpaper-galery_image-name,
.wallpaper-navigation{
  color:'.$dataArr["themeColor"].';
}
.wallpaper-galery_item-icon:hover{
  color: '.$dataArr["hoverColor"].';
}
.category-icon{
  background-color: '.$dataArr["themeColor"].';
}';
file_put_contents('css/data-style.css', $dataStyle);
file_put_contents('css/favorite-style.css', $favoriteStyle);
file_put_contents('../../wallpaper/css/data-style.css',$wallpaperStyle);
$json=json_encode($dataArr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
file_put_contents('database.txt',$json);




?>