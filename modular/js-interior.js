var interiorTapeChecker=true;
var interiorArr=[];

function interiorView () {
	itemDisplay('fog','flex');
	itemDisplay('interior','block');
	document.getElementById('interior-foreground').style.backgroundImage=
  'url(../wallpaper/img/interior/'+interiorArr[0].interior+')';
	//'url(interiors/'+interiorArr[0].interior+')';
	setInteriorImage();
}
function setInteriorImage (id) {
	divPosition('item',item);
	document.getElementById('interior-image').style.backgroundImage='url(galery/'+item.image+')';
	document.getElementById('interior-image').style.height=(item.height/2)+'px';
	document.getElementById('interior-image').style.width=(item.width/2)+'px';
	document.getElementById('interior-image').style.top=((item.positionY-100-19)/2)-25+'px';
	document.getElementById('interior-image').style.left=(item.positionX/2)-25+'px';
	interiorImageTransform();
}
function interiorImageTransform () {
	var node=document.getElementById('interior-image');
	node.style.transform='scale('+item.mirror+') rotate('+item.rotate+'deg)';
}
function ajaxInteriors () {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
			interiorArr=JSON.parse(response);
			if (interiorTapeChecker) {interiorTape();}
			interiorView ();
		}
	};
	ajax.open('POST', 'php-get-interiors.php', true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send();
}
function interiorTape () {
  console.log('tape');
	let tape = '';
	for(let i=0;i<interiorArr.length;i++){
		tape=tape+
		//'<img src="interiors/'+interiorArr[i].interior+'"'+
    '<img src="../wallpaper/img/interior/'+interiorArr[i].interior+'"'+
		' class="interior-tape-item"'+
		' onclick="setInteriorBackground(\''+interiorArr[i].interior+'\')">';
	}
	document.getElementById('interior-tape').innerHTML=tape;
  interiorSlickSlider();
  interiorTapeChecker=false;
}
function interiorSlickSlider () {
  $(document).ready(function(){
    $('#interior-tape').slick({ 
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });
  });
}
function setInteriorBackground (imageName) {
	document.getElementById('interior-foreground').style.backgroundImage=
  'url(../wallpaper/img/interior/'+imageName+')';
  //'url(interiors/'+imageName+')';
}
function customerInterior () {
	itemDisplay('interior-download','block')
}
function setCustomerInterior () {
	setInteriorBackground ();
	let interior = localStorage.getItem('interior');
	itemDisplay('interior-download','none');
	document.getElementById('interior-foreground').style.backgroundImage=
	'url(interiors/customer-interior/'+interior+')';
}