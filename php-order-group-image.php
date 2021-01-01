<?php //header('Content-type: text/html; charset=utf-8');
header('Content-type: image/jpeg'); // вывод картинки 

$str=file_get_contents('order-group-settings.txt');
$settings=json_decode($str);


//=============== ФУНКЦИЯ ОТРИСОВКИ ЭЛЕМЕНТА====================
function favoriteItem($n){
	global $settings;
$imageBg = imagecreatetruecolor(500,200);//фон элемента
$white = imagecolorallocate($imageBg, 255, 255, 255); // белый цвет
$black=imagecolorallocate($imageBg, 0, 0, 0);
imagefill($imageBg, 0, 0, $white); // заливка фона
$imageImg = imageCreateFromJpeg('galery/'.$settings[1][$n]->image);//загрузка картины
$imageTem = imageCreateFromPng('templates/'.$settings[1][$n]->template);//загрузка шаблона
//===============РАЗМЕР ИЗОБРАЖЕНИЯ===============
$imageSize=getImageSize('galery/'.$settings[1][$n]->image);// размеры исх. картины
if ($imageSize[0]>=$imageSize[1]) {
	$width=$settings[1][$n]->width;
	$height=round($imageSize[1]/$imageSize[0]*$settings[1][$n]->width);
	$offset=($width-$height)/2;
}
else{
	$height=$settings[1][$n]->height;
	$width=round($imageSize[0]/$imageSize[0]*$settings[1][$n]->height);
	$offset=($height-$width)/2;
}
$top=$settings[1][$n]->top;
$left=$settings[1][$n]->left;
$templateSize=getImageSize('templates/'.$settings[1][$n]->template);// размеры шаблона
//===============ПОВОРОТ ИЗОБРАЖЕНИЯ================
$imageImg = imagerotate($imageImg, -$settings[1][$n]->rotate, $white);
//===============ЗЕРКАЛЬНОЕ ОТОБРАЖЕНИЕ=================
if ($settings[1][$n]->miror=='-1,1') { // зеркало по горизонтали
	Imageflip($imageImg, IMG_FLIP_HORIZONTAL);
}
if ($settings[1][$n]->miror=='1,-1') { // зеркало по вертикали
	Imageflip($imageImg, IMG_FLIP_VERTICAL);
}
//===============НАЛОЖЕНИЕ ИЗОБРАЖЕНИЙ===============
if ($settings[1][$n]->rotate==0||$settings[1][$n]->rotate==180) {
	imagecopyresampled($imageBg, $imageImg, $left,$top+$offset, 0, 0,
	$width, $height, $imageSize[0], $imageSize[1]); // наложение картины на фон
}else{
	imagecopyresampled($imageBg, $imageImg, $left+$offset,$top, 0, 0,
	$height, $width,  $imageSize[1],$imageSize[0]); 
}
imagecopyresampled($imageBg, $imageTem, 0, 0, 0, 0, 200, 200,
	$templateSize[0], $templateSize[1]); // наложение шаблона
//===============ОТРИСОВКА ТЕКСТА=====================
$imageName=explode('.',$settings[1][$n]->image);// АРТИКУЛ
$path='D:\OpenServer\domains\localhost\20200808-constructor\fonts/arial-narrow.ttf';
$path2='D:\OpenServer\domains\localhost\20200808-constructor\fonts/times-bold.ttf';
// $path='/home/c/cx57370/wordpress/public_html/modul/fonts/arial-narrow.ttf';
// $path2='/home/c/cx57370/wordpress/public_html/modul/fonts/times-bold.ttf';
imageFtText($imageBg, 15, 0, 250, 40, $black, $path,
	'АРТИКУЛ: '.$imageName[0]);
imageFtText($imageBg, 15, 0, 250, 70, $black, $path,
	'ШАБЛОН: '.$settings[1][$n]->template);
imageFtText($imageBg, 15, 0, 250, 100, $black, $path,
	'РАЗМЕР: '.$settings[1][$n]->sizeText);
imageFtText($imageBg, 15, 0, 250, 130, $black, $path,
	'МАТЕРИАЛ: '.$settings[1][$n]->materialText);
imageFtText($imageBg, 15, 0, 250, 160, $black, $path,
	'СТОИМОСТЬ: '.$settings[1][$n]->discountAmount);
//====================================================
return $imageBg;
}
//============================================================

// imageJPEG(favoriteItem(1));

$image = imagecreatetruecolor(590,840);//создание фона
$grey = imagecolorallocate($image, 200, 200, 200); // белый цвет
imagefill($image, 0, 0, $grey); // заливка фона
imagecopyresampled($image, favoriteItem(0),
50, 0, 0, 0, 500, 200,500, 200); // наложение элементов
imagecopyresampled($image, favoriteItem(1),
50, 200, 0, 0, 500, 200,500, 200); // наложение элементов

imageJPEG($image);

?>