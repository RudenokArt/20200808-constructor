// =================GLOBALS==================
var categories={};
var navigation={
  category:'empty',
  subcategory:'empty',
  navigationSet(){
    var nodeSpan=$('.wallpaper-navigation span');
    var nodeI=$('.wallpaper-navigation i');
    nodeSpan[1].innerHTML=this.category;
    nodeSpan[2].innerHTML=this.subcategory;
    if (this.category=='empty') {
      nodeSpan[1].style.display='none';
      nodeI[1].style.display='none';
    }else {
      nodeSpan[1].style.display='inline-block';
      nodeI[1].style.display='inline-block';
    }
    if (this.subcategory=='empty') {
      nodeSpan[2].style.display='none';
      nodeI[2].style.display='none';
    }else {
      nodeSpan[2].style.display='inline-block';
      nodeI[2].style.display='inline-block';
    }
    wallpaperList();
  }
};
var wallpaper={};
var page={
  currentPage:1,
}
// =================ACTIONS==================
$('.subcategory-select')[0].disabled=true;
$('.sidebar-subcategory_list').slideUp();
$('.sidebar-category').click(categoryExpand);
$('.wallpaper-galery_item-check').change(cartItemChange);
$('.wallpaper-galery_item-check').click((e)=>{e.stopPropagation();});
$.post('php/select.php',{data:'SELECT * FROM `wallpaper_category`'},ajaxCategory);
$('.category-select').change(subCategoriesFilterList);
$('.sidebar-subcategory').click(subcategoryClick);
$('.subcategory-select').change(subcategorySelect);
$('.wallpaper-navigation span').click(navigationClick); // frontend end
$.post('php/select.php',{data:'SELECT * FROM `wallpaper_wallpaper`'},ajaxWallpaper);
$('.wallpaper-pagination div').click(leafPage);
$('.button-search').click(wallpaperSearch);
$('.wallpaper-galery_item').click(constructorTransition);
$('.wallpaper-cart').click(cartTransition);

