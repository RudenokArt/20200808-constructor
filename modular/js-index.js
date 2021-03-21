// ===== GLOBALS =====
var navigation={};

// ===== LISTENERS =====
$('.modular-sidebar_category').click(categoryExpander);
$('.modular-sidebar_subcategory').click(subcategorySet);
$('.modular-navigation span').click(navigationClick);
$('.category-select').change(categorySelect);
$('.subcategory-select').change(subcategorySelect);
filterResset();

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
}
function subcategorySelect () {
  navigation.subcategory=this.value;
  navigationSet();
  categoryRollup();
}
function filterResset () {
  $('.category-select').prop('value','all'); 
  $('.subcategory-select').prop('value','all');
  subcategorySelectData();
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