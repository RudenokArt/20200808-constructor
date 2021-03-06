$.post('theme/set-data.php',{data:'data'}, setIndexData);
function setIndexData (data) {
  var themeData=JSON.parse(data);
  $('.siteName').html(themeData.siteName);
  $('.region').html(themeData.region);
  $('.city').html(themeData.city);
  $('.adress').html(themeData.adress);
  $('.phone1').html(themeData.phone1);
  $('.phone2').html(themeData.phone2);
  $('.email').html(themeData.email);
  $('.timeTable').html(themeData.timeTable);
  var footerAdres=$('.footerAdres');
  footerAdres[0].innerHTML=themeData.footerAdres0;
  footerAdres[1].innerHTML=themeData.footerAdres1;
  footerAdres[2].innerHTML=themeData.footerAdres2;
  footerAdres[3].innerHTML=themeData.footerAdres3;
  footerAdres[4].innerHTML=themeData.footerAdres4;
  footerAdres[5].innerHTML=themeData.footerAdres5;
  console.log(themeData);
}