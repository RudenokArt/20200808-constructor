$('.button-back').click(()=>{document.location.href='favorite.html';});
$('.button-mail').click(mailSend);
$('.button-order').click(orderSend);
setTimeout(()=>{$('.preloader-wrapper').slideUp();}, 50);
$('.main-image').html('<img src="order-image.jpg?'+new Date().getTime()+'" alt="">');

function mailSend () {
	preloaderFunction();
	$.post('mail/ajax-mail.php', {data:''}, (data)=>{
		alert(data);
		$('.preloader-wrapper').slideUp();
	});
}
function orderSend () {
	preloaderFunction();
	$.post('mail/ajax-order.php', {data:''}, (data)=>{
		alert(data);
		$('.preloader-wrapper').slideUp();
	});
}
function preloaderFunction () {
	$('.preloader-wrapper').show();
	let angle=0;
	setInterval(preloaderRotation, 50);
	function preloaderRotation () { 
		$('.preloader').css('transform','rotate('+angle+'deg)');
		angle=angle+10;
	}
}