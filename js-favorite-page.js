favoriteArr=[];
class favoriteItem {
	constructor(image, features){
		this.image=image;
		this.features=features;
	}
	setFeatures(){
		let arr=this.features.split(',');
		this.discount=arr[0];
		this.left=Math.round((Number(arr[1]-50))/5*2);
		this.top=Math.round((Number(arr[2])-119-50)/5*2);
		this.height=Math.round(Number(arr[3])/5*2);
		this.width=Math.round(Number(arr[4])/5*2);
		this.size=arr[5];
		this.discount=arr[6];
		this.sizeText=arr[7];
		this.materialText=arr[8]
		this.amount=arr[9];
		this.discountAmount=arr[10];
		this.template=arr[11];
		this.rotate=arr[12];
		this.miror=String(arr[13]);
		this.mainSizeSet();
	}
	mainSizeSet(){
		if (this.height>this.width) {
			this.mainSize=this.height;
		}else{
			this.mainSize=this.width;
		}
	}
}
getFavoriteData();
function getFavoriteData () {
	let arrKey = Object.keys(localStorage);
	let arrVal=Object.values(localStorage);
	for (var i = 0; i < arrKey.length; i++) {
		if(arrKey[i]!='mail'&&arrKey[i]!='elementor'&&arrKey[i]!='editItem'){
			favoriteArr.push(new favoriteItem (arrKey[i],arrVal[i]));
		}		
	}
	favoriteTable();
}
function favoriteTable () {
	let table='';
	for (var i = 0; i < favoriteArr.length; i++) {
		favoriteArr[i].setFeatures();
		table=table+
		'<div class="flex-wrapper content-item">'+
		'<div>'+favoriteImage(favoriteArr[i])+'</div>'+
		'<div class="flex-wrapper">'+favoriteDescription(favoriteArr[i])+'</div>'+
		'<div class="buttons-item">'+
		favoriteChoise(favoriteArr[i])+
		favoriteEdit(favoriteArr[i])+
		'</div>'+
		'</div>';
	}
	$('.favorite-table').html(table);
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
	'<div class="margin-auto"><span>'+
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
	'<button name="'+item.image+'" class="edit-button">'+
	iconPencillFill()+
	'</button>'+
	'</div>'+
	'<div><span>&#160 ред.</span></div>'+
	'</div>';
	return button;
}
function checkboxLabel () {
	let label = $('label[name="'+this.id+'"');
	if (this.checked) {label.html(iconCheck2());}
	else {label.html('');}
}
function setEditItem () {
	localStorage.setItem('editItem', this.name);
	document.location.href='constructor.html';
}
//console.log(favoriteArr)