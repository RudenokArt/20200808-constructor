sessionCheck();
getAdminLogin();

function sessionCheck () {
  $.post('login/session.php', {data:'check'}, loginDirect);
}
function loginDirect (data) {
  if(data=='false'){document.location.href='login/';}
}
function getAdminLogin () {
  $.post('profile/php-admin-login.php', {data:''}, showAdminLogin);
}
function showAdminLogin (data) {
  $('.login-info').html(data);
}