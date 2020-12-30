<?php //header('Content-type: text/html; charset=utf-8');

$str=file_get_contents('order-group-settings.txt');
$settings=json_decode($str);

$imageBg = imagecreatetruecolor(500,200);//создание фона
$white = imagecolorallocate($imageBg, 255, 255, 255); // белый цвет
imagefill($imageBg, 0, 0, $white); // заливка фона
$imageImg = imageCreateFromJpeg('galery/'.$settings[1][0]->image);//загрузка картины
$imageTem = imageCreateFromPng('templates/'.$settings[1][0]->template);//загрузка шаблона

//===============РАЗМЕР ИЗОБРАЖЕНИЯ===============
$imageSize=getImageSize('galery/'.$settings[1][0]->image);// размеры исх. картины
if ($imageSize[0]>=$imageSize[1]) {
	$width=$settings[1][0]->width;
	$height=round($imageSize[1]/$imageSize[0]*$settings[1][0]->width);
	$offset=($width-$height)/2;
}
else{
	$height=$settings[1][0]->height;
	$width=round($imageSize[0]/$imageSize[0]*$settings[1][0]->height);
	$offset=($height-$width)/2;
}
$top=$settings[1][0]->top;
$left=$settings[1][0]->left;
$templateSize=getImageSize('templates/'.$settings[1][0]->template);// размеры шаблона

//===============ПОВОРОТ ИЗОБРАЖЕНИЯ================
$imageImg = imagerotate($imageImg, -$settings[1][0]->rotate, $white);

//===============ЗЕРКАЛЬНОЕ ОТОБРАЖЕНИЕ=================
if ($settings[1][0]->miror=='-1,1') { // зеркало по горизонтали
	Imageflip($imageImg, IMG_FLIP_HORIZONTAL);
}
if ($settings[1][0]->miror=='1,-1') { // зеркало по вертикали
	Imageflip($imageImg, IMG_FLIP_VERTICAL);
}

//===============НАЛОЖЕНИЕ ИЗОБРАЖЕНИЙ===============
if ($settings[1][0]->rotate==0||$settings[1][0]->rotate==180) {
	imagecopyresampled($imageBg, $imageImg, $left,$top+$offset, 0, 0,
	$width, $height, $imageSize[0], $imageSize[1]); // наложение картины на фон
}else{
	imagecopyresampled($imageBg, $imageImg, $left+$offset,$top, 0, 0,
	$height, $width,  $imageSize[1],$imageSize[0]); 
}

imagecopyresampled($imageBg, $imageTem, 0, 0, 0, 0, 200, 200,
	$templateSize[0], $templateSize[1]); // наложение шаблона

//====================================================
header('Content-type: image/jpeg'); // вывод картинки 
imageJPEG($imageBg);



?>