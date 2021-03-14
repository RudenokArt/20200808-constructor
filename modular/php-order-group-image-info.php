<?php //header('Content-type: text/html; charset=utf-8');

$str=file_get_contents('order-group-settings.txt');
$settings=json_decode($str);
echo $settings[0]->name.'<br>'; // customer name
echo $settings[0]->email.'<br>'; // customer mail
echo $settings[0]->phone.'<br>'; // customer phone
echo '<br><br>';
for ($i=0; $i < sizeof($settings[1]) ; $i++) { 
	print_r($settings[1][$i]);
	echo '<br><br>';
}

$imageName=explode('.',$settings[1][0]->image);
echo $imageName[1];




?>