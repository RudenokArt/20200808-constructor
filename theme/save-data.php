<?php     header('Content-type: text/html; charset=utf-8');


print_r($dataArr);
$dataStyle='
#backButton,#backButton:hover,.simple-button,
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
';
$favoriteStyle='
  button{
    background-color:'.$dataArr["themeColor"].';
  }
  span,h3,.preloader,button{
    color:'.$dataArr["fontColor"].';
  }
  .content-item,label,input[type="text"]{
  border-color:'.$dataArr["themeColor"].' !important;
}

';
file_put_contents('css/data-style.css', $dataStyle);
file_put_contents('css/favorite-style.css', $favoriteStyle);
$json=json_encode($dataArr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
file_put_contents('database.txt',$json);




?>