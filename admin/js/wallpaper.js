
// ===== GLOBALS =====
var SQL='SELECT * FROM `wallpaper_wallpaper`';
var popupData={};
var categoryManager={};
var subcategoryManager={};
var page={
  items:2,
  number:1,
};

// ===== ACTIONS =====
сategorySelectGetData();
postDataGet();

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
  categoryManager.id=
  $(this).parent().parent().children('.category-manager_id').html().trim();
  var sql='SELECT * FROM `wallpaper_subcategory` WHERE `category`="'+this.value+'"';
  $.post('../wallpaper/php/select.php',{data:sql}, function (data) {
   var arr=JSON.parse(data);
   if (arr.length>0) {
    alert('Объект содержит вложенные элементы. Удаление невозможно!');  }else{
      var sql='SELECT * FROM `wallpaper_wallpaper` WHERE `category`="'+
      categoryManager.category+'"';
      $.post('../wallpaper/php/select.php',{data:sql},function (data) {
        var arr=JSON.parse(data);
        if (arr.length>0) {
          alert('Объект содержит вложенные элементы. Удаление невозможно!');
        }else{
          var ask=confirm('Категория '+categoryManager.category+' будет удалена!');
          if (ask) {
            var sql={};
            sql.table='wallpaper_category';
            sql.id=categoryManager.id;
            sql.path='../../wallpaper/img/icon/';
            sql.file=categoryManager.id+'.svg';
            var str=JSON.stringify(sql);
            $.post('php/delete_item.php',{data:str},сategorySelectGetData);
          }
        }
      });
    }});
});
$('select[name="subcategory-manager_select"]').change(subCategoryManagerGetData);
$('body').delegate('button[name="subcategory-manager_edit"]','click',function(){
  $('input[name="subcategory-manager_input"]').prop('disabled',true);
  $(this).parent().siblings().children('input').prop('disabled',false);
});
$('body').delegate('button[name="subcategory-manager_save"]','click',function(){
  var subcategory=$(this).parent().siblings().children('input').prop('value').trim();
  subcategoryManager.subcategory=this.value;
  sql='UPDATE `wallpaper_subcategory` SET `subcategory`="'+
  subcategory+'" WHERE `subcategory`="'+subcategoryManager.subcategory+'"';
  $.post('php/update.php',{data:sql});
  sql='UPDATE `wallpaper_wallpaper` SET `subcategory`="'+
  subcategory+'" WHERE `subcategory`="'+subcategoryManager.subcategory+'"';
  $.post('php/update.php',{data:sql},сategorySelectGetData);
});
$('body').delegate('button[name="subcategory-manager_delete"]','click',function(){
  subcategoryManager.subcategory=this.value;
  var sql=
  'SELECT * FROM `wallpaper_wallpaper` WHERE `subcategory`="'+this.value+'"';
  $.post('../wallpaper/php/select.php',{data:sql},function (data){
    var arr=JSON.parse(data);
    if (arr.length>0) {
      alert('Объект содержит вложенные элементы. Удаление невозможно!');
    }else {
      var ask=confirm('Подкатегория '+subcategoryManager.subcategory+' будет удалена!');
      if (ask) {
        var sql='DELETE FROM `wallpaper_subcategory` WHERE `subcategory`="'+
        subcategoryManager.subcategory+'"';
        $.post('php/update.php',{data:sql}, subCategoryManagerGetData);
      }
    }
  });
});
$('.subcategory-manager_add').click(function () {
  var category=$('select[name="subcategory-manager_select"]').prop('value').trim();
  var subcategory=prompt('Название подкатегории:');
  if(subcategory!=''&&subcategory!=null){
    subcategory=subcategory.trim();
    var sql=
    'INSERT INTO `wallpaper_subcategory`(`category`,`subcategory`)'+
    'VALUES("'+category+'","'+subcategory+'")';
    $.post('php/update.php',{data:sql}, subCategoryManagerGetData());
  }
});
$('select[name="admin-category_filter"]').change(categorySelectGalery);
$('select[name="admin-subcategory_filter"]').change(filterGalery);
$('button[name="search-button"]').click(function () {
 var sql='SELECT * FROM `wallpaper_wallpaper`';
 var wallpaper=$('input[name="search-input"]').prop('value').trim();
 if (wallpaper!=''){
  sql='SELECT * FROM `wallpaper_wallpaper`'+
  ' WHERE `wallpaper` LIKE "%'+wallpaper+'%"';}
  getGaleryData(sql);
});
$('button[name="search-resset"]').click(function () {
  $('input[name="search-input"]').prop('value','');
  getGaleryData(SQL);
  $('select[name="admin-category_filter"]').prop('value','all');
  $('select[name="admin-subcategory_filter"]').prop('value','all');
});
$('.number-page').click(function () {
  page.number=Number($(this).html().trim());
  getPaginationData();
});
$('.next-page').click(function () {
  page.number=page.number+1;
  if (page.number>page.quantity) {page.number=page.quantity;}
  getPaginationData();
});
$('.back-page').click(function () {
  page.number=page.number-1;
  if (page.number<1){page.number=1;}
  getPaginationData();
});
$('.first-page').click(function () {
  page.number=1;
  getPaginationData();
});
$('.last-page').click(function () {
  page.number=page.quantity;
  getPaginationData();
});
$('select[name="pagination-manager"]').change(function () {
  $.post('php/pagination.php',{quantity:this.value.trim()}, getPaginationData);
});
$('body').delegate('input[name="category-icon"]','change',function () {
  var category=
  $(this).parent().parent().siblings('.category-manager_id').html().trim();
  var formData = new FormData();
  this.name=category;
  formData.append(this.name,this.files[0]);
  var request = new XMLHttpRequest();
  request.open('POST','php/category_icon.php');
  request.send(formData);
  var node=document.createElement('input');
  node.setAttribute('type', 'file');
  node.setAttribute('name', 'category-icon');
  node.setAttribute('multiple', 'multiple');
  var parent=this.parentNode;
  parent.replaceChild(node,this);
  request.onreadystatechange=function (){
    if (request.readyState==4 && request.status==200){
      сategorySelectGetData();
    } 
  };
});
$('.post-add').click(function () {
  $('.post-popup_wrapper').fadeIn();
});
$('.post-popup_button-hide').click(function () {
  $('.post-popup_wrapper').fadeOut();
});
$('button[name="post-save_add"]').click(function () {
  var title=$('input[name="post-title_add"]').prop('value').trim();
  var text=$('textarea[name="post-text_add"]').prop('value').trim();
  if (title==''||text=='') {alert('Не заполнен заголовок или текст');}
  else {
    var sql='INSERT INTO `wallpaper_post`(`title`, `text`)'+
    'VALUES ("'+title+'","'+text+'")';
    $.post('php/sql-ajax.php',{data:sql},postDataGet);
    $('.post-popup_wrapper').fadeOut();
  }
});
$('body').delegate('button[name="post-edit"]','click',function() {
  $(this).siblings('input').prop('disabled',false);
  $(this).siblings('textarea').prop('disabled',false);
});
$('body').delegate('button[name="post-edit_cancel"]','click',function() {
  $(this).siblings('input').prop('disabled',true);
  $(this).siblings('textarea').prop('disabled',true);
  postDataGet();
});
$('body').delegate('button[name="post-edit_save"]','click',function () {
  var postId=$(this).parent().siblings('.post-item_id').html().trim();
  var title=$(this).siblings('input').prop('value').trim();
  var text=$(this).siblings('textarea').prop('value').trim();
  var sql='UPDATE `wallpaper_post`'+
  'SET `title`="'+title+'",`text`="'+text+'" WHERE `id`='+postId;
  $.post('php/sql-ajax.php',{data:sql}, postDataGet);
});
$('body').delegate('button[name="post-edit_delete"]','click',function () {
  var arr=JSON.parse(this.value);
  var item={
    file:arr[1],
    id:arr[0],
    path:'../../wallpaper/img/post/',
    table:'wallpaper_post'
  };
  var json=JSON.stringify(item);
  if(confirm('Элемент будет удален!')){
    $.post('php/delete_item.php',{data:json}, function(data) {
      console.log(data);
      postDataGet();
    });
  }
});
$('body').delegate('input[name="post-image"]','change',function() {
  var itemId=$(this).parent().parent().siblings('.post-item_id').html().trim();
  var formData = new FormData();
  formData.append(Number(itemId),this.files[0]);
  var request = new XMLHttpRequest();
  request.open('POST','php/post_image.php');
  request.send(formData);
  request.onreadystatechange=function (){
    if (request.readyState==4 && request.status==200){
      console.log(request.responseText);
      postDataGet();
    } 
  }; 
});
$('button[name="texture-popup_hide"]').click(function(){
  $('.texture-popup_wrapper').fadeOut();
});
$('button[name="texture_new"]').click(function(){
  $('.texture-popup_wrapper').fadeIn();
  $('.texture-popup_wrapper').css({'display':'flex'});
});
$('button[name="texture_add"]').click(function(){
  $('#texture_add-form')[0].submit();
});
$('button[name="texture_delete"]').click(function () {
  if (confirm('Фактура будет удалена!')) {
    $(this).siblings('form')[0].submit();
  }
});
$('button[name="texture_edit"]').click(function(){
  if (confirm('Данные будут изменены!')) {
    $(this).parent().parent().siblings('form')[0].submit();
  }
});
$('input[name="roll_size"]').mask("9?99");
$('input[name="roll_size_edit"]').mask("9?99");
$('button[name="roll_size_edit_button"]').click(function(e){
  e.preventDefault();
  $('form[name="roll_size_edit_form"]').fadeOut();
  $(this).parent().siblings().children('form').fadeIn();
});
$('button[name="roll_size_save"]').click(function (e) {
  e.preventDefault();
  if (confirm('Размер будет изменен!')) {
    this.parentNode.submit();
  }
});
$('button[name="roll_size_delete_button"]').click(function(e){
  e.preventDefault();
  if (confirm('Размер будет удален!')) {
    this.parentNode.submit();
  }
});
$('input[name="price_value"]').mask("9?99999");
$('input[name="price_edit"]').mask("9?99999");
$('button[name="price_delete_button"]').click(function(e){
  e.preventDefault();
  if (confirm('Цена будет удалена!')) {}
  $(this).parent('form')[0].submit();
});
$('button[name="price_edit_button"]').click(function(){
  $('.price_edit_form').fadeOut();
  $(this).parent('td').siblings('td').children('form').fadeIn();
});

