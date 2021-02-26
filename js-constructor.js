let mouse={};
let field={};
let item={
	rotate: '0',
	mirror: '1',
};

function mouseOn () {
	let node=document.getElementById('field');
	node.addEventListener('touchstart',takeItem);
	divPosition('field',field);
	setRadioFunction('transform-rotate');
	setRadioFunction('transform-mirror');
}
function mousePosition () {
	document.addEventListener('mousemove', function(event) {
		mouse.positionX=event.clientX;
		mouse.positionY=event.clientY;
		// mouse.positionX=event.pageX;
		// mouse.positionY=event.pageY;
	});
	divPosition('item',item);
	moveItem();
}
function fingerPosition () {
	moveItem();
	document.addEventListener('touchmove', function(event) {
		mouse.positionX=parseInt(event.changedTouches[0].pageX);
		mouse.positionY=parseInt(event.changedTouches[0].pageY);
	});
	divPosition('item',item);
	moveItem();
}
function takeItem(){
	mouse.startX=mouse.positionX;
	mouse.startY=mouse.positionY;
	mouse.moveX=0;
	mouse.moveY=0;
	let node=document.body;
	node.addEventListener('mouseup',dropItem);
	node.addEventListener('mousemove', mousePosition);
	node.addEventListener('touchend',dropItem);
	node.addEventListener('touchmove', fingerPosition);
	mouse.status='take';
	checkMousePosition(item);
}
function dropItem () {
	mouse.status='drop';
	let node=document.body;
	node.removeEventListener('mouseup',dropItem);
	node.removeEventListener('mousemove',mousePosition);
	node.removeEventListener('touchend',dropItem);
	node.removeEventListener('touchmove',fingerPosition);
}
function divPosition (node,object) {
	let div=document.getElementById(node);
	let coord = div.getBoundingClientRect();
	// object.positionX=coord.left;
	// object.positionY=coord.top;
	object.positionX=coord.left+ pageXOffset;
	object.positionY=coord.top+pageYOffset;
	object.height=div.offsetHeight;
	object.width=div.offsetWidth;
}
function moveItem () {
	checkMousePosition(field);
	offset();
	let node=document.getElementById('item');
	node.style.top=Number(item.positionY)-Number(mouse.moveY)+'px';
	node.style.left=Number(item.positionX)-Number(mouse.moveX)+'px';
}
function offset(){
	mouse.moveX=mouse.startX-mouse.positionX;
	mouse.moveY=mouse.startY-mouse.positionY;
	mouse.startX=mouse.positionX;
	mouse.startY=mouse.positionY;
}
function checkMousePosition (argument) {
	if (
		(mouse.positionX)<(argument.positionX-pageXOffset) ||
		(mouse.positionY)<(argument.positionY-pageYOffset) ||
		mouse.positionY>(argument.positionY+argument.height) ||
		mouse.positionX>(argument.positionX+argument.width)
		) 
	{
		dropItem();
	} 
}
function scale () {
	let scaleValue=document.getElementById('scaleInput').value;
	let node=document.getElementById('item');
	node.style.width=scaleValue+'px';
	node.style.height=scaleValue+'px';
	divPosition('item',item);
}
let templateTape={};
let templateArr=[];
let slider={
	start:0,
	stop: function(){return (Number(this.start)+3)},
};
function ajaxTemplates()
{
	let req = new XMLHttpRequest();
	req.open('POST','php-read-templates.php');
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send();
	req.onreadystatechange=function ()
	{
		if (req.readyState == 4 && req.status == 200) {
			let str=req.responseText;
			let templates=JSON.parse(str);
			for (i=0;i<templates.length;i++){
				tapeTemplate(templates[i].template,templates[i].price,i);
			}
			setTimeout(displayTemplates,1000);
		} 
	}
}
function tapeTemplate (template,price,i){
	templateTape[template]=price;
	if (i==0){
		setTemplate (template,price);
	}
}
function displayTemplates () {
	let tape='';
	for (let key in templateTape)
	{
		tape=tape+
		'<div class="template-tape-item" id="'+key+'"'+
		' onclick="setTemplate(\''+key+'\',\''+templateTape[key]+'\')">'+
		'<img class="template-tape-item-image" src="mini-templates/'+key+'">'+
    '</div>';
    templateArr.push(key);
  }
  document.getElementById('template-tape').innerHTML=tape;
  slickSlider();
}
function slickSlider () {
  $(document).ready(function(){
    $('.template-tape').slick({ 
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });
  });
}


function setTemplate (template,price) { 
	calculationResset();
	let item=document.getElementById('template');
	let item2=document.getElementById('interior-template');
	item.style.backgroundImage = 'url("templates/'+template+'")';
	item2.style.backgroundImage = 'url("templates/'+template+'")';
	let templateSpan=template.split('.');
	document.getElementById('templateSize').innerHTML=templateSpan[0];
	calculator.template=template;
	calculator.price=price;
	getAjaxData(sizeTab, 'php-get-size.php');
	calculation();
}
function displayDiv(argument){
	document.getElementById(argument).style.display='block';
	
}
function displayNoneDiv(argument){
	document.getElementById(argument).style.display='none';
}
function itemDisplay (item,how) {
	document.getElementById(item).style.display=how;

}
function submitForm (form) {
	form=document.getElementById(form);
	form.submit()
}
function setRadioFunction (name) {
	let arr=document.getElementsByName(name);
	for (var i = 0; i < arr.length; i++) {
		arr[i].addEventListener('change',radioFunction)
	}
}
function radioFunction (e) {
	let node=e.target;
	if (node.name=='transform-rotate')
		{rotatinon(node.value)}
	else {reflection(node.value)}
}
function rotatinon (argument) {
	item.rotate=argument;
	transform();
}
function reflection (argument) {
	item.mirror=argument;
	transform();
}
function transform () {
	let image=document.getElementById('item');
	image.style.transform='scale('+item.mirror+') rotate('+item.rotate+'deg)';
}
function redirect(adress){ 
	document.location.href = adress;
}