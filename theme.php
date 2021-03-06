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
        <h3>Доп. адреса и телефоны в футере:</h3>
        <input type="text" name="footerAdres0" placeholder="Адрес">
        <input type="text" name="footerAdres1" placeholder="тел.">
        <br><br>
        <input type="text" name="footerAdres2" placeholder="Адрес">
        <input type="text" name="footerAdres3" placeholder="тел.">
        <br><br>
        <input type="text" name="footerAdres4" placeholder="Адрес">
        <input type="text" name="footerAdres5" placeholder="тел.">
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