// ===== FUNCTIONS =====

function сategorySelectGetData () {
 var sql='SELECT * FROM `wallpaper_category`';
 $.post('../wallpaper/php/select.php',{data:sql}, categorySelectForm);
 getGaleryData(SQL);
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
 $('select[name="subcategory-manager_select"]').html(list);
 categoryFilterGetData();
 subCategorySelectGetData();
 categoryManagerForm(arr);
 subCategoryManagerGetData();
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
 subCategoryManagerGetData(arr);
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
  for (var i = 1; i < arr.length; i++) {
    var node=document.getElementsByClassName('wallpaper-galery_item')[0];
    var cloneNode=node.cloneNode(true);
    var galery=document.getElementsByClassName('wallpaper-admin_galery')[0];
    galery.appendChild(cloneNode);
  }
  fillGaleryData(arr);
}
function fillGaleryData (arr) {
  var itemArr=$('.wallpaper-galery_item');
  if (arr.length<1){$(itemArr).css({'display':'none'});}
  else {$(itemArr).css({'display':'block'});}
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
  getPaginationData();
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
  $('.edit-popup_wrapper').fadeOut();}
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
function categoryManagerForm (arr) {
  $('.category-manager_item:gt(0)').remove();
  for (var i = 1; i < arr.length; i++) {
    var tr=$('.category-manager_item');
    var cloneTr=tr[0].cloneNode(true);
    var table=$('.category-manager_table');
    table[0].appendChild(cloneTr);
  }
  categoryManagerFormData(arr);
}
function categoryManagerFormData (arr) {
  var idArr=$('.category-manager_id');
  var categoryArr=$('input[name="category-manager_input"]'); 
  var saveArr=$('button[name="category-manager_save"]');
  var delArr=$('button[name="category-manager_delete"]');
  var iconArr$=$('.category-icon img');
  for (var i = 0; i < arr.length; i++) {
    $(idArr[i]).html(arr[i].id);
    $(categoryArr[i]).prop('value',arr[i].category);
    $(categoryArr[i]).prop('disabled',true);
    $(saveArr[i]).prop('value',arr[i].category);
    $(delArr[i]).prop('value',arr[i].category);
    $(iconArr$[i]).attr('src','../wallpaper/img/icon/'+arr[i].id+'.svg?'+Math.random());
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
function subCategoryManagerGetData () {
  var category=$('select[name="subcategory-manager_select"]');
  category=category[0].value;
  var sql='SELECT * FROM `wallpaper_subcategory` WHERE `category`="'+category+'"';
  $.post('../wallpaper/php/select.php',{data:sql},function (data){
    var arr=JSON.parse(data);
    subcategoryManagerForm(arr);
  });
}
function subcategoryManagerForm (arr) {
  var tr=$('.subcategory-manager_item');
  $('.subcategory-manager_item:gt(0)').remove();
  for (var i = 1; i < arr.length; i++) {
    var trClone=tr[0].cloneNode(true);
    var table=$('.subcategory-manager_table');
    table[0].appendChild(trClone);
  }
  subcategoryManagerFormData(arr);
}
function subcategoryManagerFormData(arr) {
  var idArr=$('.subcategory-manager_id');
  var subcategoryArr=$('input[name="subcategory-manager_input"]');
  var saveArr=$('button[name="subcategory-manager_save"]');
  var delArr=$('button[name="subcategory-manager_delete"]');
  for (var i = 0; i < arr.length; i++) {
    $(idArr[i]).html(arr[i].id);
    $(subcategoryArr[i]).prop('value',arr[i].subcategory);
    $(subcategoryArr[i]).prop('disabled',true);
    $(saveArr[i]).prop('value',arr[i].subcategory);
    $(delArr[i]).prop('value',arr[i].subcategory);
  }
}
function categoryFilterGetData () {
  var sql='SELECT * FROM `wallpaper_category`';
  $.post('../wallpaper/php/select.php',{data:sql},function(data){
    var arr=JSON.parse(data);
    var select= $('select[name="admin-category_filter"]');
    var option = $(select[0]).children();
    $(option).slice(1).remove();
    for (var i = 0; i < arr.length; i++) {
      var cloneOption=option[0].cloneNode(true);
      select[0].appendChild(cloneOption);
      cloneOption.innerHTML=arr[i].category;
      cloneOption.value=arr[i].category;
    }
  });
}
function categorySelectGalery() {
  subcategoryFilterGetData(this.value);
}
function subcategoryFilterGetData (category) {
  var sql='SELECT * FROM `wallpaper_subcategory`'+
  'WHERE `category`="'+category.trim()+'"';
  $.post('../wallpaper/php/select.php',{data:sql},function(data){
    var arr=JSON.parse(data);
    var select= $('select[name="admin-subcategory_filter"]');
    var option = $(select[0]).children();
    $(option).slice(1).remove();
    for (var i = 0; i < arr.length; i++) {
      var cloneOption=option[0].cloneNode(true);
      select[0].appendChild(cloneOption);
      cloneOption.innerHTML=arr[i].subcategory;
      cloneOption.value=arr[i].subcategory;
    }
    filterGalery();
  });
}
function filterGalery () {
  var sql='SELECT * FROM `wallpaper_wallpaper`';
  var category=$('select[name="admin-category_filter"]').prop('value');
  var subcategory=$('select[name="admin-subcategory_filter"]').prop('value');
  if (category!='all'){
    sql=    'SELECT * FROM `wallpaper_wallpaper`'+
    'WHERE `category`="'+category+'"';
  }
  if (subcategory!='all'){
    sql=    'SELECT * FROM `wallpaper_wallpaper`'+
    'WHERE `category`="'+category+'" AND `subcategory`="'+subcategory+'"';
  }
  getGaleryData(sql);
}
function getPaginationData () {
 $.post('php/pagination.php',{data:'data'}, pagination);
}
function pagination (data) {
  $('select[name="pagination-manager"]').prop('value',data);
  var arr=$('.wallpaper-galery_item');
  $(arr).css({'display':'none'});
  page.quantity=Math.ceil(arr.length/data);
  var lastItem=page.number*data;
  var firsItem=lastItem-data;
  for (var i = firsItem; i < lastItem; i++) {
    $(arr[i]).fadeIn();
  }
  pageNumeration();
}
function pageNumeration () {
 var arr=$('.number-page');
 $(arr).css({'display':'block'});
 for (var i = 0; i < arr.length; i++) {
  var number=page.number+i-2;
  arr[i].innerHTML=number;
  if (number<1||number>page.quantity) {arr[i].style.display='none';}
}
activePage(arr);
}
function activePage (arr) {
  $(arr).css({'color':'black'});
  for (var i = 0; i < arr.length; i++) {
    if ($(arr[i]).html().trim()==page.number) {
      arr[i].style.color='red';
    }
  }
}
function postDataGet () {
  $('.post-item_edit:gt(0)').remove();
  var sql='SELECT * FROM `wallpaper_post` ORDER BY `id` DESC';
  $.post('../wallpaper/php/select.php',{data:sql},function (data) {
    var arr=JSON.parse(data);
    for (var i = 0; i < arr.length; i++) {
      var node=$('.post-item_edit')[0];
      var copy=node.cloneNode(true);
      copy.style.display='block';
      node.parentNode.appendChild(copy);
    }
    postDataSet(arr);
  });
}
function postDataSet (arr) {
  var idArr=$('.post-item_id');
  var titleArr=$('input[name="post-title_edit"]');
  var textArr=$('textarea[name="post-text_edit"]');
  var imageArr=$('.post-image_picture img');
  var delArr=$('button[name="post-edit_delete"]');
  for (var i = 0; i < arr.length; i++) {
    $(idArr[i+1]).html(arr[i].id);
    $(titleArr[i+1]).prop('value',arr[i].title);
    $(textArr[i+1]).prop('value',arr[i].text);
    $(titleArr[i+1]).prop('disabled',true);
    $(textArr[i+1]).prop('disabled',true);
    $(imageArr[i+1]).attr('src','../wallpaper/img/post/'+arr[i].image);
    $(delArr[i+1]).prop('value',JSON.stringify([arr[i].id,arr[i].image]));
  }
}
