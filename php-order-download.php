<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=0.5">
	<link rel="stylesheet" href="css-constructor.css?<?php echo time() ?>">
	<link rel="stylesheet" href="css-preview.css?<?php echo time() ?>">
  <link rel="stylesheet" type="text/css" href="theme/css/data-style.css">
	<script src="js-constructor.js"></script>
	<script src="js-calculator.js"></script>
	<script src="js-favorite.js"></script>
	<script src="js-interior.js"></script>
	<script src="https://use.fontawesome.com/e8a42d7e14.js"></script>
	<title>Document</title>
</head>
<body>
	<div style="display:flex;">
		<div class="wrapper-pre-view">
			<div>
				<img <?php echo 'src="order-image.jpg?v='.time().'"'; ?> class="pre-view-image1">
			</div>
			<div class="pre-view">
				<img <?php echo 'src="order-image.jpg?v='.time().'"'; ?> class="pre-view-image2">
			</div>
		</div>
		<div class="fog" id="fog">
			<div class="popup" id="customer-popup">
				<div style="display: flex;justify-content: right">
					<div class="close-button" onclick="itemDisplay('fog','none')+itemDisplay('customer-popup','none')">
						&#10060
					</div>
				</div>
				<div class="data-form">
					<p>ОТПРАВКА НА ПОЧТУ</p>
					<div class="data-form-item">
						<form action="mail/index.php" method="POST" id="customer-form">
							<input type="text" placeholder="@ e-mail" id="customer-mail" name="recipient">
						</form>
					</div>
					<div class="data-form-item">
						<div class="simple-button" onclick="customerMail()">
							<i class="fa fa-envelope-o" aria-hidden="true"></i>
              Отправить
            </div>
          </div>
          <div class="data-form-item">
            <p id="warning" style="color: red"></p>
          </div>
        </div>			
      </div>
      <div class="popup" id="order-popup">
        <div style="display: flex;justify-content: right">
         <div class="close-button" onclick="itemDisplay('fog','none')+
         itemDisplay('order-popup','none')">
         &#10060
       </div>
     </div>
     <div class="data-form">
      <p>ОТПРАВКА ЗАКАЗА</p>
      <div class="data-form-item" style="display: none">
       <form action="mail/index.php" method="POST" id="order-form">
        <?php 
        include 'php-admin-post.php'; 
        echo '<input type="text" placeholder="@ e-mail" value="'.$mail.'" name="recipient">';
        ?>
      </form>
    </div>
    <div id="order-data"></div>
    <div class="data-form-item">
     <div class="simple-button" onclick="submitForm('order-form');">
      <i class="fa fa-envelope-o" aria-hidden="true"></i>
      Отправить
    </div>
  </div>
  <div class="data-form-item">
   <p id="warning" style="color: red"></p>
 </div>
</div>			
</div>
</div>
<div class="button-pannel">
 <div>
  <a href="order-image.jpg"download style="text-decoration: none;">
   <div class="simple-button" >
    <i class="fa fa-download" aria-hidden="true"></i>
    Скачать 
  </div>
</a>
</div>
<div style="display: none;" id="order-button">
 <div class="simple-button" onclick="orderSend()">Заказать </div>
</div>
<div>
 <div onclick="cleanStorage()" class="simple-button" >
  <i class="fa fa-step-backward" aria-hidden="true"></i>
  Назад
 </div>
</div>
</div>
</div>
</body>
<script>mailInfo()</script>
</html>
