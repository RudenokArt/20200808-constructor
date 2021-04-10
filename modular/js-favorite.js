var customer={};
var buscket={};
localStorage.setItem('modular', '');
localStorage.setItem('modular', '{}');
buscket=JSON.parse(localStorage.modular);


function addFavorite () {
	divPosition('item',item);
  var currentImage=item.image;
  buscket[currentImage]=[
  calculator.discount,
   item.positionX,
   item.positionY,
   item.height,
   item.width,
   calculator.size,
   calculator.discount,
   calculator.sizeText,
   calculator.materialText,
   calculator.amount,
   calculator.discountAmount,
   calculator.template,
   item.rotate,
   String(item.mirror),  ];
   var json=JSON.stringify(buscket);
  localStorage.setItem('modular', json);
  busketAnime();
	
	// localStorage.setItem(item.image,
	// 	[calculator.discount,
	// 	item.positionX,
	// 	item.positionY,
	// 	item.height,
	// 	item.width,
	// 	calculator.size,
	// 	calculator.discount,
	// 	calculator.sizeText,
	// 	calculator.materialText,
	// 	calculator.amount,
	// 	calculator.discountAmount,
	// 	calculator.template,
	// 	item.rotate,
	// 	String(item.mirror),
	// 	]);

}
function busketAnime () {
	$('.busket-anime').show();
	$('.busket-anime').slideUp(750);
	setTimeout(busketCounter, 750)
}
function busketCounter () {
  var obj=JSON.parse(localStorage.modular);
	var arr=Object.keys(obj);
	var counter=0;
	for (var i = 0; i < arr.length; i++) {
    var check=arr[i].split('.')
		if (check[1]=='jpg'||check[1]=='png'||check[1]=='webp') {
			counter=counter+1;
		}
	}
	$('.busket-counter').html(counter);
}
function getFavorite () {
	itemDisplay('fog','flex');
	itemDisplay('favorite','block');
	var arr = Object.keys(localStorage);
	var arrVal=Object.values(localStorage);
	var list='';
	for(var i=0;i<arr.length;i++){
		var check=arrKey[i].split('.');
    if (check[1]=='jpg'||check[1]=='png'||check[1]=='webp') {
			// let item = arr[i].split(',');
			var settingsArr = arrVal[i].split(',');
			if (settingsArr[10]!='') {
				settingsArr[10]=settingsArr[10]+' руб.';
			}
			else{settingsArr[10]='';}
			list=list+
			'<div class="favorite-list-item" onclick="favoriteChoise(\''+arr[i]+'\',\''+arrVal[i]+'\')" >'+
			'<div class="favorite-list-item-text">'+
			(arr[i].split('.'))[0]+' &#160 '+
			settingsArr[7]+' &#160 '+
			settingsArr[8]+' &#160 '+
			settingsArr[10]+' &#160 '+
			'</div>'+
			'<div><img src="templates/'+settingsArr[11]+'" width="50" height="50"></div>'+
			'<div><img src="galery/'+arr[i]+'" width="50" height="50"></div>'+
			'<div class="favorite-delete" id="'+arr[i]+'">&#10006</div></div>';
		}
	}
	document.getElementById('favorite-list').innerHTML=list;
	setFavoriteDeletFunction();
}
function setFavoriteDeletFunction () {
	var arr=document.getElementsByClassName('favorite-delete');
	for (var i = 0; i < arr.length; i++) {
		arr[i].addEventListener('click', favoriteDeletFunction);
	}
}
function favoriteDeletFunction (e) {
	var node=e.target;
	e.stopPropagation();
	localStorage.removeItem(node.id);
	getFavorite();
}
function favoriteChoise (image,settings) {
	// var arr=settings.split(',');
  var arr=settings;
	itemDisplay('fog','none');
	itemDisplay('favorite','none');
	document.cookie='imageName='+image;
	document.cookie='discount='+arr[0];
	readCookie ();
	setImagePosition(arr);
	setTemplate(arr[11],'0');
	setTimeout(setTemplateSettings, 1000, arr);
	//setTemplateSettings(arr);
}
function setTemplateSettings (settingsArr) {
	var inputArr=document.getElementsByTagName('input');
	for (var i = 0; i < inputArr.length; i++) {
		if (inputArr[i].type=='radio') {
			if (inputArr[i].value==settingsArr[7]) {
				inputArr[i].checked='checked';
				
			}
			if (inputArr[i].value==settingsArr[8]) {
				inputArr[i].checked='checked';
			}
		}
	}
	document.getElementById('amount').innerText=settingsArr[9]+' руб.';
	document.getElementById('discountAmount').innerText=settingsArr[10]+' руб.';
}
function setImagePosition (arr) {
	item.positionX=arr[1];
	item.positionY=arr[2];
	item.height=arr[3];
	item.width=arr[4];
	item.rotate=arr[12];
	item.mirror=arr[13];
	var node=document.getElementById('item');
	node.style.top=Number(item.positionY)+'px';
	node.style.left=Number(item.positionX)+'px';
	node.style.width=item.width+'px';
	node.style.height=item.height+'px';
	setImageTransform(arr);
}
function setImageTransform (arr) {
	setTransformSettings('transform-rotate',arr);
	setTransformSettings('transform-mirror',arr);
}
function setTransformSettings (name,arr) {
	var settingsArr=document.getElementsByName(name);
	for (var i = 0; i < settingsArr.length; i++) {
		if (settingsArr[i].value==arr[12]) {
			settingsArr[i].click();
		}
		if (settingsArr[i].value==String(arr[13]+','+arr[14])) {
			settingsArr[i].click();
		}
	}
}
function downLoadImage() {
	divPosition('field',field);
	divPosition('item',item);
	var settings=[
	item.image,
	calculator.template,
	calculator.discount,
	item.positionX,
	item.positionY,
	item.width,
	item.height,
	field.positionX,
	field.positionY,
	calculator.sizeText,//9
	calculator.materialText,//10
	calculator.discountAmount,//11
	customer.name,
	customer.mail,
	customer.phone,
	item.rotate,
	String(item.mirror),
	];
	var jsonData=JSON.stringify(settings);
	var ajax = new XMLHttpRequest();
	ajax.open('POST','php-order-settings.php');
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send('settings='+jsonData);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
		}
	};
	console.log(settings);
	progression ();
}
function progression () {
	document.getElementById('progress-backing').style.display='flex';
	let progress=document.getElementById('porgress-bar').value;
	let progressMax=document.getElementById('porgress-bar').max;
	if (progress<progressMax){
		document.getElementById('porgress-bar').value=(progress+1);
		setTimeout(progression,20);
	}
	else {document.location.href = "php-order-image.php";}
}
function mailStorage (recipient) {
	localStorage.setItem('mail',recipient);
}
function mailInfo () {
	let mail = localStorage.getItem('mail');
	if(mail=='customer'){
		document.getElementById('fog').style.display='flex';
		document.getElementById('customer-popup').style.display='block';
	}
	if(mail=='order'){
		orderMail ()
	}
	//localStorage.removeItem('mail');
}
function orderSend () {
	document.getElementById('fog').style.display='flex';
	document.getElementById('order-popup').style.display='block';
}
function cleanStorage() {
	localStorage.removeItem('mail');
	document.location='constructor.html';
}
function customerMail () {
	let mail = document.getElementById('customer-mail').value;
	if(mail==''){
		document.getElementById('warning').innerHTML='Укажите e-mail!';
	}
	else submitForm('customer-form');
}
function orderForm () {
	customer.name = document.getElementById('customer-name').value;
	customer.phone = document.getElementById('customer-phone').value;
	customer.mail = document.getElementById('customer-mail').value;
	if (customer.name==''||customer.phone==''||customer.mail==''){
		document.getElementById('warning').innerHTML='Заполните данные!';
	}
	else{
		mailStorage('order');
		downLoadImage();
	}
}
function orderMail () {
	var ajax = new XMLHttpRequest();
	ajax.open('POST','php-order-data.php');
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
			let arr=JSON.parse(response);
			let orderData=
			'<br>Шаблон: '+arr[1]+
			'<br>Размер: '+arr[9]+
			'<br>Материал: '+arr[10]+
			'<br>Стоимость: '+arr[11]+
			'<br>Заказчик: '+arr[12]+
			'<br>e-mail заказчика: '+arr[13]+
			'<br>тел. заказчика: '+arr[14];
			document.getElementById('order-data').innerHTML=orderData;
			document.getElementById('order-button').style.display='block';
		}
	};
}
function checkFavoriteChoise () {
  var obj=JSON.parse(localStorage.modular);
  var arrKey = Object.keys(obj);
  var arrVal=Object.values(obj);
	// var arrKey = Object.keys(localStorage);
	// var arrVal=Object.values(localStorage);
	var key=localStorage.getItem('editItem');
  console.log(key);
	for (var i = 0; i < arrKey.length; i++) {
		if (arrKey[i]==key) {favoriteChoise(arrKey[i],arrVal[i]);}
	}
}