
// ===== LISTENERS =====
$('.file-uploder').change(interiorUpload);
$('body').delegate('.interiorOrder','change',setInteriorNumber);

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

