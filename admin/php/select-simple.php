<?php   


require_once '../modular/connectdb.php';

function selectSimple($data){
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