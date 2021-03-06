<?php  header('Content-type: text/html; charset=utf-8');

$dataArr=[];
if (isset($_POST['themeColor'])) {
  $dataArr['themeColor']=$_POST['themeColor'];
}
if (isset($_POST['fontColor'])) {
  $dataArr['fontColor']=$_POST['fontColor'];
}
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
include_once 'save-data.php';

?>