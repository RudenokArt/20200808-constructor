var favoriteArr=[];
class favoriteItem {
	constructor(image, features){
		this.image=image;
		this.features=features;
		this.selected=false;
	}
	setFeatures(){
		//var arr=this.features.split(',');
    var arr=this.features;
		if (arr[14]==''||arr[14]==undefined){arr[14]='1';}
		this.discount=arr[0];
		this.left=Math.round((Number(arr[1]-50))/5*2);
		this.top=Math.round((Number(arr[2])-119-50)/5*2);
		this.height=Math.round(Number(arr[3])/5*2);
		this.width=Math.round(Number(arr[4])/5*2);
		this.size=arr[5];
		this.discount=arr[6];
		this.sizeText=arr[7];
		this.materialText=arr[8];
		this.amount=arr[9];
		this.discountAmount=arr[10];
		this.template=arr[11];
		this.rotate=arr[12];
		this.miror=String(arr[13])+','+String(arr[14]);
	}
}
getFavoriteData();
function getFavoriteData () {
  var obj=JSON.parse(localStorage.modular);
	var arrKey = Object.keys(obj);
	var arrVal=Object.values(obj);
	for (var i = 0; i < arrKey.length; i++) {
    if (arrKey[i]!='wallpaper') {
      var check=arrKey[i].split('.');
      if (check[1]=='jpg'||check[1]=='png'||check[1]=='webp') {
        favoriteArr.push(new favoriteItem (arrKey[i],arrVal[i]));
      }   
    }
  }
  favoriteTable();
}
function favoriteTable () {
	var table='';
	for (var i = 0; i < favoriteArr.length; i++) {
		favoriteArr[i].setFeatures();
		table=table+
		'<div class="flex-wrapper content-item">'+
		'<div class="flex-wrapper">'+favoriteImage(favoriteArr[i])+'</div>'+
		'<div class="flex-wrapper">'+
		'<div class="flex-wrapper">'+favoriteDescription(favoriteArr[i])+'</div>'+
		'<div class="buttons-item">'+
		favoriteChoise(favoriteArr[i])+
		favoriteEdit(favoriteArr[i])+
		favoriteDelete(favoriteArr[i])+
		'</div>'+
		'</div>'+
		'</div>';
	}
	$('.favorite-table').html(table);
  setTimeout(checkboxChecked, 2000);
  amountCalc();
}
function checkboxChecked () {
  var checkboxArr=$('label');
  for (var i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i].click();
  }
}

function amountCalc (argument) {
	let quantity = 0;
	let total = 0;
	for (var i = 0; i < favoriteArr.length; i++) {
		total=total+Number(favoriteArr[i].discountAmount);
		quantity=quantity+1;
	}
	$('.favorite-quantity').html('<h3>Всего ед.: '+quantity+'</h3>');
	$('.favorite-total').html('<h3>Итого стоимость: '+total+'</h3>');
}
function favoriteImage (item) {
	let image=
	'<div class="constructor-item">'+
	'<div class="image-item"'+imageStyle(item)+'></div>'+
	'<div>'+
	'<img src="mini-templates/'+item.template+'"'+
	'width="200" height="200" alt=" ">'+
	'</div>'+
	'</div>';
	return image;
}
function imageStyle (item) {
	let style=
	'style="background-image: url(miniatures/'+item.image+');'+
	'top:'+item.top+'px;'+
	'left:'+item.left+'px;'+
	'height:'+item.height+'px;'+
	'width:'+item.width+'px;'+
	'transform: scale('+item.miror+') rotate('+item.rotate+'deg);"';
	return style;
}
function favoriteDescription (item) {
	let description=
	'<div class="item-description"><span>'+
	'Артикул: '+item.image.split('.')[0]+'<br>'+
	'Шаблон: '+item.template+'<br>'+
	'Размер: '+item.sizeText+'<br>'+
	'Материал: '+item.materialText+'<br>'+
	'Стоимость: '+item.discountAmount+
	'</span></div>';
	return description;
}
function favoriteChoise (item) {
	let checkbox=
	'<div class="flex-wrapper">'+
	'<div><label for="'+item.image+'" name="'+item.image+'"></label></div>'+
	'<div><input type="checkbox" id="'+item.image+'"></div>'+
	'<div><span>В заказ</span></div>'+
	'</div>';
	return checkbox;
}
function favoriteEdit (item) {
	let button=
	'<div class="flex-wrapper">'+
	'<div>'+
	'<button name="'+item.image+'" class="edit-button" title="редактировать">'+
	iconPencillFill()+
	'</button>'+
	'</div>'+
	'<div><span>&#160 ред.</span></div>'+
	'</div>';
	return button;
}
function favoriteDelete (item) {
	let button=
	'<div class="flex-wrapper">'+
	'<div>'+
	'<button name="'+item.image+'" class="delete-button" title="удалить">'+
	iconTrashFill()+
	'</button>'+
	'</div>'+
	'<div><span>&#160 удал.</span></div>'+
	'</div>';
	return button;
}
function checkboxLabel () {
	let label = $('label[name="'+this.id+'"');
	if (this.checked) {label.html(iconCheck2());}
	else {label.html('');}
	selectedItems();
}
function selectedItems () {
	for (var i = 0; i < favoriteArr.length; i++) {
		let node=document.getElementById(favoriteArr[i].image);
		if(node.checked){favoriteArr[i].selected=true}
			else{favoriteArr[i].selected=false}
   }
}
function editItem () {
	localStorage.setItem('editItem', this.name);
	document.location.href='constructor.html';
}
function deleteItem () {
	$('.favorite-table').html('table');
  var image=this.name;
  var obj=JSON.parse(localStorage.modular);
	delete obj[image];
 var json=JSON.stringify(obj);
  localStorage.setItem('modular', json);
	favoriteArr=[];
	getFavoriteData();
}
function backPage () {
	document.location.href='index.php';
}
function checkForm () {
	let check=true;
	let arr=$('input[type="text"]');
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].value){check=false};
	}
	if(check){alert('Заполните все поля формы!');}
	else{orderFilter();}
}
function preloaderFunction () {
	$('.preloader-wrapper').show();
}
function orderFilter () {
	let selectedArr=[];
	for (var i = 0; i < favoriteArr.length; i++) {
		if(favoriteArr[i].selected){
			selectedArr.push(favoriteArr[i]);
		}
	}
	if(selectedArr.length<1){alert('Ничего не выбрано! '+
		'Заказ пустой! Выбирите хотябы один элемент');}
   else {orderSettings(selectedArr);}
}
function orderSettings (selectedArr) {
	let customerArr=$('.customer-data');
	let customer={
		name:customerArr[0].value,
		email:customerArr[1].value,
		phone:customerArr[2].value,
	}
	let arr=[customer,selectedArr];
	let str=JSON.stringify(arr);
	$.post('php-order-group-settings.php', {data:str},preview);
	$('.popup-wrapper').hide(preloaderFunction);
}
function preview () {
  document.location.href='php-order-group-image.php';
}

//console.log(favoriteArr)