var wallpaper={};


// ========= ACTIONS =========
$('input[name="input_size"]').prop('value','0');
$('input[name="image_container"]')[0].checked=true;
$(function imageGetData () {
  var data=localStorage.getItem('wallpaper_constructor');
  var arr=[];
  if (data!=''&&data!=null&&data!=undefined) {
    arr=data.split('|');
  }
  wallpaper.image=arr[1];
  wallpaper.discount=Number(arr[6]);
  $('.constructor-wallpaper img')[0].setAttribute('src','img/wallpaper/'+wallpaper.image);
})


// ========= LISTENERS =========

$('input[name="input_size"]').change(function () {
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
});
$('input[name="image_container"]').change(function () {
  var radio=$('input[name="image_container"]');
  var container=$('.constructor-wallpaper img');
  if (radio[0].checked) {
    container[0].setAttribute('src','img/wallpaper/'+wallpaper.image);
    container[1].setAttribute('src','');
  }else{
    container[1].setAttribute('src','img/wallpaper/'+wallpaper.image);
    container[0].setAttribute('src','');
  }
})

// ========= FUNCTIONS =========

function wallpaperWidth (values) {
  var section=$('.wall-horizontal_section');
  section[0].style.width=(values[0]/10)+'%';
  section[1].style.width=((values[1]-values[0])/10)+'%';
  section[2].style.width=((1000-values[1])/10)+'%';
}
function wallpaperHeight (values) {
  var section=$('.wall-vertical_section');
  section[0].style.height=((1000-values[1])/10)+'%';
  section[1].style.height=((values[1]-values[0])/10)+'%';
  section[2].style.height=(values[0]/10)+'%';
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

// ========= UI SLIDER =========

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

$("input[name='input_size']").mask("?999");