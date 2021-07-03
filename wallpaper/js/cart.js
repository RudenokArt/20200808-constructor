checkboxChecked();


$('input[name="order_add"]').change(function () {
  checkboxChecked();
});



function checkboxChecked () {
  var arr = $('input[name="order_add"]');
  for (var i = arr.length - 1; i >= 0; i--) {
    if(arr[i].checked){
      $(arr[i]).siblings('span').children('i').fadeIn();
    } else {
      $(arr[i]).siblings('span').children('i').fadeOut();
    }
  }
  
}