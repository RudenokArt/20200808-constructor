var wallpaper={
  scale:'scale(1,1)',
  container:0,
  rotate:0,
  miror:'n',
  price:0,
};
var sidebarStatus=false;


// ========= ACTIONS =========

$('.constructor_wallpaper img')[1].style.display='none';
$('input[name="input_size"]').prop('value','');
$('input[name="image_container"]')[0].checked=true;
$(function imageSetData () {
  var data=localStorage.getItem('wallpaper_constructor');
  var arr=[];
  if (data!=''&&data!=null&&data!=undefined) {
    arr=data.split('|');
  }
  wallpaper.image=arr[1];
  wallpaper.intialImage=arr[1];
  wallpaper.imageName=arr[2];
  wallpaper.discount=Number(arr[6]);
  $('.constructor_wallpaper img').attr('src','img/wallpaper/'+wallpaper.image);
  wallpaper.category=arr[3];
  wallpaper.subcategory=arr[4];
  //wallpaper.image=arr[2];
  var navigation = $('.constractor-navigation span');
  navigation[1].innerHTML=wallpaper.category;
  navigation[2].innerHTML=wallpaper.subcategory;
  navigation[3].innerHTML=wallpaper.imageName;
});
getCartData();
$('input[type="radio"], input[type="checkbox"]').prop('checked',false);
setTimeout(function () {
  $('.wallpaper_interior-tape_item')[0].click();
  $('input[name="wallpaper_roll"]').parent()[0].click();
  $('input[name="image_container"]').parent()[0].click();
}, 1000);



// ========= LISTENERS =========

