

<?php include_once 'header.php' ?>
<?php include_once '../admin/php/select-simple.php' ?>
<?php $interiorArr=selectSimple('SELECT * FROM `wallpaper_interior`');?>
<?php $textureArr=selectSimple('SELECT * FROM `wallpaper_texture`');?>
<?php $rollArr=['105','137','150','160','260']; ?>
<?php $rotateArr=[0,90,180,270] ?>
<link rel="stylesheet" href="css/constructor.css?<?php echo time() ?>">
<link rel="stylesheet" href="css/data-style.css?<?php echo time() ?>">
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
        <span class="constractor-image">image_name</span>
      </div>
    </div>

    <div class="constructor_wall">
      <div class="constructor_wallpaper">
        <img src=" " alt=" ">
      </div>
      <div class="constructor_wallpaper-texture"></div>
      <div class="constructor_wallpaper-interior_wrapper">
        <div class="constructor_wallpaper-interior"></div>
        <div class="wallpaper_interior-tape_wrapper">
          <div class="wallpaper_interior-tape">
            <?php foreach ($interiorArr as $key => $value) {?>
              <div class="wallpaper_interior-tape_item" 
              style="background-image: url(img/interior/<?php echo $value['interior'] ?>);">
              <?php echo $value['interior'] ?>
            </div>
          <?php } ?>
        </div>
      </div>
    </div>
    <div class="wall-vertical_section constructor_curtain"></div>
    <div class="wall-vertical_section">
      <div class="wall-horizontal_section constructor_curtain"></div>
      <div class="wall-horizontal_section">
        <div class="constructor_wallpaper">
          <img src=" " alt=" ">
          <div class="constructor_wallpaper-size_sensor">
            <div class="wallpaper_roll-wrapper">
            <div class="wallpaper_roll">
              <?php for ($i=0; $i < 10; $i++) {?>
                <div class="wallpaper_roll-item"></div>
              <?php } ?>
            </div>
          </div>
          </div>
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
  <div class="wallpaper_constructor-sidebar_options">
    <div>
      <table>
        <tr>
          <th colspan="3">Размеры:</th>
        </tr>
        <tr>
          <td>Ширина:</td>
          <td><input type="text" name="input_size" placeholder=""></td>
          <td>см.</td>
        </tr>
        <tr>
          <td>Высота:</td>
          <td><input type="text" name="input_size" placeholder=""></td>
          <td>см.</td>
        </tr>
      </table>
      <table>
        <tr>
          <th colspan="2">Ширина рулона:</th>
        </tr>
        <?php for ($i=0; $i < count($rollArr); $i++) {  ?>
          <tr>
            <td>
              <label class="radio-label">
                <input type="radio" name="wallpaper_roll" 
                value="<?php echo $rollArr[$i] ?>">
              </label>
            </td>
            <td><?php echo $rollArr[$i] ?> см.</td>
          </tr>
        <?php } ?>
        <tr>
          <th colspan="3" style="border:none">Текстура:</th>
        </tr>
      </table>
      <div class="wallpaper_constructor-select">
        <select name="wallpaperTexture">
         <option value="empty"></option>
         <?php foreach ($textureArr as $key => $value) {?>
          <option value="<?php echo $value['texture']; ?>">
            <?php echo explode('.',$value['texture'])[0]; ?>
          </option>
        <?php }  ?>
      </select>
    </div>
  </div>
  <div>
    <table>
      <tr><th colspan="2">Редактировать:</th></tr>
      <tr>
        <td>
          <label class="radio-label">
            <input type="radio" name="image_container">
          </label>
        </td>
        <td>Обрезать</td>
      </tr>
      <tr>
        <td>
          <label class="radio-label">
            <input type="radio" name="image_container">
          </label>
        </td>
        <td>Вместить</td>
      </tr>
      <tr>
        <th colspan="2">Поворот:</th>
      </tr>
      <?php for ($i=0; $i < sizeof($rotateArr); $i++) {  ?>
        <tr>
          <td>
            <label class="radio-label">
              <input type="radio" name="image_rotate" 
              value="<?php echo $rotateArr[$i] ?>">
            </label>
          </td>
          <td>
            <?php echo $rotateArr[$i] ?><sup>0</sup>
          </td>
        </tr>
      <?php } ?>
      <tr>
        <th colspan="2">Отражение:</th>
      </tr>
      <tr>
        <td>
          <label class="checkbox-label">
            <input type="checkbox" name="image_miror">
          </label>
        </td>
        <td>по горизонтали </td>
      </tr>
      <tr>
        <td>
          <label class="checkbox-label">
            <input type="checkbox" name="image_miror">
          </label>
        </td>
        <td>по вертикали</td>
      </tr>
    </table>
  </div>
</div>

<div class="wallpaper_constructor-calc">
  <div>Стоимость: <span>0</span> руб.</div>
  <div>Сo скидкой: <span>0</span> руб. </div>
  <div>
    <button name="wallpaper_constructor-favorite_add">
      <i class="fa fa-cart-plus" aria-hidden="true"></i>
      Добавить
    </button>
  </div>
</div>

</div>
</div>

<div class="wallpaper_constructor-footer"></div>

</div>

<div class="test"></div>
<?php include_once 'cart.php' ?>
<script src="js/constructor.js?<?php echo time() ?>"></script>
<?php include_once 'footer.php' ?>