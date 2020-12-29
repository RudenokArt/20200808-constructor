<?php header('Content-type: text/html; charset=utf-8');

$str=file_get_contents('order-group-settings.txt');
$settings=json_decode($str);
print_r($settings);

?>