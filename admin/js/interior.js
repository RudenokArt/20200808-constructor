
// ===== LISTENERS =====
$('.file-uploder').change(interiorUpload);
$('body').delegate('.interiorOrder','change',setInteriorNumber);
$('.categorySelect').change(categorySelect);
$('.modular-button_save').click(saveCategoryData);
modularGetCategotryData();
modularGetSubCategotryData();

// ===== ACTIONST =====
getInteriorData();


// ===== FUNCTIONS =====
function interiorUpload () {
  var formData = new FormData();
  formData.append(this.name,this.files[0]);
  var request = new XMLHttpRequest();
  request.open('POST','php/upload_file.php');
  request.send(formData);
  request.onreadystatechange=function (){
    if (request.readyState==4 && request.status==200){
      getInteriorData();
    }
  };
}
function getInteriorData () {
  $.post('../wallpaper/php/select.php',
    {data:'SELECT * FROM `wallpaper_interior` ORDER BY `order_number`'}, 
    interiorTable);
}
function interiorTable (data) {
  var tableArr=JSON.parse(data);
  var tr=$('.interiorTable').children().children()[0];
  $('.interiorTable').children().children().remove();
  var trNew=$(tr).clone();
  for (var i = 0; i < tableArr.length; i++) {
    var trNewClone=$(trNew).clone();
    $('.interiorTable').children().append(trNewClone);
    var tr=$('.interiorTable').children().children().last();
    interiorTr(tableArr[i],tr);
  }
}
function interiorTr (arr,tr) {
  var td=$(tr).children();
  input=td[0].children;
  input[0].value=arr.order_number;
  input[0].name=arr.id;
  td[1].innerHTML=arr.interior;
  img=td[2].children;
  img[0].setAttribute('src','../wallpaper/img/interior/'+arr.interior);
  button=td[3].children;
  button[0].setAttribute('value',arr.id);
  button[0].setAttribute('name',arr.interior);
  button[0].addEventListener('click', interiorDelete);
}
function interiorDelete () {
  var itemId=Number(this.value);
  var fileName=this.name;
  var interior={
    file:fileName,
    id:itemId,
    path:'../../wallpaper/img/interior/',
    table:'wallpaper_interior'
  };
  var json=JSON.stringify(interior);
  if (confirm('Удалить?')) {
    $.post('php/delete_item.php',{data:json}, getInteriorData);
  }
}
function setInteriorNumber () {
  if(this.value==''){this.value=999;}
  var sql=
  'UPDATE `wallpaper_interior` SET `order_number`='+
  this.value+' WHERE `id`='+this.name;
    $.post('php/update.php',{data:sql}, getInteriorData);
}
function categorySelect () {
  var select=$(this).parent().parent().children('select');
  $(select).prop('value',this.value);
}
function saveCategoryData () {
  var ask=confirm('Данные будут изменены!');
  if (ask) {
    var categoryArr=$('.categorySelect');
    for (var i = 0; i < categoryArr.length; i++) {
      var sql=('UPDATE `constructor_category` SET `interior`="'+
        categoryArr[i].value+'" WHERE `category`="'+
        categoryArr[i].name+'"');
      $.post('php/sql-ajax.php',{data:sql},(data)=>console.log(data));
    }
    saveSubCategoryData();
  }
}
function saveSubCategoryData () {
  var subcategoryArr=$('.subCategorySelect'); 
 for (var i = 0; i < subcategoryArr.length; i++) {
   var sql=('UPDATE `constructor_subcategory` SET `interior`="'+
        subcategoryArr[i].value+'" WHERE `subcategory`="'+
        subcategoryArr[i].name+'"');
      $.post('php/sql-ajax.php',{data:sql},(data)=>console.log(data));
 }
}
function modularGetCategotryData () {
  var sql='SELECT * FROM `constructor_category`';
  $.post('../wallpaper/php/select.php',{data:sql}, setCategoryInterior);
}
function setCategoryInterior (data) {
  var dataArr=JSON.parse(data);
  var nodeArr=$('.categorySelect');
  for (var i = 0; i < dataArr.length; i++) {
    nodeArr[i].value=dataArr[i].interior;
  }
}
function modularGetSubCategotryData () {
  var sql='SELECT * FROM `constructor_subcategory`';
  $.post('../wallpaper/php/select.php',{data:sql}, setSubCategoryInterior);
}
function setSubCategoryInterior (data) {
  var dataArr=JSON.parse(data);
  var nodeArr=$('.subCategorySelect');
  for (var i = 0; i < nodeArr.length; i++) {
    for (var k = 0; k < dataArr.length; k++) {
      if (nodeArr[i].name==dataArr[k].subcategory) {
        nodeArr[i].value=dataArr[k].interior;
        console.log(dataArr[k].subcategory,nodeArr[i].name);
      }
    }
  }
}