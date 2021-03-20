$.post('theme/set-data.php',{data:'data'}, setIndexData);
function setIndexData (data) {
  var themeData=JSON.parse(data);
  // Реквизиты шапки
  $('.siteName').html(themeData.siteName);
  $('.region').html(themeData.region);
  $('.city').html(themeData.city);
  $('.adress').html(themeData.adress);
  $('.phone1').html(themeData.phone1);
  $('.phone2').html(themeData.phone2);
  $('.email').html(themeData.email);
  $('.timeTable').html(themeData.timeTable);
  // Доп. адреса в футере
  var footerAdres=$('.footerAdres');
  footerAdres[0].innerHTML=themeData.footerAdres0;
  footerAdres[1].innerHTML=themeData.footerAdres1;
  footerAdres[2].innerHTML=themeData.footerAdres2;
  footerAdres[3].innerHTML=themeData.footerAdres3;
  footerAdres[4].innerHTML=themeData.footerAdres4;
  footerAdres[5].innerHTML=themeData.footerAdres5;
  // Иконки соц. сетей
  var socialLink=$('.socialLink').children('a');
  setSocialLink(socialLink,themeData);
  var footerSocialLink=$('.footerSocialLink').children('a');
  setSocialLink(footerSocialLink,themeData);
  // Главное меню
  var mainMenu=$('.header-menu').children('a');
  setMainMenu(mainMenu,themeData);

  // иконки соц. сетей
}
function setSocialLink (socialLink,themeData) {
  if (themeData.socialLink_0!='') {
    socialLink[0].innerHTML=themeData.socialIcon_0;
    socialLink[0].setAttribute('href', themeData.socialLink_0);
  }else{socialLink[0].style.display='none';}
  if (themeData.socialLink_1!='') {
    socialLink[1].innerHTML=themeData.socialIcon_1;
    socialLink[1].setAttribute('href', themeData.socialLink_1);
  }else{socialLink[1].style.display='none';}
  if (themeData.socialLink_2!='') {
    socialLink[2].innerHTML=themeData.socialIcon_2;
    socialLink[2].setAttribute('href', themeData.socialLink_2);
  }else{socialLink[2].style.display='none';}
  if (themeData.socialLink_3!='') {
    socialLink[3].innerHTML=themeData.socialIcon_3;
    socialLink[3].setAttribute('href', themeData.socialLink_3);
  }else{socialLink[3].style.display='none';}
  if (themeData.socialLink_4!='') {
    socialLink[4].innerHTML=themeData.socialIcon_4;
    socialLink[4].setAttribute('href', themeData.socialLink_4);
  }else{socialLink[4].style.display='none';}
  if (themeData.socialLink_5!='') {
    socialLink[5].innerHTML=themeData.socialIcon_5;
    socialLink[5].setAttribute('href', themeData.socialLink_5);
  }else{socialLink[5].style.display='none';}
  if (themeData.socialLink_6!='') {
    socialLink[6].innerHTML=themeData.socialIcon_6;
    socialLink[6].setAttribute('href', themeData.socialLink_6);
  }else{socialLink[6].style.display='none';}

}
function setMainMenu(mainMenu,themeData) {
  if (themeData.menuLink_0!=''&&themeData.menuItem_0!='') {
    mainMenu[0].innerHTML=themeData.menuItem_0;
    mainMenu[0].setAttribute('href', themeData.menuLink_0);
  }
 if (themeData.menuLink_1!=''&&themeData.menuItem_1!='') {
    mainMenu[1].innerHTML=themeData.menuItem_1;
    mainMenu[1].setAttribute('href', themeData.menuLink_1);
  }
   if (themeData.menuLink_2!=''&&themeData.menuItem_2!='') {
    mainMenu[2].innerHTML=themeData.menuItem_2;
    mainMenu[2].setAttribute('href', themeData.menuLink_2);
  }
   if (themeData.menuLink_3!=''&&themeData.menuItem_3!='') {
    mainMenu[3].innerHTML=themeData.menuItem_3;
    mainMenu[3].setAttribute('href', themeData.menuLink_3);
  }
   if (themeData.menuLink_4!=''&&themeData.menuItem_4!='') {
    mainMenu[4].innerHTML=themeData.menuItem_4;
    mainMenu[4].setAttribute('href', themeData.menuLink_4);
  }
   if (themeData.menuLink_5!=''&&themeData.menuItem_5!='') {
    mainMenu[5].innerHTML=themeData.menuItem_5;
    mainMenu[5].setAttribute('href', themeData.menuLink_5);
  }
   if (themeData.menuLink_6!=''&&themeData.menuItem_6!='') {
    mainMenu[6].innerHTML=themeData.menuItem_6;
    mainMenu[6].setAttribute('href', themeData.menuLink_6);
  }
}