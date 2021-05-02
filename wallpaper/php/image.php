<?php 


$data=json_decode($_REQUEST['data']);
print_r($data);

$page=imagecreatetruecolor(pageSize()[0], pageSize()[1]);
$white=imagecolorallocate($page, 200, 200, 200);
imagefill($page, 0, 0, $white);
imagecopyresampled($page, wallpaperImage(), 10, 10, 0, 0,
imageSize()[0], imageSize()[1],imageSize()[2], imageSize()[3] );
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
  // global $data;
  // if ($data->rotate==90 or $data->rotate==270) {
  //   return [800,590];
  // }
  return [590,800];
}
function imageMask(){
  global $data,$page;
  $left=($data->position[4]-$data->position[2])*relation();
  $top=($data->position[5]-$data->position[3])*relation();
  $right=$left+($data->size[4]*relation());
  $bottom=$top+($data->size[5]*relation());
  if ($data->container) {
    $bottom=$top+380;
  }
  imagerectangle($page, $left+10, $top+10, $right+10, $bottom+10, $black);
}



?>