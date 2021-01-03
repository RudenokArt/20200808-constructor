$('body').delegate('input[type="checkbox"]', 'change', checkboxLabel);
$('body').delegate('.edit-button', 'click', editItem);
$('body').delegate('.delete-button', 'click', deleteItem);
$('.button-back').click(backPage);
setTimeout(()=>{$('.popup-wrapper').slideUp();}, 100);
setTimeout(()=>{$('.preloader-wrapper').slideUp();}, 101);
$('.button-order').click(()=>{$('.popup-wrapper').slideDown();});
$('.close-button').click(()=>{$('.popup-wrapper').slideUp();});
$('.order-button').click(checkForm);