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
      <button class="back-button">
        <i class="fa fa-home" aria-hidden="true"></i>
        На главную
      </button>
    </div>
    <form action="">
      <div class="section">
        <h3>Цвет темы</h3>
        <input value="#3399FF80" data-jscolor="{}" 
        class="color-picker" name="themeColor">
      </div>
      <div class="section">
        <h3>Цвет текста</h3>
        <input value="#3399FF80" data-jscolor="{}" 
        class="color-picker" name="fontColor">
      </div>
    </form>
      
    <div class="section">
      <button class="save-options">
        Сохранить настройки
      </button>
    </div>
  </div>
  
  
  
  
</body>
<script src="theme/js/main.js?<?php echo time() ?>"></script>
</html>