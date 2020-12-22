<?php 
//header('Content-type: image/jpg');
//header('Content-type: text/html; charset=utf-8');

$imageName='galery/'.$name;
$imageNameArr=explode('.', $imageName);
//==========Определяем тип файла
if ($imageNameArr[1]=='jpg'){
	$image=imagecreatefromjpeg($imageName);
} 
if ($imageNameArr[1]=='png'){
	$image=imagecreatefrompng($imageName);
} 
if ($imageNameArr[1]=='webp'){
	$image=imageCreateFromWebp($imageName);
} 
//============Получаем и задаем новые размеры рисунка
$inf=getimagesize($imageName);
$width=$inf[0];
$height=$inf[1];
$newWidth=$width/3;
$newHeight=$height/3;
// $newWidth=$width;
// $newHeight=$height;
//===========Созадем новый холст и вписываем туда рисунок с новыми размерами
$newImage=imagecreatetruecolor($newWidth, $newHeight); 
imagecopyresampled($newImage, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
//imagewbmp($newImage, 'miniatures/'.$name); // сохраняем рисунок
imageJPEG($newImage, 'miniatures/'.$name); // сохраняем рисунок


?>
