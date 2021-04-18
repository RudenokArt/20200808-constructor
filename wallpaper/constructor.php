

<?php include_once 'header.php' ?>
<?php include_once '../admin/php/select-simple.php' ?>
<?php $interiorArr=selectSimple('SELECT * FROM `wallpaper_interior`');?>
<?php $textureArr=selectSimple('SELECT * FROM `wallpaper_texture`');?>
<link rel="stylesheet" href="css/constructor.css?<?php echo time() ?>">
<script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>

<div class="wallpaper_constructor-container">
  <div class="wallpaper_constructor-content">
    <div class="constractor-navigation_wrapper">
      <div class="constractor-navigation">
        <span class="constractor-root">Фотообои</span>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        <span class="constractor-category">category</span>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        <span class="constractor-subcategory">subcategory</span>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        <span class="constractor-subcategory">image_name</span>
      </div>
    </div>
    <div class="constructor_wall">
      <div class="constructor-wallpaper">
        <img src="" alt=" ">
      </div>
      <div class="wall-vertical_section constructor_curtain"></div>
      <div class="wall-vertical_section">
        <div class="wall-horizontal_section constructor_curtain"></div>
        <div class="wall-horizontal_section">
          <div class="constructor-wallpaper">
            <img src="" alt=" ">
          </div>
        </div>
        <div class="wall-horizontal_section  constructor_curtain"></div>
      </div>
      <div class="wall-vertical_section constructor_curtain"></div>
      <div class="range_vertical-wrapper">
        <div id="range_vertical" class="range_size"></div>
      </div>
      <div class="range_horisontal-wrapper">
        <div id="range_horisontal" class="range_size"></div>
      </div>
      
    </div>
  </div>
  <div class="wallpaper_constructor-sidebar">
    <table>
      <tr>
        <td>Ширина:</td>
        <td><input type="text" name="input_size" placeholder="0"></td>
        <td>см.</td>
      </tr>
      <tr>
        <td>Высота:</td>
        <td><input type="text" name="input_size" placeholder="0"></td>
        <td>см.</td>
      </tr>
      <tr>
        <td>Обрезать</td>
        <td><input type="radio" name="image_container"></td>
        <td></td>
      </tr>
      <tr>
        <td>Вместить</td>
        <td><input type="radio" name="image_container"></td>
        <td></td>
      </tr>
    </table>
  </div>
</div>

<div class="test"></div>
<?php include_once 'cart.php' ?>
<script src="js/constructor.js?<?php echo time() ?>"></script>
<?php include_once 'footer.php' ?>