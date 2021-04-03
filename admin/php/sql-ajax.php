<?php 

require_once '../../modular/connectdb.php';
$data=$_POST['data'];
echo $data;
//exit();

$sql=$mysqli->query($data);




?>