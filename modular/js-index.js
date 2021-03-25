// ===== GLOBALS =====
var navigation={
  category:'empty',
  subcategory:'empty',
};
var modular={};
var page={};


// ===== LISTENERS & ACTIONS =====
$('.modular-sidebar_category').click(categoryExpander);
$('.modular-sidebar_subcategory').click(subcategorySet);
$('.modular-navigation span').click(navigationClick);
$('.category-select').change(categorySelect);
$('.subcategory-select').change(subcategorySelect);
filterResset();
$('.modulat-galery_item-cart input').click((e)=>e.stopPropagation());
$('.modulat-galery_item-cart input').change(cartItemCheck);
$('.modulat-galery_item-cart input').prop('checked',false);
setCheckbokses();
cartCounter();
$('.modular-galery_item-wrapper').click(constructorTransfer);
$('.button-search').click(searchImage);
$('.number-page').click(setPageNumber);
$('.first-page').click(()=>{page.number=1;currentPage();});
$('.last-page').click(()=>{
  page.number=page.pages;
  currentPage();
});
$('.back-page').click(()=>{
  page.number=page.number-1;
  if (page.number<1) {page.number=1;}
  currentPage();
});
$('.next-page').click(()=>{
  page.number=page.number+1;
  if (page.number>page.pages) {page.number=page.pages;}
});


