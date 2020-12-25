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
		favoriteArr[i]=new favoriteItem (arrKey[i],arrVal[i]);
		favoriteArr[i].setFeatures();
	}
	favoriteTable();
}
function favoriteTable () {
	let table='';
	for (var i = 0; i < favoriteArr.length; i++) {
		table=table+
		'<div class="col-lg-6 col-sm-12">'+
		'<div class="row">'+
		favoriteImage(favoriteArr[i])+
		'<div class="description-item">'+
		favoriteDescription(favoriteArr[i])+
		'</div>'+
		'<div class="buttons-item">'+
		favoriteButtons(favoriteArr[i])+
		'</div>'+
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
	'Артикул: '+item.image.split('.')[0]+'<br>'+
	'Шаблон: '+item.template+'<br>'+
	'Размер: '+item.sizeText+'<br>'+
	'Материал: '+item.materialText+'<br>'+
	'Стоимость: '+item.discountAmount+
	'<br>';
	return description;
}
function favoriteButtons (item) {
	let buttons=
	'<div>'+
	'<div><label for="'+item.image+'" name="'+item.image+'"></label></div>'+
	'<div> В заказ</div>'+
	'<div><input type="checkbox" id="'+item.image+'"></div>'+
	'</div>';
	return buttons;
}
function checkboxLabel () {
	let swg=
	'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">'+
	'<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>'+
	'</svg>';
	let label = $('label[name="'+this.id+'"');
	if (this.checked) {label.html(swg);}
	else {label.html('');}
	
	console.log(label);
}
//console.log(favoriteArr)