// =================ACTIONS==================
$('.sidebar-subcategory_list').slideUp();
$('.sidebar-category').click(categoryExpand);
$('.wallpaper-galery_item-icon').click(cartAnime);

// =================FUNCTIONS=================
function categoryExpand () {
  var category=this;
  var subcategory=$(category).next();
  subcategory.slideToggle();
}
function cartAnime () {
  var anime=$('.wallpaper-cart_image');
  setTimeout(()=>{anime.prop('className','wallpaper-cart_image-active');}, 100);
  setTimeout(()=>{anime.prop('className','wallpaper-cart_image');}, 200);
  
  
}