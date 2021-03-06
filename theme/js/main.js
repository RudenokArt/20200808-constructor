$.post('theme/set-data.php',{data:'data'}, setThemeData);
$('.save-options').click((e)=>{
  $.post('theme/get-data.php',$('form').serialize(),(data)=>{
    console.log(data);
  });
});
$('.back-button').click(()=>{
  window.location='admin.html';
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

  console.log(themeData);
}
