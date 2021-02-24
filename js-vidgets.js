function radioVidget () {
	let arr=document.getElementsByTagName('input');
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].type=='radio' && arr[i].name!='swich-selector'){
			let node=document.getElementById('label'+String(arr[i].id));
			node.style.backgroundColor='white';
			if (arr[i].checked==true) {
				node.style.backgroundColor='#3cb2e4';
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
  var tabArr=[];
  tabArr.push($('.field,.input-range'));
  tabArr.push($('.sidebar,.transform'));
  tabArr.push($('.footer'));
  console.log(tabArr);
  var labelArr=$('.swich-selector');
  var radioArr=$('input[name="swich-selector"]');
  for (var i = 0; i < radioArr.length; i++) {
    if (radioArr[i].checked){
      labelArr[i].className='swich-selector swich-selector_active';
      tabArr[i].css({'opacity':'1','z-index':'10'});
    }else {
      labelArr[i].className='swich-selector';
      tabArr[i].css({'opacity':'0','z-index':'-10'});
    }
  }
}