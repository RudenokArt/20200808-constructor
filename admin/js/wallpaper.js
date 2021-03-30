
// ===== GLOBALS =====
SQL='SELECT * FROM `wallpaper_wallpaper`';

// ===== ACTIONS =====
subCategorySelectGetData();
getGaleryData(SQL);


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
$('.edit_popup-button_hide').click(function () {
  $('.edit-popup_wrapper').fadeOut();
});
$('select[name="editPopupCategory"]').change(editPopupSubCategoryGetData);
$('.edit-popup_save-button').click(saveEditPopUpData);
$('.edit-popup_delete-button').click(itemGaleryDelete);

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
      } 
    };
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
    getGaleryData(SQL);
  } );
}
function getGaleryData (sql) {
  $.post('../wallpaper/php/select.php',{data:sql},useGaleryData);
}
function useGaleryData (data) {
  arr=JSON.parse(data);
  galeryItemClone(arr);
}
function galeryItemClone (arr) {
  $('.wallpaper-galery_item:gt(0)').remove();
  for (var i = 0; i < arr.length-1; i++) {
    var node=document.getElementsByClassName('wallpaper-galery_item')[0];
    var cloneNode=node.cloneNode(true);
    var galery=document.getElementsByClassName('wallpaper-admin_galery')[0];
    galery.appendChild(cloneNode);
  }
  fillGaleryData(arr);
}
function fillGaleryData (arr) {
  var itemArr=$('.wallpaper-galery_item');
  var infoArr=$('.wallpaper-gallery_info');
  var imageArr=$('.wallpaper-galery_image');
  var interiorArr=$('.wallpaper-galery_interior');
  for (var i = 0; i < arr.length; i++) {
    $(infoArr[i]).html(
      'Наименование: '+arr[i].wallpaper+
      '<br>Категория: '+arr[i].category+
      '<br>Подкатегория: '+arr[i].subcategory+
      '<br>Интерьер: '+arr[i].interior+
      '<br>Артикул: '+arr[i].article+
      ' Скидка: '+arr[i].discount
      );
    imageArr[i].style.backgroundImage = 
    'url(../wallpaper/img/wallpaper/'+arr[i].article+')';
    interiorArr[i].style.backgroundImage = 
    'url(../wallpaper/img/interior/'+arr[i].interior+')';
    $(itemArr[i]).prop('id',arr[i].id);
    $(itemArr[i]).click(editPopUpGetData);
  }
}
function editPopUpGetData () {
  sql='SELECT * FROM `wallpaper_wallpaper` WHERE `id`='+this.id;
  $.post('../wallpaper/php/select.php',{data:sql}, editPopUpSetData);
  $('.edit-popup_wrapper').fadeIn();
}
function editPopUpSetData (data) {
  data = JSON.parse(data)[0];
  var id=$('input[name="editPopupId"]').prop('value',data.id);
  var article=$('input[name="editPopupArticle"]').prop('value',data.article);
  var number=$('input[name="editPopupNumber"]').prop('value',data.number);
  var wallpaper=$('input[name="editPopupWallpaper"]').prop('value',data.wallpaper);
  var discount=$('input[name="editPopupDiscount"').prop('value',data.discount);
  var category=$('select[name="editPopupCategory"').prop('value',data.category);
  editPopupSubCategoryGetData(data.category);
}
function editPopupSubCategoryGetData () {
  category=$('select[name="editPopupCategory"').prop('value');
  sql='SELECT * FROM `wallpaper_subcategory` WHERE `category`="'+category+'"';
  $.post('../wallpaper/php/select.php',{data:sql},editPopupSubCategorySetData);
}
function editPopupSubCategorySetData (data) {
  var arr=JSON.parse(data);
  var option='';
  for (var i = 0; i < arr.length; i++) {
    option=option+
    '<option>'+arr[i].subcategory+'</option>';
  }
  $('select[name="editPopupSubCategory"]').html(option);
}
function saveEditPopUpData () {
 var arr=$('.edit-popup input, .edit-popup select');
 var ask=confirm('Данные будут изменены');
 if(ask){
  sql='UPDATE `wallpaper_wallpaper`'+
  'SET `article`="'+arr[1].value.trim()+'",`wallpaper`="'+arr[2].value.trim()+'",'+
  '`category`="'+arr[3].value.trim()+'",`subcategory`="'+arr[4].value.trim()+'",'+
  '`interior`="'+arr[5].value.trim()+'",`discount`='+arr[6].value.trim()+','+
  '`number`='+arr[7].value.trim()+' WHERE `id`='+arr[0].value.trim();
  $.post('php/update.php',{data:sql}, (data)=>{console.log(data);});
  $('.edit-popup_wrapper').fadeOut();
  getGaleryData(SQL);}
}
function itemGaleryDelete () {
  var ask=confirm('Элемент будет удален!');
  var itemId=$('input[name="editPopupId"]');
  var fileName=$('input[name="editPopupArticle"]');
  var wallpaper={
    file:fileName[0].value.trim(),
    id:itemId[0].value.trim(),
    path:'../../wallpaper/img/wallpaper/',
    table:'wallpaper_wallpaper'
  };
  var json=JSON.stringify(wallpaper);
  if(ask){
    $.post('php/delete_item.php',{data:json}, function(data) {
      $('.edit-popup_wrapper').fadeOut();
      getGaleryData(SQL);
    });
  }
}