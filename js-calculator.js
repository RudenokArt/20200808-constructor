let calculator={};

//document.addEventListener('DOMContentLoaded',calculatorStart);
function calculatorStart () {
	getAjaxData(sizeTab, 'php-get-size.php');
	getAjaxData(materialTab, 'php-get-materials.php');
	readCookie();
	rangeVidget();
}
// window.onload=getAjaxData(sizeTab, 'php-get-size.php')+
// getAjaxData(materialTab, 'php-get-materials.php')+
// setTimeout(readCookie,1000);

function readCookie () {
	arr=(document.cookie).split('; ');
	setImage(arr);
	flashingOn();
	flashingOff();
}
function flashingOn () {
	setInterval(function(){
		document.getElementById('backing').style.opacity='0.5';
	}, 2000);
}
function flashingOff () {
	setInterval(function(){
		document.getElementById('backing').style.opacity='0.2';
	}, 2100);
	
}
function setImage (arr) {
	for (let i=0;i<arr.length;i++){
		let subArr=arr[i].split('=');
		if (subArr[0]=='imageName'){
			document.getElementById('item').style='background-image: url("galery/'+subArr[1]+'")';
			let imageName=subArr[1].split('.');
			document.getElementById('imageName').innerText=imageName[0];
			item.image=subArr[1];
		}
		if (subArr[0]=='discount'){
			let discount=subArr[1];
			if (discount!=0){
				document.getElementById('discount').innerHTML=
				'<div class="discount">cкидка <br> '+discount+'%</div>';
			}
			calculator.discount=discount;
		}
	}
}
function getAjaxData (pf,phpfile) {
	let req = new XMLHttpRequest();
	req.open('POST', phpfile);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200) {
			try {
				arr=JSON.parse(req.responseText);
				pf(arr);
			} catch(e) {}
		}

	};
}
function sizeTab (arr) { 
	arr=orderBySize(arr);
	let node='';
	for(let i=0;i<arr.length;i++)
	{
		if (arr[i][3]==calculator.template){
			node=node+
			'<label for="radio'+arr[i][0]+'" class="radio-label" id="labelradio'+arr[i][0]+'">'+
			'<input type="radio" name="size" value="'+arr[i][1]+'" id="radio'+arr[i][0]+'"'+
			' onclick="getValue(\''+arr[i][2]+'\',\'size\')+getValue(\''+arr[i][1]+'\',\'sizeText\')">'+
			'</label> '+arr[i][1]+'<br><br>';
		}
	}
	document.getElementById('size').innerHTML=node;
	radioVidget();
}
function orderBySize (arr) {
	let arr1=[]; // выбираем размеры, для данного шаблона
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][3]==calculator.template) {
			arr1.push(arr[i]);
		}
	}
	let arr2=[];
	let m=arr1.length
	for (var n = 0; n < m; n++) {
		let x;
	let min=arr1[0]; // выбираем минимальный размер
	for (var k = 0; k < arr1.length; k++) {
		let subArrMin = min[1].split(' см ');
		let subArr1 = arr1[k][1].split(' см ');
		if (Number(subArrMin[0])>Number(subArr1[0])){
			min = arr1[k];
			x=k;
		}
	}
	arr1.splice(x,1);
	arr2.push(min);
}
return arr2;
}
function materialTab(arr){
	let node='';
	for(let i=0;i<arr.length;i++)
	{
		node=node+
		'<label for="radio'+arr[i][0]+'" class="radio-label" id="labelradio'+arr[i][0]+'">'+
		'<input type="radio" name="material" value="'+arr[i][1]+'" id="radio'+arr[i][0]+'"'+
		' onclick="getValue(\''+arr[i][2]+'\',\'material\')+getValue(\''+arr[i][1]+'\',\'materialText\')">'+
		'</label> '+arr[i][1]+'<br><br>';
	}
	document.getElementById('material').innerHTML=node;
}
function getValue (value,property) {
	calculator[property]=value;
	calculation();
	//console.log(calculator)
}
function calculation(){
	if(calculator.price==undefined)
		{document.getElementById('amount').innerText='';}
	else if (calculator.size==undefined)
		{document.getElementById('amount').innerText='';}
	else if (calculator.material==undefined)
		{document.getElementById('amount').innerText='';}
	else {
		calculator.amount=Math.round(calculator.size*(100+ Number(calculator.material))/100);
		// document.getElementById('warning').innerText='';
		document.getElementById('amount').innerText=calculator.amount+' руб.';
		calculator.discountAmount=Math.round(calculator.amount*((100-calculator.discount)/100));
		document.getElementById('discountAmount').innerText=calculator.discountAmount+' руб.';
	}
}
function calculationResset () {
	calculator.size=undefined;
	document.getElementById('amount').innerText='';
	document.getElementById('discountAmount').innerText='';
	// console.log(calculator.size);
}
