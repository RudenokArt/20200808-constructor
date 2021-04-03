// ===== GLOBALS =====

var navigation={
  category:'empty',
  subcategory:'empty',
  navSet(){
    var arr=$('.wallpaper-navigation').children();
    if (this.category!='empty') {
      $(arr[1]).css({'display':'inline-block'});
      $(arr[2]).html(this.category);
    }
    else{
      $(arr[1]).css({'display':'none'});
      $(arr[2]).html('');
    }
    if (this.subcategory!='empty') {
      $(arr[3]).css({'display':'inline-block'});
      $(arr[4]).html(this.subcategory);
    }
    else{
      $(arr[3]).css({'display':'none'});
      $(arr[4]).html('');
    }
    pagination.page=1;
    filterGalery();
  }
};
var pagination={
  items:4,
  page:1,
};

// ===== ACTIONS =====
filterReset();
navigation.navSet();
checkboxSetData();
itemCart();
subCategorySelectGetData();


// ===== LISTENERS =====

$('.sidebar-category').click(ctegoryExpand);
$('.sidebar-subcategory').click(subcategorySet);
$('.category-select').change(categorySelect);
$('.subcategory-select').change(subCategorySelect);
$('.wallpaper-navigation span').click(navigationClick);
$('.wallpaper-galery_item-wrapper').click(consructorTrznzit);
$('.button-search').click(imageSearch);
$('.wallpaper-galery_item-cart').click((e)=>{e.stopPropagation()});
$('.wallpaper-galery_item-check').change(itemCart);
$('.wallpaper-galery_item-check').change(cartAnime);
$('.number-page').click(function () {
  pagination.page=this.innerHTML.trim();
  pageSet();
});
$('.first-page').click(function () {
  pagination.page=1;
  pageSet();
});
$('.back-page').click(function () {
  pagination.page=pagination.page-1;
  if (pagination.page<1) {pagination.page=1;}
  pageSet();
});
$('.next-page').click(function () {
  pagination.page=pagination.page+1;
  if (pagination.page>pagination.pages) {
    pagination.page=pagination.pages;
  }
  pageSet();
});
$('.last-page').click(function () {
  pagination.page=pagination.pages;
  pageSet();
});


// ===== FUNCTIONS =====

