$('.enter-button').click(sendData);


function sendData () {
  $.post('session.php', $('#login-form').serialize(), (data)=>console.log(data));
}
