function radioVidget () {
	let arr=document.getElementsByTagName('input');
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].type=='radio'){
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