function ctegoryExpand () {
  var state=$(this).next()[0].style.display;
  $('.sidebar-subcategory_list').slideUp();
  if (state=='block') {
    $(this).next().slideUp();
  }else {
    $(this).next().slideDown();
  }
  navigation.category=
  $(this).children('.category-name').html().trim();
  navigation.subcategory='empty';
  navigation.navSet();
  filterReset();
}
function subcategorySet () {
  navigation.subcategory=
  $(this).children('.subcategory-name').html().trim();
  navigation.navSet();
  filterReset();
}
function filterReset () {
  $('.category-select').prop('value','all');
  $('.subcategory-select').prop('value','all');
}
function categorySelect () {
  navigation.category=this.value.trim();
  navigation.subcategory='empty';
  navigation.navSet();
  subCategorySelectGetData();
  $('.sidebar-subcategory_list').slideUp();
}
function subCategorySelectGetData () {
  var sql='SELECT * FROM `wallpaper_subcategory` '+
  'WHERE `category`="'+navigation.category+'"';
  $.post('php/select.php',{data:sql}, subCategorySelectSetData);
}
function subCategorySelectSetData (data) {
  var arr=JSON.parse(data);
  var options=$('.subcategory-select_option');
  for (var i = 0; i < arr.length; i++) {
    options[i].innerHTML=arr[i]['subcategory'];
  }
  for (var i = 0; i < options.length; i++) {
   if ( options[i].innerHTML=='empty')
    {options[i].style.display='none';}
  else{options[i].style.display='block';}
}
}
function subCategorySelect () {
  navigation.subcategory=this.value.trim();
  navigation.navSet();
  $('.sidebar-subcategory_list').slideUp();
}
function navigationClick () {
  if (this.className=='navigation-root'){
    $('.sidebar-subcategory_list').slideUp();
    navigation.category='empty';
    navigation.subcategory='empty';
  }
  if (this.className=='navigation-category') {
    navigation.subcategory='empty';
  }
  navigation.navSet();
  filterReset();
}
function consructorTrznzit () {
  console.log(this.id);
}
function galeryGetData (arr) {
  $(arr).css({'display':'block'});
  subArr=[];
  for (var i = 0; i < arr.length; i++) {
    subArr[i]=arr[i].id.trim().split('|');
  }
  return subArr;
}
function filterGalery () {
  var arr=$('.wallpaper-galery_item-wrapper');
  var subArr=galeryGetData(arr);
  if (navigation.category!='empty') {
    for (var n = 0; n < arr.length; n++) {
      if (subArr[n][3]!=navigation.category) {
        arr[n].style.display='none';
      }
    }
  }
  if (navigation.subcategory!='empty') {
    for (var k = 0; k < arr.length; k++) {
      if (subArr[k][4]!=navigation.subcategory) {
        arr[k].style.display='none';
      }
    }
  }
  $.post('../admin/php/pagination.php',{data:'data'}, function (data) {
    pagination.items=data;
    var baseArr=$('.wallpaper-galery_item-wrapper');
    pagination.arr=[];
    for (var i = 0; i < baseArr.length; i++) {
      if (baseArr[i].style.display=='block') {
        pagination.arr.push(baseArr[i]);
      }
    }
    pageSet();
  });
}
function imageSearch () {
 var arr=$('.wallpaper-galery_item-wrapper');
 var subArr=galeryGetData(arr);
 var str=$('#searchInput').prop('value').trim();
 for (var i = 0; i < arr.length; i++) {
   if(subArr[i][2].toLowerCase().includes(str.toLowerCase())!=true){
    arr[i].style.display='none';
  }
}
}
function itemCart () {
 var icons=$('.wallpaper-galery_item-cart');
 var checkbox=$('.wallpaper-galery_item-check');
 for (var i = 0; i < checkbox.length; i++) {
  var icon=$(icons[i]).children('div')
  if (checkbox[i].checked) {
    $(icon[0]).slideUp();
    $(icon[1]).slideDown();
  }else{
   $(icon[0]).slideDown();
   $(icon[1]).slideUp(); }
 }
 cartCounter(checkbox);
}
function cartCounter (checkbox) {
  var counter=0;
  var arr=[];
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      counter++;
      arr.push(checkbox[i].value);
    }
  }
  $('.wallpaper-cart_counter').html(counter);
  var json=JSON.stringify(arr);
  localStorage.setItem('wallpaper', json);
}
function cartAnime () {
  var node=$('.wallpaper-cart_image');
  if (this.checked) {
    $(node).prop('className','wallpaper-cart_image-active');
    setTimeout(()=>{$(node).prop('className','wallpaper-cart_image')}, 100);
  }
}
function checkboxSetData () {
  var checkbox=$('.wallpaper-galery_item-check');
  var str=localStorage.getItem('wallpaper');
  var arr=JSON.parse(str);
  if (arr!=null) {
    for (var i = 0; i < checkbox.length; i++) {
      for (var n = 0; n < arr.length; n++) {
        if (checkbox[i].value==arr[n]) {
          checkbox[i].checked=true;
        }
      }
    }
  }
}
function pageSet () {
  $(pagination.arr).css({'display':'none'});
  if (pagination.arr.length>0) {
    pagination.pages=Math.ceil(pagination.arr.length/pagination.items);
    var lastItem=pagination.page*pagination.items;
    var firstItem=lastItem-pagination.items;
    if (lastItem>pagination.arr.length) {lastItem=pagination.arr.length;}
    for (var n = firstItem; n < lastItem; n++) {
      pagination.arr[n].style.display='block';
    }
  }
  pageNavigation();
}
function pageNavigation () {
  var numbers=$('.number-page');
  for (var i = 0; i < numbers.length; i++) {
    number=pagination.page-2+i;
    numbers[i].innerHTML=number;
    if (number<1||number>pagination.pages) {
      numbers[i].style.display='none';
    }else {
      numbers[i].style.display='block';
    }
    if (pagination.page==numbers[i].innerHTML.trim()){
      numbers[i].style.color='red';
    }
  }
}
