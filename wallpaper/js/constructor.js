$('input[name="rollSize"]').change(function () {
  var arr=$('input[name="rollSize"]');
  $(arr).parent().attr('class','size-label');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].checked==true) {
      arr[i].parentNode.className='size-label size-label_actve';
    }
  }
  rollSizeBorder();
});
$('body').ready(wallSizeInput);
$('input[name="wallSize"]').bind('input',wallSizeInput);



// ===== FUNCTIONS =====

function wallSizeInput(){
  var input=$('input[name="wallSize"]');
  var min=Number($(input).prop('min'));
  var max=Number($(input).prop('max'));
  var size=Number($(input).prop('value'))
  var width=Math.round((size-min)/(max-min)*100);
  $('.wall-size_slider').css({'width':width+'%'});
  $('.wall-size_text').html(size);
  rollSizeBorder();
}
function rollSizeBorder () {
  var rollSize=0;
  var arr=$('input[name="rollSize"]');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].checked==true) {
      rollSize=arr[i].value;
    }
  }
  var wallSize=$('input[name="wallSize"]').prop('value');
  var borderPozition=Math.round(rollSize/wallSize*100);
  $('.wallpaper-roll').css({'width':borderPozition+'%'});
}