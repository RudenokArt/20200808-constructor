$('body').delegate('input[type="checkbox"]', 'change', checkboxLabel);
$('body').delegate('.edit-button', 'click', editItem);
$('body').delegate('.delete-button', 'click', deleteItem);
$('.button-back').click(backPage);
$('.popup-wrapper').slideUp();
$('.button-order').click(()=>{$('.popup-wrapper').slideDown();});
$('.close-button').click(()=>{$('.popup-wrapper').slideUp();});
$('.order-button').click(checkForm);