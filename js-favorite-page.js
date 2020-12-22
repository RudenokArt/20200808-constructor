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
		'<div class="constructor-item">'+
		'<div class="image-item"'+
		'style="background-image: url(miniatures/'+favoriteArr[i].image+');'+
		'top:'+favoriteArr[i].top+'px;'+
		'left:'+favoriteArr[i].left+'px;'+
		'height:'+favoriteArr[i].height+'px;'+
		'width:'+favoriteArr[i].width+'px">'+
		'</div>'+
		'<div>'+
		'<img src="mini-templates/'+favoriteArr[i].template+'"'+
		'width="200" height="200" alt=" ">'+
		'</div>'+
		'</div>';
	}
	$('.favorite-table').html(table);
}
