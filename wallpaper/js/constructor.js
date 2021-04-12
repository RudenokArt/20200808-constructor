// ===== ACTIONS =====
inputActivate();

// ===== LISTENERS =====
$('input[type="radio"]').change(inputActivate);
$('body').ready(wallSizeInput);
$('input[name="wallSize"]').bind('input',wallSizeInput);
$('input[type="checkbox"]').change(inputActivate);


// ===== FUNCTIONS =====
function inputActivate() {
  var radioArr=$('input[type="radio"]');
  $(radioArr).parent().attr('class','radio-label');
  for (var i = 0; i < radioArr.length; i++) {
    if (radioArr[i].checked==true) {
      radioArr[i].parentNode.className='radio-label checkbox-label_active';
    }
  }
  var checkboxArr=$('input[type="checkbox"]');
  $(checkboxArr).parent().attr('class','checkbox-label');
  for (var n = 0; n < checkboxArr.length; n++) {
    if (checkboxArr[n].checked==true) {
      checkboxArr[n].parentNode.className='checkbox-label checkbox-label_active';
    }
  }
  rollSizeBorder();
  rotateImage();
  mirorImage();
}
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
  var wall=$('.wall').css('width').split('px')[0];
  borderPozition=Math.round(wall*borderPozition/100);
  $('.wallpaper-roll').css({'width':borderPozition+'px'});
}
function rotateImage () {
  var wallHeight=$('.wall_wrapper').css('height').split('px')[0];
  var wallWidth=$('.wall_wrapper').css('width').split('px')[0];
  var wallpaper=$('.wallpaper')[0];
  var arr=$('input[name="rotate"]');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      $(wallpaper).css({'transform':'rotate('+arr[i].value+'deg)'});
      if (arr[i].value=='270'||arr[i].value=='90'){
        $(wallpaper).css({
          'width':wallHeight+'px',
          'height':wallWidth+'px',
          'margin-top':-(Number(wallWidth)-Number(wallHeight))/2,
        });
      }else{
        $(wallpaper).css({
          'width':wallWidth+'px',
          'height':wallHeight+'px',
          'margin-top':'auto'
        });
      }
    }
  }
}
function mirorImage () {
  miror=[];
  var arr=$('input[name="miror"]');
  if (arr[0].checked) {
    miror[0]='-1';
  }else{
    miror[0]='1';
  }
  if (arr[1].checked) {
    miror[1]='-1';
  }else{
    miror[1]='1';
  }
  $('.wallpaper').css({
    //'transform':'scale('+miror[0]+', '+miror[1]+')'
  });
}