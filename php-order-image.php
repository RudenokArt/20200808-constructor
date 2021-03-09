<?php 
//echo'<meta charset="UTF-8">';
header('Content-type: image');
$jsonData=file_get_contents('order-settings.txt'); // Параметры рисунка из js
$arr=json_decode($jsonData);
$image=imagecreatetruecolor(600, 800);
$white = imagecolorallocate($image, 255, 255, 255); // цвет фона
imagefill($image, 0, 0, $white); 
$black=imagecolorallocate($image, 0, 0, 0);
$lightBlue=imagecolorallocate($image, 60, 178, 228);

//========================Определяем формат файла изображения ================
$checkArr=explode('.',$arr[0]);
if ($checkArr[1]=='jpg') {$image1 = imageCreateFromJpeg('galery/'.$arr[0]);}
if ($checkArr[1]=='png') {$image1 = imageCreateFromPng('galery/'.$arr[0]);}
if ($checkArr[1]=='webp') {$image1 = imageCreateFromWebp('galery/'.$arr[0]);}

//=========================Компановка изображения==============================
$inf1 = getImageSize('galery/'.$arr[0]);// размеры рисунка (с полями)
$height1=$inf1[1]/$inf1[0]*$arr[5];//Высота рисунка
$top1=($arr[6]-$height1)/2;//разница между высотой блока и рисунка

//==============================Зеркало по горизонтали=======================
if ($arr[16]=='-1,1') {
	$img = imagecreatetruecolor($inf1[0], $inf1[1]);// создаем новое изображение
    for ($x = 0; $x < $inf1[0]; $x++) { // наносим попиксельно изображение в обратном порядке
        for ($y = 0; $y < $inf1[1]; $y++) {
            $color=imagecolorat($image1, $x,$y);
            imagesetpixel($img, $inf1[0]-$x, $y, $color);
        }
    }
    $image1=$img;
}
//==============================Зеркало по Вертикали=======================
if ($arr[16]=='1,-1') {
	$img = imagecreatetruecolor($inf1[0], $inf1[1]);// создаем новое изображение
	 for ($y = 0; $y < $inf1[1]; $y++) {
    for ($x = 0; $x < $inf1[0]; $x++) {
            $color=imagecolorat($image1, $x,$y);
            imagesetpixel($img, $x, $inf1[1]-$y, $color);
        }
    }
    $image1=$img;
}
//=========================Вставка рисунка в бланк заказа============================
if ($arr[15]==90) {
	$image1=imagerotate($image1, 270, $white);// Поворот рисунка на угол
	imagecopyresized($image,$image1, ($arr[3]+$top1),($arr[4]-170), 0, 0, $height1,$arr[5],$inf1[1], $inf1[0]);
}
else if ($arr[15]==270) {
	$image1=imagerotate($image1, 90, $white);// Поворот рисунка на угол
	imagecopyresized($image,$image1, ($arr[3]+$top1),($arr[4]-170), 0, 0, $height1,$arr[5],$inf1[1], $inf1[0]);
} 
else if ($arr[15]==180) {
	$image1=imagerotate($image1, 180, $white);// Поворот рисунка на угол
	imagecopyresized($image,$image1,$arr[3], ($arr[4]-170+$top1), 0, 0,$arr[5], $height1,$inf1[0],$inf1[1]);
} 
else{
	imagecopyresized($image,$image1,$arr[3], ($arr[4]-170+$top1), 0, 0,$arr[5], $height1,$inf1[0],$inf1[1]);
}
//====================================Вывод шаблона =============================
$image2=imagecreatefrompng('templates/'.$arr[1]);
$inf2 = getImageSize('templates/'.$arr[1]); // размеры шаблона
// $coefficient=500/$inf2[0]*$inf2[1];
// $margin=(500-$coefficient)/2;
imagecopyresized($image,$image2,50, 0, 0, 0,500, 500,$inf2[0],$inf2[1]);

