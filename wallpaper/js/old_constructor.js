// ===== GLOBALS =====
var settings={
  scale:'scale(1)',
  rotate:'rotate(0deg)',
  trim:[0,50,0,50],
};
var priceList={
  '105':1000,
  '137':1000,
  '150':1000,
  '160':1000,
  '260':1000,
};

var favoriteArr=[];
// ===== ACTIONS =====
inputActivate();
verticalTrim();
horisontalTrim();
rollSizeBorder();
inputSizeSettings();

// ===== LISTENERS =====
$('input[type="radio"]').change(inputActivate);
$('input[type="checkbox"]').change(inputActivate);
$('.wallpaper_interior-tape_item').click(function () {
  var img=this.innerHTML.trim();
  $('.wallpaper-interior').css({
    'background-image':'url(img/interior/'+img+')',
  });
});
$('select[name="wallpaperTexture"]').change(function(){
  $('.wallpaper-texture').css({
    'background-image':'url(img/texture/'+this.value.trim()+')'
  });
});
$('input[name="wallSize"]').bind('input',wallSizeInput);
$('input[name="wallSize"]').change(function () {
  var radioArr=$('input[name="wallpaperTrimm"');
  var inputArr=$('input[name="wallpaperSize"]');
  if (radioArr[0].checked) {
    var wallpaperWidth=Number($('.wallpaper_section-middle').css('width').split('px')[0]);
    var wallWidth=Number($('.wall_wrapper').css('width').split('px')[0]);
    var maxWidth=Number(inputArr[0].getAttribute('placeholder'));
    var width=Math.ceil(wallpaperWidth/wallWidth*maxWidth);
    inputArr[0].value=width;
  }else {
    var wallpaperHeight=Number($('.wallpaper_section-middle').css('height').split('px')[0]);
    var wallHeight=Number($('.wall_wrapper').css('height').split('px')[0]);
    var maxHeight=Number(inputArr[1].getAttribute('placeholder'));
    var height=Math.ceil(wallpaperHeight/wallHeight*maxHeight);
    inputArr[1].value=height;
  }
});
$('input[name="wallpaperTrimm"').change(rangeSettings);
$('input[name="wallpaperSize"]').focus(function () {
  var radio=$(this).siblings('label').children();
  $(radio).prop('checked',true);
  inputActivate();
  rangeSettings();
});
$('input[name="wallpaperSize"]').change(function () {
  var max=Number($(this).attr('placeholder'));
  if(Number(this.value)>max){
    this.value=max;
  }
  var size=(100-Number(this.value)/max*100)/2;
  var slider=$('input[name="wallSize"]');
  slider[0].value=size;
  slider[1].value=50-size;
  wallSizeInput();
});
$('input[name="wallpaperContainer"]').change(imageContainer);
$('input[name="rollSize"]').change(rollSizeBorder);
$('input[name="wallpaperSize"],input[name="wallSize"]').change(function(){
  var arr=$('input[name="wallpaperSize"]');
  var priceNode=$('.wallpaper_constructor-calc span');
  var square=Number(arr[0].value)/100*Number(arr[1].value/100);
  price=Math.ceil(square*1000);
  discountPrice=Math.ceil(square*1000*((100-settings.discount)/100));
  $(priceNode[0]).html(price);
  $(priceNode[1]).html(discountPrice);
});
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
  rotateImage();
  mirorImage();
  getCartData();
  getImageData();
  rangeSettings();
}
function inputSizeSettings () {
  var arr=$('input[name="wallpaperSize"]');
  for (var i = 0; i < arr.length; i++) {
    arr[i].value=arr[i].getAttribute('placeholder');
  }
}
function getImageData () {
  var data=localStorage.getItem('wallpaper_constructor');
  var arr=[];
  if (data!=''&&data!=null&&data!=undefined) {
    arr=data.split('|');
  }
  settings.image=arr[1];
  settings.discount=Number(arr[6]);
  console.log(settings);
  //$('.wallpaper')[0].style.backgroundImage='url(img/wallpaper/'+settings.image+')';
  $('.wallpaper').attr('src','img/wallpaper/'+settings.image);
}
function getCartData () {
  var str=localStorage.getItem('wallpaper');
  favoriteArr=JSON.parse(str);
  $('.wallpaper-cart_counter').html(favoriteArr.length);
}
function rotateImage () {
  var wallHeight=$('.wall_wrapper').css('height').split('px')[0];
  var wallWidth=$('.wall_wrapper').css('width').split('px')[0];
  var wallpaper=$('.wallpaper')[0];
  var arr=$('input[name="rotate"]');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      settings.rotate='rotate('+arr[i].value+'deg)';
      $(wallpaper).css({'transform':settings.rotate+' '+settings.scale});
      if (arr[i].value=='270'||arr[i].value=='90'){
        $(wallpaper).css({
          'width':wallHeight+'px',
          'height':'auto',
          // 'height':wallWidth+'px',
          'margin-top':(Number(wallWidth)-Number(wallHeight))/2,
        });
      }else{
        $(wallpaper).css({
          // 'width':wallWidth+'px',
          // 'height':wallHeight+'px',
          'width':'100%',
          'height':'auto',
          'margin-top':'0'
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
  settings.scale='scale('+miror[0]+', '+miror[1]+')';
  $('.wallpaper').css({
    'transform':settings.rotate+' '+settings.scale,
  });
}
function rangeSettings () {
  var input=$('input[name="wallSize"]');
  var radio=$('input[name="wallpaperTrimm"]');
  if (radio[0].checked) {
    input[0].value=settings.trim[0];
    input[1].value=settings.trim[1];
  } else {
    input[0].value=settings.trim[2];
    input[1].value=settings.trim[3];
  }
  rangeOrientation();
}
function rangeOrientation () {
  var wallHeight=$('.wall_wrapper').css('height').split('px')[0];
  var wallWidth=$('.wall_wrapper').css('width').split('px')[0];
  var arr=$('input[name="wallpaperTrimm"');
  if (arr[0].checked) {
    $('.wallpaper_range-block').css({
      'transform':'rotate(0deg)',
      'width':wallWidth+'px',
      'height':wallHeight+'px',
      'margin-top':'auto',
    });
  }else{
    $('.wallpaper_range-block').css({
      'transform':'rotate(90deg)',
      'width':wallHeight+'px',
      'height':wallWidth+'px',
      'margin-top':-(Number(wallWidth)-Number(wallHeight))/2,
    });
  }
  wallSizeInput();
}
function wallSizeInput() {
  var radio=$('input[name="wallpaperTrimm"]');
  if (radio[0].checked) {
    horisontalTrim();
  } else {
    verticalTrim();
  }
}
function horisontalTrim () {
  var valueArr=$('input[name="wallSize"]');
  var sectionArr=$('.wallpaper_section');
  var arrowArr=$('.wallpaper_range-slider');
  value0=Number(valueArr[0].value);
  value1=50-Number(valueArr[1].value);
  settings.trim[0]=Number(valueArr[0].value);
  settings.trim[1]=Number(valueArr[1].value);
  if (value0>30) {value0=value0-2;}
  if (value1>30) {value1=value1-2;}
  if (value0<20) {value0=value0+1;}
  if (value1<20) {value1=value1+1;}
  sectionArr[0].style.width=value0+'%';
  sectionArr[1].style.width=value1+'%';
  arrowArr[0].style.width=value0*2+1+'%';
  arrowArr[1].style.width=value1*2+1+'%';
  $('.wallpaper_section-center').css({
    'width':100-value0-value1+'%'
  });
}
function verticalTrim () {
  var valueArr=$('input[name="wallSize"]');
  var top=$('.wallpaper_section-top')[0];
  var bottom=$('.wallpaper_section-bottom')[0];
  var arrowArr=$('.wallpaper_range-slider');
  settings.trim[2]=Number(valueArr[0].value);
  settings.trim[3]=Number(valueArr[1].value);
  value0=Number(valueArr[0].value);
  value1=50-Number(valueArr[1].value);
  if (value0>30) {value0=value0-2;}
  if (value1>30) {value1=value1-2;}
  if (value0<20) {value0=value0+1;}
  if (value1<20) {value1=value1+1;}
  top.style.height=value0+'%';
  bottom.style.height=value1+'%';
  arrowArr[0].style.width=value0*2+1+'%';
  arrowArr[1].style.width=value1*2+1+'%';
  $('.wallpaper_section-middle').css({
    'height':100-value0-value1+'%'
  }); 
}
function imageContainer() {
 var radio=$('input[name="wallpaperContainer"]');
 if (radio[1].checked) {
  $('.wallpaper_section-middle').html('<img src="img/wallpaper/'+settings.image+'">');
  $('.wallpaper_section-wrapper').css({
    'background-color':'white',});}else { 
    $('.wallpaper_section-middle').html('');
    $('.wallpaper_section-wrapper').css({
      'background-color':'transparent',  });
  }
}
function rollSizeBorder () {
  var arr=$('input[name="rollSize"]');
  var absoluteWallSize=Number($('input[name="wallpaperSize"]').attr('placeholder'));
  var relativeWallSize=Number($('.wall_wrapper').css('width').split('px')[0]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      var rollSize=Number(arr[i].value)/absoluteWallSize*relativeWallSize;
      $('.wallpaper-roll').css({
        'width':rollSize+'px',
      });
    }
  }
}