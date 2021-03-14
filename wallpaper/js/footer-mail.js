// ===== ACTIONS =====
$('.header-menu button').click(()=>{
  $('.header-bottom').slideUp();
})
$('.header-menu_button button').click(()=>{
  $('.header-bottom').slideDown();
})
$('.feedback-form button').click((e)=>{e.preventDefault()})
$('.feedback-form button').click(feedBackFormCheck);


// ===== FUNCTIONS =====
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
  $.post('../modular/mail/feedback.php', $('.feedback-form').serialize(), feedBackFormAfer);
}
function feedBackFormAfer (data) {
  $('.preloader-wrapper')[0].style.display='none';
  feedBackFormMessage(data);
}
function feedBackFormMessage (data) {
  alert(data);
}