$('input[name="input_size"]').bind('input',function () {
  var str=this.value;
  var lastSimbol=str.substring(str.length-1);
  if (isNaN(Number(lastSimbol))) {
    this.value=str.substring(0,str.length-1);
  }
  if (Number(this.value)>10000) {
    this.value=10000;
  }
  var range1, range2;
  var arr=$('input[name="input_size"]');
  if ((Number(arr[0].value)*500/750)>Number(arr[1].value)){
    range0=1000;
    range1=(Number(arr[1].value)/(Number(arr[0].value)*500/750)*1000);

  }else {
    range0=((Number(arr[0].value)*500/750)/Number(arr[1].value)*1000);
    range1=1000;
  }
  var values0=[(1000-range0)/2,(1000-range0)/2+range0];
  $("#range_horisontal").slider("values", values0);
  wallpaperWidth(values0);
  var values1=[(1000-range1)/2,(1000-range1)/2+range1];
  $("#range_vertical").slider("values", values1);
  wallpaperHeight(values1);
  wallpaper.absoluteSize=[range0,range1,];
  wallpaper.relativeSize=[Number(arr[0].value),Number(arr[1].value)];
  if (Number(arr[0].value)<1 || Number(arr[1].value)<1) {
    $('.range_size').css({'display':'none'});
    $('.constructor_curtain').css({'border':'none'});
  }else{
    $('.range_size').css({'display':'block'});
    $('.constructor_curtain').css({'display':'block'});
  }
  $('.constructor_wallpaper-size_sensor').css({'display':'block'});
  rollSizeBorder();
});
$('input[name="image_container"]').change(function () {
  var radio=$('input[name="image_container"]');
  var container=$('.constructor_wallpaper img');
  if (radio[0].checked) {
    container[0].style.display='block';
    container[1].style.display='none';
    wallpaper.container=0;
  }else{
    container[0].style.display='none';
    container[1].style.display='block';
    wallpaper.container=1;
  }
  rollSizeBorder();
});
$('input[type="radio"], input[type="checkbox"]').change(function(){
  var radioArr=$('input[class="round_radio"]');
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
});
$('input[name="image_miror"]').change(function () {
  var arr=$('input[name="image_miror"]');
  if (arr[0].checked&&arr[1].checked){
    wallpaper.scale='scale(-1)';
    wallpaper.miror='b';
  }else if (arr[0].checked) {
    wallpaper.scale='scale(-1,1)';
    wallpaper.miror='h';
  }else if (arr[1].checked) {
    wallpaper.scale='scale(1,-1)';
    wallpaper.miror='v';
  }else {
    wallpaper.scale='scale(1)';
    wallpaper.miror='n';
  }
  $('.constructor_wallpaper').css({
    'transform':wallpaper.scale,
  });
});
$('input[name="image_rotate"]').change(function () {
  $('.constructor_wallpaper img').css({
    'transform':'rotate('+this.value+'deg)',
  });
  wallpaper.rotate=this.value;
});
$('input[name="wallpaper_roll"]').change(rollSizeBorder);
$('.wallpaper_interior-tape_item').click(function () {
  var img=this.innerHTML.trim();
  $('.constructor_wallpaper-interior').css({
    'background-image':'url(img/interior/'+img+')',
  });
});
$('button[name="wallpaper_constructor-favorite_add"]').click(function () {
  var node=$('.wallpaper-cart_image');
  $(node).prop('className','wallpaper-cart_image-active');
  setTimeout(function(){$(node).prop('className','wallpaper-cart_image');}, 100);
  var item=localStorage.getItem('wallpaper_constructor');
  var str=localStorage.getItem('wallpaper');
  var arr=JSON.parse(str);
  if (!arr.includes(item,0)) {arr.push(item);}
  var json = JSON.stringify(arr);
  localStorage.setItem('wallpaper', json);
  getCartData();
});
$('.constractor-navigation span').click(function () {
  var navigation={};
  if (this.className=='constractor-root'){
    navigation.category='empty';
    navigation.subcategory='empty';
  }else if (this.className=='constractor-category'){
    navigation.category=wallpaper.category;
    navigation.subcategory='empty';
  }else if (this.className=='constractor-subcategory'){
    navigation.category=wallpaper.category;
    navigation.subcategory=wallpaper.subcategory;
  }
  var str=JSON.stringify(navigation);
  localStorage.setItem('wallpaper_navigation', str);
  if (this.className!='constractor-image') {
    document.location.href='index.php';
  }
});
$('input[name="texture_radio"]').change(function () {
  var color=$('.wallpaper_constructor-calc').css('background-color');
  var arr=$('input[name="texture_radio"]');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].checked) {$(arr[i]).parent().css({'border-color':color});}
    else {$(arr[i]).parent().css({'border-color':'white'});}
  }
  $('.constructor_wallpaper-texture').css({
    'background-image':'url(img/texture/'+this.value.trim()+')'
  });
  wallpaper.texture=this.value.trim();
  sizeFilter(this.id);
});
$('.wallpaper_texture-block_item i').click(function () {
  $('#popup_'+this.id).css({
    'display':'flex',
  });
});
$('button[name="video_button"]').click(function () {
  $('.wallpaper_constructor-video_block').fadeIn();
});
$('button[name="video_button-close"]').click(function () {
 stopVideo();
 $('.wallpaper_constructor-video_block').fadeOut();
});
$('button[name="wallpaper_constructor-popup_close"]').click(function () {
  stopVideo();
  $('.wallpaper_constructor-popup_wrapper').fadeOut();
});
$('.option_button button').click(function(){
  $('.wallpaper_constructor-sidebar').fadeToggle();
  var button=$('.option_button button');
  if (button[0].style.display=='none') {
    button[0].style.display='block';
    button[1].style.display='none';
  }else{
    button[0].style.display='none';
    button[1].style.display='block';
  }
});

$('button[name="image_save"]').click(function(){
  var str=imageDataGet();
  $('.download_image-link').css({'display':'none'});
  $('.download_image-loader').css({'display':'inline-block'});
  $.post('php/image.php',{data:str}, function(data){
    console.log(data);
    setTimeout(function () {
      $('.download_image-link').css({'display':'inline-block'});
      $('.download_image-loader').css({'display':'none'});
    }, 1000);
  });
});

$('button[name="size_resset"]').click(function () {
  $('input[name="input_size"]').prop('value','');
  $('.range_size').css({'display':'none'});
  $('.constructor_curtain').css({'display':'none'});
  $('.wallpaper_roll-item').css({'display':'none'});
  $('.constructor_wallpaper-size_sensor').css({'display':'none'});
  wallpaper.image=wallpaper.intialImage;
  $('.constructor_wallpaper img').attr('src','img/wallpaper/'+wallpaper.image);
  wallpaper.price=0;
  $('input[name="texture_radio"]').attr('checked','false');
  $('.constructor_wallpaper-texture').css({'background-image':''});
  wallpaper.texture='';
  $('.size_texture').hide();
  $('.size_texture_all').show();
  calculation();
});
$('button[name="user_upload_popup_close"]').click(function(){
  $('.user_upload_popup_wrapper').fadeOut();
});
$('button[name="user_image_upload"]').click(function(){
  $('.user_upload_popup_wrapper').css({'display':'flex'});
});
$('input[name="user_upload_image"]').change(wallPaperImageUpload);
$('button[name="image_mail_send"]').click(function(){
  var email = prompt('Ваш email:');
  if (email=='') {alert('Не указан email!');}
  else {
    var str=imageDataGet();
    $.post('php/image.php',{data:str}, function(data){
      imageMailSend(email);
    });
  }
});

