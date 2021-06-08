$('.button-back').click(()=>{document.location.href='favorite.html';});
$('.button-mail').click(mailSend);
$('.button-order').click(orderSend);
setTimeout(()=>{$('.preloader-wrapper').slideUp();}, 50);
$('.main-image').html('<img src="order-image.jpg?'+new Date().getTime()+' " alt="">');

function mailSend () {
	preloaderFunction();
	$.post('mail/ajax-mail.php', {data:''}, (data)=>{
		console.log(data);
		$('.preloader-wrapper').slideUp();
	});
}
function orderSend () {
  $.post('mail/ajax-mail.php', {data:''}, (data)=>{
    console.log(data);});
	preloaderFunction();
	$.post('mail/ajax-order.php', {data:''}, (data)=>{
		console.log(data);
		$('.preloader-wrapper').slideUp();
    document.location.href='index.php';
	});
}
function preloaderFunction () {
  $('.preloader-wrapper').show();
}