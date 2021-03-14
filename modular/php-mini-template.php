<?php 
//header('Content-type: image/jpg');
//header('Content-type: text/html; charset=utf-8');

$imageName='templates/'.$name;

$image=imagecreatefrompng($imageName);
$inf=getimagesize($imageName);
// print_r($inf);
$width=$inf[0];
$height=$inf[1];
$newWidth=$width/10;
$newHeight=$height/10;

$newImage=imagecreatetruecolor($newWidth, $newHeight);
$transparent=imagecolorallocatealpha($newImage, 0, 0, 0, 127);
imagefill($newImage,0,0,$transparent);
imagesavealpha($newImage, true);
imagecopyresampled($newImage, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
//imagejpeg($newImage);
imagepng ($newImage, 'mini-templates/'.$name); 


?>