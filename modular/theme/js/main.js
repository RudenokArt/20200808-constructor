$.post('theme/set-data.php',{data:'data'}, setThemeData);
$('.save-options').click((e)=>{
  if (confirm('Прежние настройки будут удалены!')) {
    $.post('theme/get-data.php',$('form').serialize(),(data)=>{
      console.log(data);
    });
  }
});
$('.back-button').click(()=>{
  window.location='../admin/';
});
$('input[name="newLogo"]').change((e)=>{
  $('.logo-name').html(e.target.value);
});
$('.logo-button').click(logoChecker);


// ===== FUNCTIONS =====
function logoChecker () {
  var check=$('.logo-name').html();
  if (check=='ЗАГРУЗИТЬ') {alert('Файл не выбран!');}
  else{
    if (confirm('Прежний логотип будет удален!')) {
      logoLoader();
    }
  }
}
function logoLoader () {
  node=document.getElementsByName('newLogo')[0];
  var formData = new FormData();
  formData.append(node.name,node.files[0]);
  var request = new XMLHttpRequest();
  request.open("POST", "theme/loader.php");
  request.send(formData);
  request.onreadystatechange=function (){
    if (request.readyState==4 && request.status==200){
      alert('Логотип изменен!');
    } 
  };
}
function setThemeData (data) {
  var themeData=JSON.parse(data);
  $('input[name="themeColor"]')[0].value=themeData.themeColor;
  $('input[name="fontColor"]')[0].value=themeData.fontColor;
  $('input[name="hoverColor"]')[0].value=themeData.hoverColor;
  $('input[name="siteName"]')[0].value=themeData.siteName;
  $('input[name="region"]')[0].value=themeData.region;
  $('input[name="city"]')[0].value=themeData.city;
  $('input[name="adress"]')[0].value=themeData.adress;
  $('input[name="phone1"]')[0].value=themeData.phone1;
  $('input[name="phone2"]')[0].value=themeData.phone2;
  $('input[name="email"]')[0].value=themeData.email;
  $('input[name="timeTable"]')[0].value=themeData.timeTable;
  $('input[name="footerAdres0"]')[0].value=themeData.footerAdres0;
  $('input[name="footerAdres1"]')[0].value=themeData.footerAdres1;
  $('input[name="footerAdres2"]')[0].value=themeData.footerAdres2;
  $('input[name="footerAdres3"]')[0].value=themeData.footerAdres3;
  $('input[name="footerAdres4"]')[0].value=themeData.footerAdres4;
  $('input[name="footerAdres5"]')[0].value=themeData.footerAdres5;
  // Иконки соц. сетей
  $('input[name="socialLink_0"]')[0].value=themeData.socialLink_0;
  $('input[name="socialLink_1"]')[0].value=themeData.socialLink_1;
  $('input[name="socialLink_2"]')[0].value=themeData.socialLink_2;
  $('input[name="socialLink_3"]')[0].value=themeData.socialLink_3;
  $('input[name="socialLink_4"]')[0].value=themeData.socialLink_4;
  $('input[name="socialLink_5"]')[0].value=themeData.socialLink_5;
  $('input[name="socialLink_6"]')[0].value=themeData.socialLink_6;
  // Главное меню
  $('input[name="menuLink_0"]')[0].value=themeData.menuLink_0;
  $('input[name="menuItem_0"]')[0].value=themeData.menuItem_0;
  $('input[name="menuLink_1"]')[0].value=themeData.menuLink_1;
  $('input[name="menuItem_1"]')[0].value=themeData.menuItem_1;
  $('input[name="menuLink_2"]')[0].value=themeData.menuLink_2;
  $('input[name="menuItem_2"]')[0].value=themeData.menuItem_2;
  $('input[name="menuLink_3"]')[0].value=themeData.menuLink_3;
  $('input[name="menuItem_3"]')[0].value=themeData.menuItem_3;
  $('input[name="menuLink_4"]')[0].value=themeData.menuLink_4;
  $('input[name="menuItem_4"]')[0].value=themeData.menuItem_4;
  $('input[name="menuLink_5"]')[0].value=themeData.menuLink_5;
  $('input[name="menuItem_5"]')[0].value=themeData.menuItem_5;
  $('input[name="menuLink_6"]')[0].value=themeData.menuLink_6;
  $('input[name="menuItem_6"]')[0].value=themeData.menuItem_6;

  console.log(themeData);
}
