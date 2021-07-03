

<?php include_once 'header.php' ?>
<link rel="stylesheet" href="css/cart.css?<?php echo time() ?>">

<div class="cart_container">
  <?php for ($i=0; $i < 5; $i++) { ?>
    <?php include 'includes/cart_item.php' ?>
  <?php   }  ?>
</div>

<div class="button_pannel">
  <a href="index.php" class="layout_color hover_color">
    Назад в галлерею
  </a>
  <a href="#"  class="layout_color hover_color">
    Оформить заказ
  </a>

</div>


<script src="js/cart.js?<?php echo time() ?>"></script>
<?php include_once 'footer.php' ?>
