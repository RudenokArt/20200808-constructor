<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
  <script src="theme/js/jscolor.js"></script>
  <script src="https://use.fontawesome.com/e8a42d7e14.js"></script>
  <link rel="stylesheet" href="theme/css/style.css?<?php echo time() ?>">
  <title>Document</title>
</head>
<body>
  <script src="login.js"></script>
  &#128101 <span class="login-info"></span>
  <div class="container">
    <div class="section">
      <h3>ЛОГОТИП:</h3>
      <label class="file-upload">
        <i class="fa fa-cloud-upload" aria-hidden="true"></i>
        <input type="file" name="newLogo" multiple="multiple">
        <span class="logo-name">ЗАГРУЗИТЬ</span>
      </label>
      <div>
        <button class="logo-button">ЗАМЕНИТЬ</button>
      </div>
    </div>
    <form action="">
      <div class="section">
        <h3>Цвет темы</h3>
        <input data-jscolor="{}" type="text" 
        class="color-picker" name="themeColor">
      </div>
      <div class="section">
        <h3>Цвет текста</h3>
        <input  data-jscolor="{}" type="text" 
        class="color-picker" name="fontColor">
      </div>
      <div class="section">
        <h3>Цвет эффекта при наведении</h3>
        <input  data-jscolor="{}" type="text" 
        class="color-picker" name="hoverColor">
      </div>
      <div class="section">
        <h3>Шапка сайта:</h3>
        <input type="text" name="siteName"  
        class="header-info" placeholder="Название сайта (компании)">
      </div>
      <div class="section">
        <input type="text" name="region" 
        class="header-info" placeholder="Область/регион">
      </div>
      <div class="section">
        <input type="text" name="city"  
        class="header-info" placeholder="Населенный пункт">
      </div>
      <div class="section">
        <input type="text" name="adress" c 
        class="header-info" placeholder="Адрес">
      </div>
      <div class="section">
        <input type="text" name="phone1"  
        class="header-info" placeholder="Телефон №1">
      </div>
      <div class="section">
        <input type="text" name="phone2"  
        class="header-info" placeholder="Телефон №2">
      </div>
      <div class="section">
        <input type="text" name="email"  
        class="header-info" placeholder="Email">
      </div>
      <div class="section">
        <input type="text" name="timeTable"  
        class="header-info" placeholder="График работы">
      </div>

      <div class="section">
        <h3>Иконки соц. сетей</h3>
        <span class="socialIcon">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
        </span>
        <input type="text" name="socialLink_0" 
        class="socialLink" placeholder="Ссылка">
        <input type="text" class="socialIcon" name="socialIcon_0"
        value='<i class="fa fa-facebook-square" aria-hidden="true"></i>'>
        <br><br>
        <span class="socialIcon">
          <i class="fa fa-vk" aria-hidden="true"></i>
        </span>
        <input type="text" name="socialLink_1" 
        class="socialLink" placeholder="Ссылка">
        <input type="text" class="socialIcon" name="socialIcon_1"
        value='<i class="fa fa-vk" aria-hidden="true"></i>'>
        <br><br>
        <span class="socialIcon">
          <i class="fa fa-odnoklassniki-square" aria-hidden="true"></i>
        </span>
        <input type="text" name="socialLink_2" 
        class="socialLink" placeholder="Ссылка">
        <input type="text" class="socialIcon" name="socialIcon_2"
        value='<i class="fa fa-odnoklassniki-square" aria-hidden="true"></i>'>
        <br><br>
        <span class="socialIcon">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </span>
        <input type="text" name="socialLink_3" 
        class="socialLink" placeholder="Ссылка">
        <input type="text" class="socialIcon" name="socialIcon_3"
        value='<i class="fa fa-instagram" aria-hidden="true"></i>'>
        <br><br>
        <span class="socialIcon">
          <i class="fa fa-telegram" aria-hidden="true"></i>
        </span>
        <input type="text" name="socialLink_4" 
        class="socialLink" placeholder="Ссылка">
        <input type="text" class="socialIcon" name="socialIcon_4"
        value='<i class="fa fa-telegram" aria-hidden="true"></i>'>
        <br><br>
        <span class="socialIcon">
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
        </span>
        <input type="text" name="socialLink_5" 
        class="socialLink" placeholder="Ссылка">
        <input type="text" class="socialIcon" name="socialIcon_5"
        value='<i class="fa fa-twitter-square" aria-hidden="true"></i>'>
        <br><br>
        <span class="socialIcon">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </span>
        <input type="text" name="socialLink_6" 
        class="socialLink" placeholder="Ссылка">
        <input type="text" class="socialIcon" name="socialIcon_6"
        value='<i class="fa fa-whatsapp" aria-hidden="true"></i>'>
      </div>

      <div class="section">
        <h3>Главное меню</h3>
        <input type="text" name="menuItem_0" class="mainMenu" placeholder="Пункт">
        <input type="text" name="menuLink_0" class="mainMenu" placeholder="Ссылка">
        <br><br>
        <input type="text" name="menuItem_1" class="mainMenu" placeholder="Пункт">
        <input type="text" name="menuLink_1" class="mainMenu" placeholder="Ссылка">
        <br><br>
        <input type="text" name="menuItem_2" class="mainMenu" placeholder="Пункт">
        <input type="text" name="menuLink_2" class="mainMenu" placeholder="Ссылка">
        <br><br>
        <input type="text" name="menuItem_3" class="mainMenu" placeholder="Пункт">
        <input type="text" name="menuLink_3" class="mainMenu" placeholder="Ссылка">
        <br><br>
        <input type="text" name="menuItem_4" class="mainMenu" placeholder="Пункт">
        <input type="text" name="menuLink_4" class="mainMenu" placeholder="Ссылка">
        <br><br>
        <input type="text" name="menuItem_5" class="mainMenu" placeholder="Пункт">
        <input type="text" name="menuLink_5" class="mainMenu" placeholder="Ссылка">
        <br><br>
        <input type="text" name="menuItem_6" class="mainMenu" placeholder="Пункт">
        <input type="text" name="menuLink_6" class="mainMenu" placeholder="Ссылка">
        <br><br>
      </div>

      <div class="section">
        <h3>Доп. адреса и телефоны в футере:</h3>
        <input type="text" name="footerAdres0" placeholder="Адрес" class="footerAdres">
        <input type="text" name="footerAdres1" placeholder="тел." class="footerAdres">
        <br><br>
        <input type="text" name="footerAdres2" placeholder="Адрес" class="footerAdres">
        <input type="text" name="footerAdres3" placeholder="тел." class="footerAdres">
        <br><br>
        <input type="text" name="footerAdres4" placeholder="Адрес" class="footerAdres">
        <input type="text" name="footerAdres5" placeholder="тел." class="footerAdres">
      </div>

    </form>
    <div class="section">
      <div>
        <button class="back-button">
          <i class="fa fa-home" aria-hidden="true"></i>
          На главную
        </button>
      </div>
      <div>
        <button class="save-options">
          <i class="fa fa-floppy-o" aria-hidden="true"></i>
          Сохранить настройки
        </button>
      </div>
    </div>
  </div>
  
</body>
<script src="theme/js/main.js?<?php echo time() ?>"></script>
</html>