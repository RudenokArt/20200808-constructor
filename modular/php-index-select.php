<?php 

require_once 'connectdb.php';

function indexSelect($data){
  global $mysqli;
  $arr=[];
  $i=0;
  $sql=$mysqli->query($data);
  while ($result = mysqli_fetch_array($sql)){
    $arr[$i]=$result;
    $i++;
  }
  return($arr);
}



?>