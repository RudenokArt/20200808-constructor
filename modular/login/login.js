$('.enter-button').click(sendData);
$('.password-recovery').click(passwordRecovery);

function sendData () {
  $.post('session.php', $('#login-form').serialize(), serverRespons);
}
function serverRespons (data) {
  if (data=='true') {
    $('.message').html('Авторизация прошла успешно!');
    setTimeout(redirect, 1000);
  }else{$('.message').html('Неверный логин или пароль!');}
}
function redirect () {
  document.location.href='../../admin/';
}
function passwordRecovery () {
  $.post('../mail/password-recovery.php', {data:''}, (data)=>{alert(data)});
}