// ===== FUNCTION =====
function categoryExpander () {
  var list=$(this).next();
  var visible=list[0].style.display;
  categoryRollup ();
  if (visible!='block'){$(list).slideToggle();}
  navigation.category=this.children[1].innerHTML;
  navigation.subcategory='empty';
  navigationSet();
  filterResset();
}
function categoryRollup () {
  var list=$('.modular-sidebar_category-list');
  $(list).slideUp();
}
function categorySelect () {
  navigation.category=this.value;
  navigation.subcategory='empty';
  navigationSet();
  categoryRollup();
  subcategorySelectData();
  filterGalery();
}
function filterGalery () {
  $('.modular-galery_item-wrapper').css({'display':'block'});
  var arr=$('.modular-galery_item-wrapper');
  for (var i = 0; i < arr.length; i++) {
    var subArr=(arr[i].id).split('|');
    if (navigation.category!='empty'&&
      navigation.category!=subArr[1]){
      arr[i].style.display='none';
  }
  if (navigation.subcategory!='empty'&&
    navigation.subcategory!=subArr[2]){
    arr[i].style.display='none';}}
  $.post('php-pagination-get.php',{data:''}, pageQuantity);
}
function subcategorySelect () {
  navigation.subcategory=this.value;
  navigationSet();
  categoryRollup();
  filterGalery();
}
function filterResset () {
  $('.category-select').prop('value','all'); 
  $('.subcategory-select').prop('value','all');
  subcategorySelectData();
  filterGalery();
}
function subcategorySelectData () {
  $('.subcategory-select').prop('value','all');
  var sql=
  'SELECT * FROM `constructor_subcategory` WHERE category="'+
  navigation.category+'"';
  $.post('php-index-ajax-select.php',{data:sql}, subcategorySelectSet);
}
function subcategorySelectSet (data) {
  var option=$('.subcategory-select_option');
  for (var i = 0; i < option.length; i++) {
    option[i].innerHTML='empty';
  }
  var subcategory=JSON.parse(data);
  for (var i = 0; i < subcategory.length; i++) {
    option[i].innerHTML=subcategory[i].subcategory;
  }
  subcategorySelectCat(option);
}
function subcategorySelectCat(option){
  for (var i = 0; i < option.length; i++) {
    if (option[i].innerHTML=='empty'){
      option[i].style.display='none';
    }else {
      option[i].style.display='block';
    }
  }
}
function subcategorySet () {
  navigation.subcategory=this.children[1].innerHTML;
  navigationSet();
  filterResset();
}
function navigationClick () {
  var nodeClass=$(this).parent().prop('className');
  if(nodeClass=='modular-navigation_root'){
    navigation.category='empty';
    navigation.subcategory='empty';
    categoryRollup();
  }
  if(nodeClass=='modular-navigation_category'){
    navigation.subcategory='empty';
  }
  navigationSet();
  filterResset();
}
function navigationSet () {
  var node=$('.modular-navigation div').children('span');
  node[1].innerHTML=navigation.category;
  node[2].innerHTML=navigation.subcategory;
  for (var i = 0; i < node.length; i++) {
    if (node[i].innerHTML=='empty') {
      $(node[i]).parent().css({'display':'none'});
    }else {
      $(node[i]).parent().css({'display':'block'});
    }
  }
}
function cartItemCheck () {
  var icons=$(this).siblings();
  if(this.checked){
    $(icons[0]).fadeOut();
    $(icons[1]).fadeIn();
    favoritAdd(this.value);
    busketAnime();
  }else{
    $(icons[0]).fadeIn();
    $(icons[1]).fadeOut();
    favoriteRemove(this.value);
  }
  cartCounter();
}
function busketAnime () {
  node=$('.modular-cart_image');
  setTimeout(()=>{node.prop('className','modular-cart_image-show');},100);
  setTimeout(()=>{node.prop('className','modular-cart_image');},200);
}
function favoriteRemove (imageValue) {
  var arr=imageValue.split('|');
  localStorage.removeItem(arr[0]);
}
function favoritAdd (imageValue) {
  var arr=imageValue.split('|');
  localStorage.setItem(arr[0],
    [0,50,150,500,500,'',0,'','','','',arr[2],0,1]);
}
function cartCounter () {
  var arr=Object.keys(localStorage);
  var counter=0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]!='editItem') {
      counter++;
    }
  }
  $('.modular-cart_counter').html(counter);
}
function setCheckbokses () {
  var imageArr=Object.keys(localStorage);
  var checkboxArr=$('.modulat-galery_item-cart input');
  for (var i = 0; i < checkboxArr.length; i++) {
   for (var n=0; n<imageArr.length; n++) {
     if(checkboxArr[i].value.split('|')[0]==imageArr[n]){
      checkboxArr[i].checked=true;
      var icons=$(checkboxArr[i]).siblings();
      $(icons[0]).fadeOut();
      $(icons[1]).fadeIn();
    }
  }
}}
function constructorTransfer () {
  var arr=this.id.split('|');
  document.cookie='imageName='+arr[0];
  document.cookie='discount='+arr[4];
  document.location.href='constructor.html';
  console.log(document.cookie);
  localStorage.removeItem('editItem');
}
function searchImage () {
  var search=$('#searchInput').prop('value');
  $('.modular-galery_item-wrapper').css({'display':'block'});
  var arr=$('.modular-galery_item-wrapper');
  for (var i = 0; i < arr.length; i++) {
    var subArr=(arr[i].id).split('|');
    if (subArr[3].toLowerCase().includes(search.toLowerCase())) {
      arr[i].style.display='block';
    }else {
      arr[i].style.display='none';
    }
  }
}
function pageQuantity (data) {
  page.number=1;
  page.items=Number(data);
  var arr=$('.modular-galery_item-wrapper');
  page.baseArr=[];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].style.display=='block') {
      page.baseArr.push(arr[i]);
    }
  }
  currentPage();
}
function currentPage () {
  page.pages=Math.ceil(page.baseArr.length/page.items);
  lastItem=page.items*page.number;
  firstItem=lastItem-page.items;
  for (var i = 0; i < page.baseArr.length; i++) {
    if (i>=firstItem&&i<lastItem) {
      page.baseArr[i].style.display='block';
    }else{
      page.baseArr[i].style.display='none';
    }
  }
  pageNumeration();
}
function pageNumeration () {
  var arr=$('.number-page');
  $(arr).css({'display':'block','color':'black'});
  for (var i = 0; i < arr.length; i++) {
    var pageNumber=page.number-2+i;
    $(arr[i]).html(pageNumber);
    if (pageNumber<=0||pageNumber>page.pages) {arr[i].style.display='none';}
    if (pageNumber==page.number) {arr[i].style.color='red';}
  }
}
function setPageNumber () {
  page.number=Number($(this).html());
  currentPage();
}



// ===== FEEDBACK =====

$('.header-menu button').click(()=>{
  $('.header-bottom').slideUp();
})
$('.header-menu_button button').click(()=>{
  $('.header-bottom').slideDown();
})
$('.feedback-form button').click((e)=>{e.preventDefault()})
$('.feedback-form button').click(feedBackFormCheck);

function feedBackFormCheck () {
  var feedbackArr = $('.feedback-form input, .feedback-form textarea');
  var check=true;
  for (var i = 0; i < feedbackArr.length; i++) {
    if (feedbackArr[i].value=='') {check=false;}
  }
  if (check){
    feedBackFormSend(feedbackArr);
  }else{
    alert('Заполните все поля формы обратной связи!');
  }
}
function feedBackFormSend (feedbackArr) {
  $('.preloader-wrapper')[0].style.display='flex';
  $.post('mail/feedback.php', $('.feedback-form').serialize(), feedBackFormAfer);
}
function feedBackFormAfer (data) {
  $('.preloader-wrapper')[0].style.display='none';
  feedBackFormMessage(data);
}
function feedBackFormMessage (data) {
  alert(data);
}