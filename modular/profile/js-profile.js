sessionCheck();
getAdminMail();
getAdminLogin();
$('button[class="admin-mail"').click(mailChangeAsk);
$('button[class="admin-login"').click(loginChangeAsk);
$('button[class="admin-password"').click(savePassword);
$('.button-back').click(()=>{document.location.href='../../admin/'});


//===========functions=================
function sessionCheck () {
  $.post('../login/session.php', {data:'check'}, loginDirect);
}
function loginDirect (data) {
  if(data=='false'){document.location.href='../login/';}
}

function getAdminMail () {
  $.post('php-admin-mail.php', {data:''}, showAdminMail);
}
function showAdminMail (data) {
  $('span[class="admin-mail"]').html(data);
}
function mailChangeAsk () {
  if (confirm('Изменить почту?')) {adminMailChange();} 
}
function adminMailChange () {
  let mail= document.getElementById('admin-mail').value;
  let req = new XMLHttpRequest();
  req.open('POST','php-admin-mail.php');
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.send('mail='+mail);
  req.onreadystatechange=function (){
    if (req.readyState == 4 && req.status == 200) {
      getAdminMail();
    }
  }
  alert('Адрес почты изменен!');
}
function loginChangeAsk () {
  if (confirm('Изменить логин?')) {adminLoginChange();} 
}
function adminLoginChange () {
  let login=$('input[id="admin-login"]')[0].value;
  $.post('php-admin-login.php', {data:login},getAdminLogin);
}
function getAdminLogin () {
  $.post('php-admin-login.php', {data:''}, showAdminLogin);
}
function showAdminLogin (data) {
  $('span[class="admin-login"]').html(data);
  $('.login-info').html(data);
}
function savePassword () {
  let password1=$('input[class="admin-password"]')[0].value; 
  let password2=$('input[class="repeat-password"]')[0].value; 
  if(password2==password1&&password1!=''&&password1!=undefined){
    $('input[class="admin-password"]')[0].value=''; 
    $('input[class="repeat-password"]')[0].value='';
    $.post('php-admin-password.php', {data:password1},(data)=>{alert(data)});
  }else{alert('Пароли не совпадают!');}
}