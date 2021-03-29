// ===== ACTIONS =====
subCategorySelectGetData();


// ===== LISTENERS =====

$('.popup-button_show').click(function () {
  $('.popup-wrapper').fadeIn();
});
$('.popup-button_hide').click(function () {
  $('.popup-wrapper').fadeOut();
});
$('select[name="wallpaperCategory"]').change(subCategorySelectGetData);
$('.wallpaper-upload').click(wallPaperImageUpload);
$('.file-uploder').change(function () {
  $('.file-upload_info').html(this.files[0].name);
});

// ===== FUNCTIONS =====

function subCategorySelectGetData () {
  var category=
  $('select[name="wallpaperCategory"]')[0].value.trim();
  var sql='SELECT * FROM `wallpaper_subcategory`'+
  ' WHERE `category`="'+category+'"';
  $.post('../wallpaper/php/select.php',{data:sql}, subCategorySelectForm);
}
function subCategorySelectForm (data) {
  var arr=JSON.parse(data);
  var list='';
  for (var i = 0; i < arr.length; i++) {
   list=list+'<option>'+
   arr[i]['subcategory']+'</option>';
 }
 $('select[name="wallpaperSubCategory"]').html(list);
}
function wallPaperImageUpload () {
  var image=$('input[name="wallpaperImage"]')[0];
  if (image.files.length<1) {
    alert('Файл не выбран!');
  }
  else{
    var formData = new FormData();
    formData.append(image.name,image.files[0]);
    var request = new XMLHttpRequest();
    request.open('POST','php/upload_file.php');
    request.send(formData);
    request.onreadystatechange=function (){
      if (request.readyState==4 && request.status==200){
      wallpaperImageDataUpload(image);
    } };
  }
  
}
function wallpaperImageDataUpload () {
  var image={};
  image.article=$('.file-uploder')[0].files[0].name;
  image.number=$('input[name="wallpaperImageNumber"]')[0].value;
  image.wallpaper=$('input[name="wallpaperImageName"]')[0].value;
  image.discount=$('input[name="wallpaperImageDiscount"]')[0].value;
  image.interior=$('select[name="wallpaperInterior"]')[0].value;
  image.category=$('select[name="wallpaperCategory"]')[0].value;
  image.subcategory=$('select[name="wallpaperSubCategory"]')[0].value;
  var sql='INSERT INTO `wallpaper_wallpaper`'+
  '(`number`,`article`,`wallpaper`,`category`,`subcategory`,`interior`,`discount`)'+
  'VALUES ("'+
  image.number+'","'+
  image.article+'","'+
  image.wallpaper+'","'+
  image.category+'","'+
  image.subcategory+'","'+
  image.interior+'","'+
  image.discount+'")';
  if (image.wallpaper=="") {alert('Не указано наименование!');}
  $.post('php/sql-ajax.php',{data:sql},function () {
    $('.popup-wrapper').fadeOut();
  } );
}