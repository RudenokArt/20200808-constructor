<?php  header('Content-type: text/html; charset=utf-8');

$dataArr=[];
if (isset($_POST['theme-color'])) {
  $dataArr['theme-color']=$_POST['theme-color'];
}

print_r($dataArr);

?>