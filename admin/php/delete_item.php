<?php 

require_once '../../modular/connectdb.php';

$data=$_POST['data'];
$data=json_decode($data);
unlink($data->path.$data->file);
$sql = $mysqli->query('DELETE FROM `'.$data->table.'` WHERE `id`='.$data->id);
?>