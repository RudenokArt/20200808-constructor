<?php 


$data=json_decode($_REQUEST['data']);
print_r($data);
$company=json_decode(file_get_contents('../../modular/theme/database.txt'));
//print_r($company);

$page=imagecreatetruecolor(pageSize()[0], pageSize()[1]);
$white=imagecolorallocate($page, 250, 250, 250);
$red=imagecolorallocate($page, 250, 0, 0);
imagefill($page, 0, 0, $white);
imagecopyresampled($page, wallpaperImage(), 10, 10, 0, 0,
  imageSize()[0], imageSize()[1],imageSize()[2], imageSize()[3] );
textWrite();
imageMask();
imageJPEG($page, '../user_download/design.jpg');


function imageFile(){
  global $data;
  return '../img/wallpaper/'.$data->image;
}
function wallpaperImage(){
  global $data;
  global $white;
  $ext=explode('.', $data->image);
  if ($ext=='webp') {
    $image=imagecreatefromwbmp(imageFile());
  }elseif ($ext=='png') {
    $image=imagecreatefrompng(imageFile());
  }else{
    $image=imagecreatefromjpeg(imageFile());
  }
  if ($data->rotate==90 or $data->rotate==270){
    $image = imagerotate($image, $data->rotate+180,$white);
  }
  if ($data->miror=='h'){
    Imageflip($image, IMG_FLIP_HORIZONTAL);
  }
  if ($data->miror=='v'){
    Imageflip($image, IMG_FLIP_VERTICAL);
  }
  if ($data->miror=='b'){
    Imageflip($image, IMG_FLIP_BOTH);
  }
  return $image;
}
function relation(){
  global $data;
  return 570/$data->size[0];
}
function imageSize(){
  global $data;
  $size=getimagesize(imageFile());
  $height=380;
  $width=380/$size[1]*$size[0];
  if ($data->rotate==90 or $data->rotate==270) {
    return [$height,$width,$size[1],$size[0]];
  }
  return [$width,$height,$size[0],$size[1]];
}
function pageSize(){
  global $data;
  if ($data->rotate==90 or $data->rotate==270) {
    return [800,590];
  }
  return [590,800];
}
function imageMask(){
  global $data,$page,$white,$red;
  $left=($data->position[4]-$data->position[2])*relation();
  $top=($data->position[5]-$data->position[3])*relation();
  $right=$left+($data->size[4]*relation());
  $bottom=$top+($data->size[5]*relation());
  if ($data->container) {
    $bottom=$top+380;
  }
  imagerectangle($page, $left+10, $top+10, $right+10, $bottom+10, $white);
  for ($i=1; $i < 100; $i++) { 
    imagerectangle($page, $left+10-$i, $top+10-$i, $right+10+$i, $bottom+10+$i, $white);
  }
  
  rollSizeBorder($left,$top,$right,$bottom);
}
function rollSizeBorder($left,$top,$right,$bottom){
  global $data,$page,$white,$red;
  if(isset($data->rollSize)){
    $roll=$data->rollSize*relation();
    $quantity=($right-$left)/$roll;
    $x1=$left+10;
    $y1=$top+10;
    $x2=$left+10;
    $y2=$bottom+10;
    for ($i=1; $i < $quantity; $i++) { 
      $x1=$x1+$roll;
      $x2=$x2+$roll;
      imagedashedline($page, $x1, $y1, $x2, $y2, $white);
      imagedashedline($page, $x1+1, $y1, $x2+1, $y2, $red);
    }
  }
  
}
function textWrite(){
  global $company, $data,$page;
  $text=imagecreate(300, 300);
  $white=imagecolorallocate($text,250,250,250);
  $black=imagecolorallocate($text,0,0,0);
  $path='D:\OpenServer\domains\localhost\20200808-constructor\modular/fonts/arial-narrow.ttf';
  $path2='D:\OpenServer\domains\localhost\20200808-constructor\modular/fonts/times-bold.ttf';
 $path='/home/c/cx57370/wordpress/public_html/constructor/modular/fonts/arial-narrow.ttf';
 $path2='/home/c/cx57370/wordpress/public_html/constructor/modular/fonts/times-bold.ttf';
  imageFtText($text, 12, 0, 0,15, $black, $path,$company->siteName);
  imageFtText($text, 10, 0, 0,30, $black, $path,$company->region);
  imageFtText($text, 10, 0, 0,45, $black, $path,$company->city);
  imageFtText($text, 10, 0, 0,60, $black, $path,$company->adress);
  imageFtText($text, 10, 0, 0,75, $black, $path,$company->phone1);
  imageFtText($text, 10, 0, 0,90, $black, $path,$company->phone2);
  imageFtText($text, 10, 0, 0,105, $black, $path,$company->email);
  imageFtText($text, 10, 0, 0,120, $black, $path,$company->region);
  imageFtText($text, 10, 0, 0,135, $black, $path,$company->region);

  imageFtText($text, 10, 0, 0,150, $black, $path,
    'Картина: '.$data->imageName);
  imageFtText($text, 10, 0, 0,165, $black, $path,
    'Ширина рулона: '.$data->rollAbsSize);
  imageFtText($text, 10, 0, 0,180, $black, $path,
    'Фактура: '.$data->texture);
  imageFtText($text, 10, 0, 0,195, $black, $path,
    'Стоимость: '.$data->amount);
  imageFtText($text, 10, 0, 0,210, $black, $path,
    'Стоимость со скидкой: '.$data->amountDiscount);

  if ($data->rotate==90 or $data->rotate==270) {
    imagecopyresized($page,$text , 450, 150, 0, 0, 300, 300, 300, 300);
  }else{
    imagecopyresized($page,$text, 150, 450, 0, 0, 300, 300, 300, 300);
  }
}

?>