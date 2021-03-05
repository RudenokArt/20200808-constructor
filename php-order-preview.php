<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=0.5">
  <style>
    @media screen and (max-width: 860px){
      button{
        font-size: 36px !important;
        width: 50vw;
        height: 100px;
      }
    }
  </style>

	<!-- =================BOOTSTRAP================= -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
	<!-- ====================LESS====================== -->
	<link rel="stylesheet/less" type="text/css" href="css-favorite-page.less" />
	<script src="//cdn.jsdelivr.net/npm/less" ></script>
  <link rel="stylesheet" href="theme/css/favorite-style.css">
	<!-- =====================jQuery======================= -->
	<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>

	<script src="js-icons.js"></script>
  <script src="https://use.fontawesome.com/e8a42d7e14.js"></script>

  <title>Document</title>
</head>
<body>
	<div class="favorite-table">
		<div class="flex-wrapper">
			<div class="flex-wrapper">
        <div class="main-image"></div>
        <!-- <img src="order-image.jpg" alt=""> -->
      </div>
    </div>
  </div>
  

  <div class="footer">
    <div class="flex-wrapper">
     <div class="flex-wrapper">
      <button class="button-back">
       <script>document.write(iconCaretLeft())</script>
       Назад
     </button>
   </div>
   <div class="flex-wrapper">
    <a href="order-image.jpg" download>
     <button class="button-download">
      <script>document.write(iconDownload())</script>
      Скачать
    </button>
  </a>
</div>
<div class="flex-wrapper">
  <button class="button-mail">
   <script>document.write(iconEnvelope())</script>
   Получить на почту
 </button>
</div>
<div class="flex-wrapper">
  <button class="button-order">
   <script>document.write(iconClipboardСheck())</script>
   Заказать
 </button>
</div>
</div>
</div>

<div class="flex-wrapper">
  <div class="preloader-wrapper">
    <div class="preloader">
      <i class="fa fa-cog" aria-hidden="true"></i>
    </div>
  </div>
</div>


</body>

<script src="js-preview.js"></script>
</html>