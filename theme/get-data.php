<?php  header('Content-type: text/html; charset=utf-8');

$dataArr=[];
if (isset($_POST['themeColor'])) {
  $dataArr['themeColor']=$_POST['themeColor'];
}
if (isset($_POST['fontColor'])) {
  $dataArr['fontColor']=$_POST['fontColor'];
}
include_once 'save-data.php';

?>