// ========= FUNCTIONS =========

function getCartData () {
  var str=localStorage.getItem('wallpaper');
  favoriteArr=JSON.parse(str);
  $('.wallpaper-cart_counter').html(favoriteArr.length);
}
function calculation () {
  var arr=$('input[name="input_size"]');
  var width=Number(arr[0].value);
  var height=Number(arr[1].value);
  var cost=Math.round((height/100)*(width/100)*wallpaper.price);
  var nodeArr=$('.wallpaper_constructor-calc span');
  nodeArr[0].innerHTML=cost;
  nodeArr[1].innerHTML=Math.ceil(cost*(100-wallpaper.discount)/100);
  wallpaper.amount=cost;
  wallpaper.amountDiscount=Math.ceil(cost*(100-wallpaper.discount)/100);
}
function wallpaperWidth (values) {
  var section=$('.wall-horizontal_section');
  section[0].style.width=(values[0]/10)+'%';
  section[1].style.width=((values[1]-values[0])/10)+'%';
  section[2].style.width=((1000-values[1])/10)+'%';
  calculation();
}
function rollSizeBorder () {
  var rollWidth=0;
  var flag=false;
  var radio=$('input[name="wallpaper_roll"]');
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      rollWidth=radio[i].value;
      wallpaper.rollAbsSize=rollWidth;
      flag=true;
    }
  }
  if(flag){
   var absoluteSize=$('input[name="input_size"]')[0].value;
   var relativeSize=$('.constructor_wallpaper-size_sensor')[0].offsetWidth;
   var roll=$('.wallpaper_roll-item');
   if (Number(absoluteSize)<Number(rollWidth)) {
    $(roll).css({'display':'none',});
  }else {
    $(roll).css({'display':'block',});
  }
  wallpaper.rollSize=rollWidth*relativeSize/absoluteSize;
  $(roll).css({'width':wallpaper.rollSize+'px',});
  priceSet(this); }
}
function wallpaperHeight (values) {
  var section=$('.wall-vertical_section');
  section[0].style.height=((1000-values[1])/10)+'%';
  section[1].style.height=((values[1]-values[0])/10)+'%';
  section[2].style.height=(values[0]/10)+'%';
  calculation();
}
function iputWidthValue(values) {
  var relation=wallpaper.relativeSize[0]/wallpaper.absoluteSize[0];
  var width=(values[1]-values[0])*relation;
  $('input[name="input_size"]')[0].value=Math.ceil(width);
}
function inputHeightValue(values) {
  var relation=wallpaper.relativeSize[1]/wallpaper.absoluteSize[1];
  var width=(values[1]-values[0])*relation;
  $('input[name="input_size"]')[1].value=Math.ceil(width);
}
function stopVideo(){
  var iframe=$('.wallpaper_constructor-video_block iframe');
  for (var i = 0; i < iframe.length; i++) {
   var src=$(iframe[i]).attr('src');
   $(iframe[i]).attr('src',src);
 }
}
function sizeFilter(texture_id){
  $('.size_texture').hide();
  $('.size_texture_all').hide();
  $('.size_'+texture_id).show();
  //$('input[name="input_size"]').prop('value','');
  //$('.range_size').css({'display':'none'});
  //$('.constructor_curtain').css({'display':'none'});
  $('.wallpaper_roll-item').css({'display':'none'});
  //$('.constructor_wallpaper-size_sensor').css({'display':'none'});
  wallpaper.price=0;
  calculation();
  $('input[name="wallpaper_roll"]').prop('checked',false);
}
function priceSet(radio){
  var current_price =
  Number($(radio).parent('label').siblings('input').prop('value'));
  if (current_price!=undefined && !isNaN(current_price)) {
    wallpaper.price=current_price;
    calculation();
  }
}
function wallPaperImageUpload () {
  var image=$('input[name="user_upload_image"]')[0];
  var formData = new FormData();
  formData.append(image.name,image.files[0]);
  var request = new XMLHttpRequest();
  request.open('POST','php/functions.php');
  request.send(formData);
  request.onreadystatechange=function (){
    if (request.readyState==4 && request.status==200){
      console.log(request.responseText);
    } 
    $('.user_upload_popup_wrapper').fadeOut();
    $('.constructor_wallpaper img').attr('src','img/wallpaper/'
      +request.responseText+'?'+new Date().getTime());
    wallpaper.image=request.responseText;
  };    
}
function imageDataGet(){
  var data={};
  var wall=$('.constructor_wall')[0];
  var image=$('.constructor_wallpaper img');
  var mask=$('.constructor_wallpaper-size_sensor')[0];
  if (wallpaper.container==0) {
    image=image[0];
  }else{
    image=image[1];
  }
  data.position=[
  wall.getBoundingClientRect().left+pageYOffset,
  wall.getBoundingClientRect().top+pageYOffset, 
  image.getBoundingClientRect().left+pageYOffset,
  image.getBoundingClientRect().top+pageYOffset, 
  mask.getBoundingClientRect().left+pageYOffset,
  mask.getBoundingClientRect().top+pageYOffset,];
  data.size=[
  wall.offsetWidth,
  wall.offsetHeight,
  image.offsetWidth,
  image.offsetHeight,
  mask.offsetWidth,
  mask.offsetHeight,];
  data.image=wallpaper.image;
  data.rotate=wallpaper.rotate;
  data.miror=wallpaper.miror;
  data.container=wallpaper.container;
  data.rollSize=wallpaper.rollSize;
  data.imageName=wallpaper.imageName;
  data.rollAbsSize=wallpaper.rollAbsSize;
  data.texture=wallpaper.texture;
  data.amount=wallpaper.amount;
  data.amountDiscount=wallpaper.amountDiscount;
  var str=JSON.stringify(data);
  return str;
}
function imageMailSend(email){
  $.post('php_mail/index.php',{data:email}, function(data){
    console.log(data);
    alert('Эскиз отправлен на почту '+email);
  });
}

