favoriteArr=[];
class favoriteItem {
	constructor(name, features){
		this.name=name;
		this.features=features;
	}
	setFeatures(){
		let arr=this.features.split(',');
		this.image=this.name.split('#')[0];
		this.discount=arr[0];
		this.left=Math.round((Number(arr[1])-50)/5*2);
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
		this.itemMiror=String(arr[13]);
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
	console.log(favoriteArr);
}
function favoriteTable () {
	let table='';
	for (var i = 0; i < favoriteArr.length; i++) {
		table=table+
		'<div class="col-lg-6 col-sm-12">'+
		'<div class="row">'+
		favoriteImage(favoriteArr[i])+
		'<div class="col-sm-4 description-item">'+
		favoriteDescription(favoriteArr[i])+
		'</div>'+
		'</div>'+
		'</div>';
	}
	$('.favorite-table').html(table);
}
function favoriteImage (item) {
	let image=
	'<div class="constructor-item col-sm-4">'+
	'<div class="image-item"'+
	'style="background-image: url(miniatures/'+item.image+');'+
	'top:'+item.top+'px;'+
	'left:'+item.left+'px;'+
	'height:'+item.height+'px;'+
	'width:'+item.width+'px">'+
	'</div>'+
	'<div>'+
	'<img src="mini-templates/'+item.template+'"'+
	'width="200" height="200" alt=" ">'+
	'</div>'+
	'</div>';
	return image;
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