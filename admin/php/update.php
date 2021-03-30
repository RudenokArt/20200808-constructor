<?php 


require_once '../../modular/connectdb.php';

$data=$_POST['data'];
echo $data;

$sql = $mysqli->query($data);




?>