// =================FUNCTIONS=================
function categoryExpand () {
  var category=this;
  var subcategory=$(category).next();
  subcategory.slideToggle();
  filterResset();
  navigation.category=$(category).children('.category-name').html();
  navigation.subcategory='empty';
  navigation.navigationSet();
}
function subcategoryClick () {
  var subcategory=$(this).children('.subcategory-name');
  navigation.subcategory=subcategory[0].innerHTML;
  navigation.navigationSet();
  filterResset();
}
function cartItemChange() {
  var checkbox=this;
  cartItemIcon(checkbox,true);
}
function cartItemIcon (checkbox,anime) {
 var icon=$(checkbox).siblings('div');
 if (checkbox.checked) {
  cartItemStatus(checkbox.value,true);
  if (anime) {cartAnime();}
  icon[0].style.display='none';
  icon[1].style.display='block';}
  else{
    cartItemStatus(checkbox.value,false);
    icon[0].style.display='block';
    icon[1].style.display='none';
  }
  cartCounter();
}
function cartCounter () {
  var counter=0;
  for (var i = 0; i < wallpaper.base.length; i++) {
    if (wallpaper.base[i].cart){counter=counter+1;}  
  }
  $('.wallpaper-cart_counter').html(counter);
}
function cartItemStatus (article,boolean) {
  for (var i = 0; i < wallpaper.base.length; i++) {
    if (wallpaper.base[i].article==article) {
      wallpaper.base[i].cart=boolean;
    }
  }
}
function cartAnime () {
  var anime=$('.wallpaper-cart_image');
  setTimeout(()=>{anime.prop('className','wallpaper-cart_image-active');}, 100);
  setTimeout(()=>{anime.prop('className','wallpaper-cart_image');}, 200);
}
function ajaxCategory (data) {
  var arr=JSON.parse(data);
  for (var i = 0; i < arr.length; i++) {
    categories[arr[i].category]=[];
  }
  $.post('php/select.php',{data:'SELECT * FROM `wallpaper_subcategory`'},ajaxSubcategory);
}
function ajaxSubcategory (data) {
 var arr=JSON.parse(data);
 for (var i = 0; i < arr.length; i++) {
   categories[arr[i].category].push(arr[i].subcategory);
 }
 categoriesList(); 
}
function categoriesList(){
  var categoryList=$('.category-name');
  var categoryShevron=$('.category-shevron');
  var categoryQuantity=$('.category-quantity');
  var sublist=$('.sidebar-subcategory_list');
  var i=0;
  for(var key in categories){
    categoryQuantity[i].innerHTML=categoryCounter(key);
    categoryList[i].innerHTML=key;
    if (categories[key].length<1) {
      categoryShevron[i].style.display='none';
    }else{
      var arrName=$(sublist[i]).children('div').children('.subcategory-name');
      var arrQuantity=$(sublist[i]).children('div').children('.subcategory-quantity');
      for (var n = 0; n < categories[key].length; n++) {
        arrName[n].innerHTML=categories[key][n];
        arrQuantity[n].innerHTML=subcategoryCounter(categories[key][n]);
      }
    }
    i++;
  }
  categoriesListCut(categoryList);
  var subCategoryList=$('.subcategory-name');
  categoriesListCut(subCategoryList);
  categoriesFilterList();
}
function categoryCounter (category) {
  var counter=0;
  for (var i = 0; i < wallpaper.base.length; i++) {
    if(wallpaper.base[i].category==category){
      counter=counter+1;
    }
  }
  return counter;
}
function subcategoryCounter (subcategory) {
  var counter=0;
  for (var i = 0; i < wallpaper.base.length; i++) {
    if(wallpaper.base[i].subcategory==subcategory){
      counter=counter+1;
    }
  }
  return counter; 
}
function categoriesListCut(list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].innerHTML=='empty') {
      $(list[i]).parent().css({'display':'none'});
    }
  }
}
function categoriesFilterList () {
  var options=$('.category-select_option');
  var select='';
  var i=0;
  for(var key in categories){
    options[i].innerHTML=key;
    i++;
  }
  categoriesFilterListCut(options);
}
function categoriesFilterListCut (options) {
  for (var i = 0; i < options.length; i++) {
   if (options[i].innerHTML=='empty'){
    $(options[i]).css({'display':'none'});  }
  } 
}
function subCategoriesFilterList () {
  var select=$('.subcategory-select');
  select[0].disabled=false;
  select[0].value='all';
  var options=$('.subcategory-select_option');
  for(var key in categories){
    if (this.value==key){
     for (var i = 0; i < categories[key].length; i++) {
       options[i].innerHTML=categories[key][i];
     }
   }
 }
 if (this.value=='all') {
  select[0].disabled=true;
  navigation.category='empty';
  navigation.subcategory='empty';}
  else{
    navigation.category=this.value;
    navigation.subcategory='empty';
  }
  navigation.navigationSet();
  categoriesFilterListCut(options);
}
function subcategorySelect () {
  navigation.subcategory=this.value;
  if (this.value=='all') {navigation.subcategory='empty';}
  navigation.navigationSet();
}
function filterResset () {
  var subSelect=$('.subcategory-select');
  var select=$('.category-select');
  select[0].value='all';
  subSelect[0].value='all';
  $('.subcategory-select')[0].disabled=true;
}
function navigationClick () {
  filterResset();
  if (this.className=='navigation-root') {
    navigation.category='empty';
    navigation.subcategory='empty';
  }
  if (this.className=='navigation-category') {
    navigation.subcategory='empty';
  }
  navigation.navigationSet();
}
function ajaxWallpaper (data) {
  wallpaper.base=JSON.parse(data);
  wallpaperList();
}
function wallpaperList() {
  var arr=[];
  if (navigation.category=='empty') {
    arr=wallpaper.base;
  }else{
    for (var i = 0; i < wallpaper.base.length; i++) {
      if (wallpaper.base[i].category==navigation.category) {
        arr.push(wallpaper.base[i]);
      }
    }
  }
  wallpaper.derivative=[];
  if (navigation.subcategory=='empty') {
    wallpaper.derivative=arr;
  }else {
    for (var n = 0; n < arr.length; n++) {
      if (arr[n].subcategory==navigation.subcategory) {
        wallpaper.derivative.push(arr[n]);
      }
    }
  }
  wallpaperSetData();
}
function wallpaperSetData () {
  var imageCart=$('.wallpaper-galery_item-check');
  var imageName=$('.wallpaper-galery_image-name');
  var imageCategory=$('.wallpaper-category');
  var imageSubCategory=$('.wallpaper-subcategory');
  var imageArticle=$('.wallpaper-article');
  var imageDiscount=$('.wallpaper-galery_item-discount');
  for (var i = 0; i < wallpaper.derivative.length; i++) {
    imageCart[i].value=wallpaper.derivative[i].article;
    imageName[i].innerHTML= wallpaper.derivative[i].wallpaper;
    imageCategory[i].innerHTML= wallpaper.derivative[i].category;
    imageSubCategory[i].innerHTML= wallpaper.derivative[i].subcategory;
    imageArticle[i].innerHTML= wallpaper.derivative[i].article;
    imageDiscount[i].innerHTML= wallpaper.derivative[i].discoun;
    if (wallpaper.derivative[i].discoun<1) {
      imageDiscount[i].style.display='none';
    }
    if (wallpaper.derivative[i].cart) {
      imageCart[i].checked=true;
    }else{imageCart[i].checked=false;}
    cartItemIcon(imageCart[i],false);
  }
  pagination();
}
function pagination () {
  page.quantity=6; 
  page.pageQuantity=Math.ceil(wallpaper.derivative.length/page.quantity);
  pageNavigation();
}
function pageNavigation () {
  var pageArr=$('.number-page');
  pageArr.css({'color':'black','display':'block'});
  var start=page.currentPage-2;
  if (page.currentPage<4) {start=1;}
  if (page.currentPage>=page.pageQuantity-4){start=page.pageQuantity-4;}
  for (var i = 0; i < pageArr.length; i++) {
   pageArr[i].innerHTML=start+i;
   if (start+i==page.currentPage){pageArr[i].style.color='red';}
   if (start+i<=0||start+i>page.pageQuantity) {
    pageArr[i].style.display='none';
  }
}
hideExtraPages()
}
function leafPage () {
  if (this.className=='next-page'&&page.currentPage<page.pageQuantity){
    page.currentPage=page.currentPage+1;
  }
  if (this.className=='back-page'&&page.currentPage>1){
    page.currentPage=page.currentPage-1;
  }
  if (this.className=='first-page'){page.currentPage=1;}
  if (this.className=='last-page'){page.currentPage=page.pageQuantity;}
  if (this.className=='number-page') {
    page.currentPage=this.innerHTML;
  }
  pageNavigation();
  console.log(page.currentPage);
}
function hideExtraPages () {
  var firstPageItem=page.quantity*(page.currentPage-1);
  var lastPageItem=firstPageItem+page.quantity-1;
  var items=$('.wallpaper-galery_item-wrapper');
  for (var i = 0; i < items.length; i++) {
    if (i>=firstPageItem&&i<=lastPageItem) {
      items[i].style.display='block';
    }else{items[i].style.display='none';}
  }

  // console.log(firstPageItem);
  // console.log(lastPageItem);
}
function wallpaperSearch () {
  wallpaper.derivative=[];
  var imageName=$('#searchInput');
  for (var i = 0; i < wallpaper.base.length; i++) {
    if (wallpaper.base[i].wallpaper.includes(imageName[0].value)) {
      wallpaper.derivative.push(wallpaper.base[i]);
    }
  }
  wallpaperSetData();
}
function constructorTransition () {
  alert('Здесь будет переход в конструктор');
}
function cartTransition (argument) {
  alert('Здесь будет переход в корзину');
}