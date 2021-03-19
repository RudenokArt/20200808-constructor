<?php     header('Content-type: text/html; charset=utf-8');

require_once '../../modular/connectdb.php';


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