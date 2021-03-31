
// ===== GLOBALS =====
SQL='SELECT * FROM `wallpaper_wallpaper`';
popupData={};
categoryManager={};

// ===== ACTIONS =====
сategorySelectGetData();
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
$('body').delegate('button[name="category-manager_edit"]','click',function(){
  $('input[name="category-manager_input"]').prop('disabled',true);
  $(this).parent().siblings().children('input').prop('disabled',false);
  categoryManager.category=
  $(this).parent().siblings().children('input').prop('value');
});
$('body').delegate('button[name="category-manager_save"]','click',categoryEditData);
$('.category-manager_add').click(function(){
  var category=prompt('Название категории:');
  if(category!=''&&category!=null){
    category=category.trim();
    var sql='INSERT INTO `wallpaper_category`(`category`)VALUES("'+category+'")';
    $.post('php/update.php',{data:sql}, сategorySelectGetData);
  }
});
$('body').delegate('button[name="category-manager_delete"]','click',function(){
  categoryManager.category=this.value;
  var sql='SELECT * FROM `wallpaper_subcategory` WHERE `category`="'+this.value+'"';
  $.post('../wallpaper/php/select.php',{data:sql}, function (data) {
   var arr=JSON.parse(data);
   if (arr.length>0) {
    alert('Объект содержит вложенные элементы. Удаление невозможно!');
  }else{
    var ask=confirm('Категория '+categoryManager.category+' будет удалена!');
    if (ask) {
      var sql='DELETE FROM `wallpaper_category` WHERE `category`="'+
      categoryManager.category+'"';
      $.post('php/update.php',{data:sql}, сategorySelectGetData);
    }
  }});
});

// ===== FUNCTIONS =====
function сategorySelectGetData () {
 var sql='SELECT * FROM `wallpaper_category`';
 $.post('../wallpaper/php/select.php',{data:sql}, categorySelectForm);
}
function categorySelectForm (data) {
  var arr=JSON.parse(data);
  var list='';
  for (var i = 0; i < arr.length; i++) {
   list=list+'<option>'+
   arr[i].category+'</option>';
 }
 $('select[name="wallpaperCategory"]').html(list);
 $('select[name="editPopupCategory"]').html(list);
 subCategorySelectGetData();
 categoryManagerList(arr);
}
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
   arr[i].subcategory+'</option>';
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
  $('input[name="editPopupId"]').prop('value',data.id);
  $('input[name="editPopupArticle"]').prop('value',data.article);
  $('input[name="editPopupNumber"]').prop('value',data.number);
  $('input[name="editPopupWallpaper"]').prop('value',data.wallpaper);
  $('input[name="editPopupDiscount"').prop('value',data.discount);
  $('select[name="editPopupCategory"').prop('value',data.category);
  popupData.subcategory=data.subcategory;
  editPopupSubCategoryGetData();
}
function editPopupSubCategoryGetData () {
  var category=$('select[name="editPopupCategory"').prop('value');
  var sql='SELECT * FROM `wallpaper_subcategory` WHERE `category`="'+category+'"';
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
  $('select[name="editPopupSubCategory"').prop('value',popupData.subcategory);
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
  $.post('php/update.php',{data:sql}, function () {
    getGaleryData(SQL)
  });
  $('.edit-popup_wrapper').fadeOut();
}
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
function categoryManagerList (arr) {
  $('.category-manager_item:gt(0)').remove();
  for (var i = 1; i < arr.length; i++) {
    var tr=$('.category-manager_item');
    var cloneTr=tr[0].cloneNode(true);
    var table=$('.category-manager_table');
    table[0].appendChild(cloneTr);
  }
  categoryManagerListData(arr);
}
function categoryManagerListData (arr) {
  var idArr=$('.category-manager_id');
  var categoryArr=$('input[name="category-manager_input"]'); 
  var saveArr=$('button[name="category-manager_save"]');
  var delArr=$('button[name="category-manager_delete"]');
  for (var i = 0; i < arr.length; i++) {
    $(idArr[i]).html(arr[i].id);
    $(categoryArr[i]).prop('value',arr[i].category);
    $(categoryArr[i]).prop('disabled',true);
    $(saveArr[i]).prop('value',arr[i].category);
    $(delArr[i]).prop('value',arr[i].category);
  }
}
function categoryEditData () {
  var category=$(this).parent().siblings().children('input').prop('value').trim();
  sql='UPDATE `wallpaper_category` SET `category`="'+
  category+'" WHERE `category`="'+categoryManager.category+'"';
  $.post('php/update.php',{data:sql});
  sql='UPDATE `wallpaper_subcategory` SET `category`="'+
  category+'" WHERE `category`="'+categoryManager.category+'"';
  $.post('php/update.php',{data:sql});
  sql='UPDATE `wallpaper_wallpaper` SET `category`="'+
  category+'" WHERE `category`="'+categoryManager.category+'"';
  $.post('php/update.php',{data:sql}, сategorySelectGetData);
}