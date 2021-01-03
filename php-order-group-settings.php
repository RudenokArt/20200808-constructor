<?php header('Content-type: text/html; charset=utf-8');

$data=$_POST['data'];
file_put_contents('order-group-settings.txt', $data);


?>