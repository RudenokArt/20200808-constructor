function radioVidget () {
	let arr=document.getElementsByTagName('input');
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].type=='radio' && arr[i].name!='swich-selector'){
			let node=document.getElementById('label'+String(arr[i].id));
			//node.style.backgroundColor='white';
      node.className='radio-label';
			if (arr[i].checked==true) {
				//node.style.backgroundColor='#3cb2e4';
        node.className='radio-label_active';
			}		
		}
	}
	radioFunctionAdd();
}
function radioFunctionAdd () {
	let arr=document.getElementsByTagName('input');
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].type=='radio'){
			arr[i].addEventListener('change',radioVidget);	
		}
	}
}
function rangeVidget () {
	let input=document.getElementById('scaleInput');
	input.addEventListener('input', rangeVidgetFunction);
	rangeVidgetFunction();
}
function rangeVidgetFunction () {
	let input=document.getElementById('scaleInput');
	let scale=input.value/input.max*100;
	document.getElementById('range-slider').style.width=scale+'%';
}
$('input[name="swich-selector"]').change(swichSelector);

function swichSelector () {
  var labelArr=$('.swich-selector');
  var radioArr=$('input[name="swich-selector"]');
  for (var i = 0; i < radioArr.length; i++) {
    if (radioArr[i].checked){
      labelArr[i].className='swich-selector swich-selector_active';
    }else {
      labelArr[i].className='swich-selector';
    }
  }
  swichTab(radioArr);
}
function swichTab (radioArr) {
  $('.transform-block').css({'top':'-1000px'});
  $('.sidebar').css({'top':'-1000px'});
  $('.footer').css({'top':'-1000px'});
  var n=0;
  for (var i = 0; i < radioArr.length; i++) {
    if (radioArr[i].checked) {n=i;}
  }
  if (n==1) {$('.transform-block').css({'top':'0'})}
  if (n==2) {$('.sidebar').css({'top':'0'})}
  if (n==3) {$('.footer').css({'top':'0'})}  
}