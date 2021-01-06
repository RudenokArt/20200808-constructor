<?php //header('Content-type: text/html; charset=utf-8');
//header('Content-type: image/jpeg'); // вывод картинки 

$path='/home/c/cx57370/wordpress/public_html/modul/fonts/arial-narrow.ttf';
$path2='/home/c/cx57370/wordpress/public_html/modul/fonts/times-bold.ttf';
// $path='D:\OpenServer\domains\localhost\20200808-constructor\fonts/arial-narrow.ttf';
// $path2='D:\OpenServer\domains\localhost\20200808-constructor\fonts/times-bold.ttf';
$str=file_get_contents('order-group-settings.txt');
$settings=json_decode($str);
$amount=0;

//=============== ФУНКЦИЯ ОТРИСОВКИ ЭЛЕМЕНТА====================
function favoriteItem($n){
	global $settings,$path,$path2,$amount;
$imageBg = imagecreatetruecolor(500,200);//фон элемента
$white = imagecolorallocate($imageBg, 255, 255, 255); // белый цвет
$black=imagecolorallocate($imageBg, 0, 0, 0);
imagefill($imageBg, 0, 0, $white); // заливка фона
$imageName=explode('.',$settings[1][$n]->image);// АРТИКУЛ
//================Определение формата рисунка ================
if ($imageName[1]=='jpg') 
  {$imageImg = imageCreateFromJpeg('galery/'.$settings[1][$n]->image);}
else if ($imageName[1]=='png') 
  {$imageImg = imageCreateFromPng('galery/'.$settings[1][$n]->image);}
else if ($imageName[1]=='webp') 
  {$imageImg = imageCreateFromWebp('galery/'.$settings[1][$n]->image);}
// $imageImg = imageCreateFromJpeg('galery/'.$settings[1][$n]->image);
//================Загрузка шаблона ================
$imageTem = imageCreateFromPng('templates/'.$settings[1][$n]->template);

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
$amount=$amount+$settings[1][$n]->discountAmount;
return $imageBg;
}


//===============ОТРИСОВКА ЗАКАЗА========================
$quantity=sizeof($settings[1]);
$listLong=($quantity+1)*200;
$image = imagecreatetruecolor(590,$listLong);//создание формы заказа
$white = imagecolorallocate($image, 255, 255, 255); // белый цвет
imagefill($image, 0, 0, $white); // заливка фона заказа
for ($i=0; $i < $quantity ; $i++) { // наложение элементов
	imagecopyresampled($image, favoriteItem($i),
50, $i*200, 0, 0, 500, 200,500, 200); 
}
//===============ТЕКСТ ЗАКАЗА========================
$black=imagecolorallocate($image, 0, 0, 0);
imageFtText($image, 15, 0, 100, $listLong-175, $black, $path2,
	'Всего ед.: '.$quantity);
imageFtText($image, 15, 0, 250, $listLong-175, $black, $path2,
	'Итого стоимость: '.$amount);
imageFtText($image, 15, 0, 100, $listLong-150, $black, $path,
	'ЗАКАЗЧИК: '.$settings[0]->name);
imageFtText($image, 15, 0, 100, $listLong-125, $black, $path,
	'E-mail@: '.$settings[0]->email);
imageFtText($image, 15, 0, 100, $listLong-100, $black, $path,
	'Тел.: '.$settings[0]->phone);
imageFtText($image, 15, 0, 50, $listLong-75, $black, $path,
	'ИСПОЛНИТЕЛЬ: Производственная компания "Юг-Идеал"');
imageFtText($image, 15, 0, 25, $listLong-50, $black, $path,
	'Краснодарский край г.Новороссийск ул.Мысхакское шоссе 50/10');
imageFtText($image, 15, 0, 25, $listLong-25, $black, $path,
	'+7(988) 769 69 66 +7(988) 762 22 69 время работы 09.00-18.00');
// imageJPEG($image);//вывод рисунка на экран
imagejpeg($image, "order-image.jpg"); // Сохранение рисунка
imagedestroy($image);

?>
<script>document.location.href = "php-order-preview.php";</script>