// =============ТЕКСТОВЫЙ БЛОК
$imageOrder=imagecreatetruecolor(600, 300);
imagefill($imageOrder, 0, 0, $white); 
//=============Отрисовка текста
$path='D:\OpenServer\domains\localhost\20200808-constructor\fonts/arial-narrow.ttf';
$path2='D:\OpenServer\domains\localhost\20200808-constructor\fonts/times-bold.ttf';
$path='/home/c/cx57370/wordpress/public_html/modul/fonts/arial-narrow.ttf';
$path2='/home/c/cx57370/wordpress/public_html/modul/fonts/times-bold.ttf';

imageFtText($imageOrder, 15, 0, 20, 20, $black, $path,'ЗАКАЗ ОТ: ');
imageFtText($imageOrder, 15, 0, 150, 20, $black, $path,date('Y:m:d'));
imageFtText($imageOrder, 15, 0, 20, 40, $black, $path,'АРТИКУЛ: ');
imageFtText($imageOrder, 15, 0, 150, 40, $black, $path,mb_strtoupper(explode('.', $arr[0])[0]));
imageFtText($imageOrder, 15, 0, 20, 60, $black, $path,'ШАБЛОН: ');
imageFtText($imageOrder, 15, 0, 150, 60, $black, $path, mb_strtoupper(explode('.', $arr[1])[0]));
imageFtText($imageOrder, 15, 0, 20, 80, $black, $path,'РАЗМЕР: ');
imageFtText($imageOrder, 15, 0, 150, 80, $black, $path, $arr[9]);
imageFtText($imageOrder, 15, 0, 20, 100, $black, $path,'МАТЕРИАЛ: ');
imageFtText($imageOrder, 15, 0, 150, 100, $black, $path, mb_strtoupper($arr[10]));
imageFtText($imageOrder, 15, 0, 20, 120, $black, $path,'СТОИМОСТЬ: ');
imageFtText($imageOrder, 15, 0, 150, 120, $black, $path, $arr[11]);
if($arr[12]!=''){
	imageFtText($imageOrder, 15, 0, 20, 140, $lightBlue, $path,'ЗАКАЗЧИК: ');
	imageFtText($imageOrder, 15, 0, 150, 140, $lightBlue, $path, mb_strtoupper($arr[12]));
	imageFtText($imageOrder, 15, 0, 20, 160, $lightBlue, $path,'E-MAIL: ');
	imageFtText($imageOrder, 15, 0, 150, 160, $lightBlue, $path, mb_strtoupper($arr[13]));
	imageFtText($imageOrder, 15, 0, 20, 180, $lightBlue, $path2,'ТЕЛЕФОН: ');
	imageFtText($imageOrder, 15, 0, 150, 180, $lightBlue, $path2, $arr[14]);
}

imageFtText($imageOrder, 12, 0, 100, 205, $black, $path,
	'Производственная компания "Юг-Идеал"');
imageFtText($imageOrder, 12, 0, 50, 225, $black, $path,
	'Краснодарский край г.Новороссийск ул.Мысхакское шоссе 50/10');
imageFtText($imageOrder, 12, 0, 50, 245, $black, $path,
	'+7(988) 769 69 66 +7(988) 762 22 69 время работы 09.00-18.00');
imagecopyresized($image,$imageOrder,0,500,0,0,600,300,600,300);

//===============РАМКА ДЛЯ РЕКВИЗИТОВ
imageline($image, 15, 690, 500, 690, $lightBlue);
imageline($image, 15, 750, 500, 750, $lightBlue);
imageline($image, 15, 690, 15, 750, $lightBlue);
imageline($image, 500, 690, 500, 750, $lightBlue);

//=========== Накрываем торчащие куски рисунка
$imageOverlay=imagecreatetruecolor(100, 500);
imageFilledRectangle($image, 0, 0, 50, 500, $white);// прямоугольник с заливкой
imageFilledRectangle($image, 550, 0, 600 , 500, $white);// прямоугольник с заливкой

//==============Формирование изображения
//imagepng($image);// выводим на экран
imageJPEG($image, "order-image.jpg", 100); // Сохранение рисунка

?>
<script>document.location.href = "php-order-download.php";</script>