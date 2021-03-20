<?php 

require_once 'connectdb.php';

$sql = $mysqli->query($_POST['data']);
$arr=[];
$i=0;
while ($result = mysqli_fetch_array($sql)){
  $arr[$i]=$result;
  $i++;
}
$json=json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;



?>