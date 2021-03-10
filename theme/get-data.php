<?php  header('Content-type: text/html; charset=utf-8');

$dataArr=[];
// Цвета темы
if (isset($_POST['themeColor'])) {
  $dataArr['themeColor']=$_POST['themeColor'];
}
if (isset($_POST['fontColor'])) {
  $dataArr['fontColor']=$_POST['fontColor'];
}
if (isset($_POST['hoverColor'])) {
  $dataArr['hoverColor']=$_POST['hoverColor'];
}
// Реквизиты шапки
if (isset($_POST['siteName'])) {
  $dataArr['siteName']=$_POST['siteName'];
}
if (isset($_POST['region'])) {
  $dataArr['region']=$_POST['region'];
}
if (isset($_POST['city'])) {
  $dataArr['city']=$_POST['city'];
}
if (isset($_POST['adress'])) {
  $dataArr['adress']=$_POST['adress'];
}
if (isset($_POST['phone1'])) {
  $dataArr['phone1']=$_POST['phone1'];
}
if (isset($_POST['phone2'])) {
  $dataArr['phone2']=$_POST['phone2'];
}
if (isset($_POST['email'])) {
  $dataArr['email']=$_POST['email'];
}
if (isset($_POST['timeTable'])) {
  $dataArr['timeTable']=$_POST['timeTable'];
}
// Доп. адреса в футере
if (isset($_POST['footerAdres0'])) {
  $dataArr['footerAdres0']=$_POST['footerAdres0'];
}
if (isset($_POST['footerAdres1'])) {
  $dataArr['footerAdres1']=$_POST['footerAdres1'];
}
if (isset($_POST['footerAdres2'])) {
  $dataArr['footerAdres2']=$_POST['footerAdres2'];
}
if (isset($_POST['footerAdres3'])) {
  $dataArr['footerAdres3']=$_POST['footerAdres3'];
}
if (isset($_POST['footerAdres4'])) {
  $dataArr['footerAdres4']=$_POST['footerAdres4'];
}
if (isset($_POST['footerAdres5'])) {
  $dataArr['footerAdres5']=$_POST['footerAdres5'];
}
// Иконки соц.сетей
if (isset($_POST['socialIcon_0'])&&isset($_POST['socialLink_0'])) {
  $dataArr['socialIcon_0']=$_POST['socialIcon_0'];
  $dataArr['socialLink_0']=$_POST['socialLink_0'];
}
if (isset($_POST['socialIcon_1'])&&isset($_POST['socialLink_1'])) {
  $dataArr['socialIcon_1']=$_POST['socialIcon_1'];
  $dataArr['socialLink_1']=$_POST['socialLink_1'];
}
if (isset($_POST['socialIcon_2'])&&isset($_POST['socialLink_2'])) {
  $dataArr['socialIcon_2']=$_POST['socialIcon_2'];
  $dataArr['socialLink_2']=$_POST['socialLink_2'];
}
if (isset($_POST['socialIcon_3'])&&isset($_POST['socialLink_3'])) {
  $dataArr['socialIcon_3']=$_POST['socialIcon_3'];
  $dataArr['socialLink_3']=$_POST['socialLink_3'];
}
if (isset($_POST['socialIcon_4'])&&isset($_POST['socialLink_4'])) {
  $dataArr['socialIcon_4']=$_POST['socialIcon_4'];
  $dataArr['socialLink_4']=$_POST['socialLink_4'];
}
if (isset($_POST['socialIcon_5'])&&isset($_POST['socialLink_5'])) {
  $dataArr['socialIcon_5']=$_POST['socialIcon_5'];
  $dataArr['socialLink_5']=$_POST['socialLink_5'];
}
if (isset($_POST['socialIcon_6'])&&isset($_POST['socialLink_6'])) {
  $dataArr['socialIcon_6']=$_POST['socialIcon_6'];
  $dataArr['socialLink_6']=$_POST['socialLink_6'];
}
// Главное меню
if (isset($_POST['menuItem_0'])&&isset($_POST['menuLink_0'])) {
  $dataArr['menuItem_0']=$_POST['menuItem_0'];
  $dataArr['menuLink_0']=$_POST['menuLink_0'];
}
if (isset($_POST['menuItem_1'])&&isset($_POST['menuLink_1'])) {
  $dataArr['menuItem_1']=$_POST['menuItem_1'];
  $dataArr['menuLink_1']=$_POST['menuLink_1'];
}
if (isset($_POST['menuItem_2'])&&isset($_POST['menuLink_2'])) {
  $dataArr['menuItem_2']=$_POST['menuItem_2'];
  $dataArr['menuLink_2']=$_POST['menuLink_2'];
}
if (isset($_POST['menuItem_3'])&&isset($_POST['menuLink_3'])) {
  $dataArr['menuItem_3']=$_POST['menuItem_3'];
  $dataArr['menuLink_3']=$_POST['menuLink_3'];
}
if (isset($_POST['menuItem_4'])&&isset($_POST['menuLink_4'])) {
  $dataArr['menuItem_4']=$_POST['menuItem_4'];
  $dataArr['menuLink_4']=$_POST['menuLink_4'];
}
if (isset($_POST['menuItem_5'])&&isset($_POST['menuLink_5'])) {
  $dataArr['menuItem_5']=$_POST['menuItem_5'];
  $dataArr['menuLink_5']=$_POST['menuLink_5'];
}
if (isset($_POST['menuItem_6'])&&isset($_POST['menuLink_6'])) {
  $dataArr['menuItem_6']=$_POST['menuItem_6'];
  $dataArr['menuLink_6']=$_POST['menuLink_6'];
}

include_once 'save-data.php';

?>