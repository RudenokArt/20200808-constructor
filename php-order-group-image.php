<?php //header('Content-type: text/html; charset=utf-8');

$str=file_get_contents('order-group-settings.txt');
$settings=json_decode($str);

$imageBg = imageCreate(500,200);
$white = imagecolorallocate($imageBg, 255, 255, 255); // цвет фона
$imageImg = imageCreateFromJpeg('galery/'.$settings[1][0]->image);//загружаем картинку
$imageSize=getImageSize('galery/'.$settings[1][0]->image);// размеры картинки
imagecopyresampled($imageBg, $imageImg, 0, 0, 0, 0, 200, 200, $imageSize[0], $imageSize[1]);


header('Content-type: image/jpeg'); // вывод картинки 
imageJPEG($imageBg);


?>