sessionCheck();
getAdminLogin();

function sessionCheck () {
  $.post('../modular/login/session.php', {data:'check'}, loginDirect);
}
function loginDirect (data) {
  if(data=='false'){document.location.href='../modular/login/';}
}
function getAdminLogin () {
  $.post('../modular/profile/php-admin-login.php', {data:''}, showAdminLogin);
}
function showAdminLogin (data) {
  $('.login-info').html(data);
}