// ========= JQUERY UI SLIDER =========
$( function() {
  $( "#range_horisontal" ).slider({
    orientation: "horizontal",
    range: true,
    min:0,
    max:1000,
    values: [ 0, 1000 ],
    slide: function( event, ui ) {
      var values = $( "#range_horisontal" ).slider( "values" );
      wallpaperWidth(values);
      iputWidthValue(values);
    },
    create: function( event, ui ) {
      var values = $( "#range_horisontal" ).slider( "values" );
      wallpaperWidth(values);
    }
  });
} );
$( function () {
  $( "#range_vertical" ).slider({
    orientation: "vertical",
    range: true,
    min:0,
    max:1000,
    values: [ 0, 1000 ],
    slide: function( event, ui ) {
      var values = $( "#range_vertical" ).slider( "values" );
      wallpaperHeight(values);
      inputHeightValue(values);
    },
    create: function( event, ui ) {
      var values = $( "#range_vertical" ).slider( "values" );
      wallpaperHeight(values);
    }
  });
} );


// ========= MASK INPUT =========

//$("input[name='input_size']").mask("?999");


// ========= SLICK UI SLIDER =========


$(document).ready(function(){
  $('.wallpaper_interior-tape').slick({ 
      //dots: true, 
      slidesToShow: 5, 
      slidesToScroll: 1, 
      responsive:[
      {
        breakpoint:750,
        settings:{
          slidesToShow:4,
        }
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow:3,
        }
      },
      {
        breakpoint:450,
        settings:{
          slidesToShow:2,
        }
      },
      ],
    });

  $('.wallpaper_texture-tape').slick({ 
      //dots: true, 
      slidesToShow: 8, 
      slidesToScroll: 1, 
      responsive:[
      {
        breakpoint:750,
        settings:{
          slidesToShow:6,
        }
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow:4,
        }
      },
      {
        breakpoint:450,
        settings:{
          slidesToShow:3,
        }
      },
      ],
    });

});

// ========= TABS =========

$( function() {
  $( "#tabs" ).tabs();
} );