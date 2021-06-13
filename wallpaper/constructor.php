

<?php include_once 'header.php' ?>
<?php include_once '../admin/php/select-simple.php' ?>
<?php include_once '../admin/php/texture_list.php' ?>
<?php include_once'../admin/php/price_list.php' ?>
<?php $interiorArr=selectSimple('SELECT * FROM `wallpaper_interior`');?>


<?php include_once '../admin/php/roll_size_list.php' ?>
<?php $rollArr=[]; ?>
<?php foreach (rollSizeList() as $key => $value): ?>
  <?php array_push($rollArr, $value['roll']) ?>
<?php endforeach ?>

<?php $rotateArr=[0,90,180,270] ?>
<link rel="stylesheet" href="css/constructor.css?<?php echo time() ?>">
<link rel="stylesheet" href="css/data-style.css?<?php echo time() ?>">
<script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>


<div class="wallpaper_constructor-container">
  <div class="option_button">
    <button class="wallpaper_constructor-button">
     <i class="fa fa-cog" aria-hidden="true"></i> 
   </button>
   <button class="wallpaper_constructor-button" style="display: none">
     <i class="fa fa-times" aria-hidden="true"></i> 
   </button>
 </div>
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
    <div class="wall-vertical_section constructor_curtain"></div>
    <div class="wall-vertical_section">
      <div class="wall-horizontal_section constructor_curtain"></div>
      <div class="wall-horizontal_section">
        <div class="constructor_wallpaper">
          <img src=" " alt=" ">
          <div class="constructor_wallpaper-size_sensor">
            <div class="wallpaper_roll-wrapper">
              <div class="wallpaper_roll">
                <?php for ($i=0; $i < 100; $i++) {?>
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
  <div class="range_vertical-wrapper">
    <div id="range_vertical" class="range_size"></div>
  </div>
  <div class="range_horisontal-wrapper">
    <div id="range_horisontal" class="range_size"></div>
  </div>
</div>
<div class="wallpaper_constructor-button_block">
  <div>
    <button name="image_save"
    class="wallpaper_constructor-button">
    <i class="fa fa-download" aria-hidden="true"></i>
    Сохранить <br> изображение
  </button>
  <a href="user_download/design.jpg" download="download" class="download_image-link">
    <i class="fa fa-cloud-download" aria-hidden="true"></i>
    Cкачать
  </a>
  <span class="download_image-loader">
    <i class="fa fa-cog" aria-hidden="true"></i>
  </span>

</div>
</div>
</div>

<div class="wallpaper_constructor-sidebar">

  <div id="tabs">
    <ul>
      <li><a href="#tabs-1">Опции</a></li>
      <li><a href="#tabs-2">Фактуры</a></li>
    </ul>
    <div id="tabs-1">
      <div class="wallpaper_constructor-sidebar_options">
        <div>
          <table>
            <tr>
              <th colspan="3">Размеры:</th>
            </tr>
            <tr>
              <td>Ширина: </td>
              <td><input type="text" name="input_size" placeholder=""></td>
              <td>см.</td>
            </tr>
            <tr>
              <td>Высота: </td>
              <td><input type="text" name="input_size" placeholder=""></td>
              <td>см.</td>
            </tr>
            <tr>
              <td colspan="2">Сброс размеров</td>
              <td>
                <button name="size_resset" 
                class="wallpaper_constructor-button">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </table>
        <table>
          <tr><th></th></tr>
          <tr>
            <th colspan="2">Ширина рулона:</th>
          </tr>

          <?php for ($i=0; $i < count($rollArr); $i++) {  ?>
            <tr class="size_texture_all">
              <td>
                <label class="radio-label">
                  <input type="radio" name="wallpaper_roll" class="round_radio"
                  value="<?php echo $rollArr[$i] ?>">
                </label>
                <input type="hidden" value="0">
              </td>
              <td><?php echo $rollArr[$i] ?> см.</td>
            </tr>
          <?php } ?>

          <?php foreach (priceListGet() as $key => $value) : ?>
            <tr class="size_texture size_texture_<?php echo $value['texture_id'];?>">
              <td>
                <label class="radio-label">
                  <input type="radio" name="wallpaper_roll" class="round_radio"
                  value="<?php echo sizeGet($value['size_id']) ?>">
                </label>
                <input type="hidden" value="<?php echo $value['price'] ?>">
              </td>
              <td><?php echo sizeGet($value['size_id']);?> см.</td>
            </tr>
          <?php endforeach ?>

        </table>
      </div>
      <div>
        <table>
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
          <tr><th></th></tr>
          <tr><th></th></tr>
          <tr>
            <th colspan="2">Поворот:</th>
          </tr>
          <?php for ($i=0; $i < sizeof($rotateArr); $i++) {  ?>
            <tr>
              <td>
                <label class="radio-label">
                  <input type="radio" name="image_rotate" class="round_radio"
                  value="<?php echo $rotateArr[$i] ?>">
                </label>
              </td>
              <td>
                <?php echo $rotateArr[$i] ?><sup>0</sup>
              </td>
            </tr>
          <?php } ?>
          <tr style="display: none">
            <th colspan="2">Редактировать:</th>
          </tr>
          <tr style="display: none">
            <td>
              <label class="radio-label">
                <input type="radio" class="round_radio" name="image_container">
              </label>
            </td>
            <td>Обрезать</td>
          </tr>
          <tr style="display: none">
            <td>
              <label class="radio-label">
                <input type="radio" name="image_container" class="round_radio">
              </label>
            </td>
            <td>Вместить</td>
          </tr>

        </table>
      </div>
    </div>
  </div>
  <div id="tabs-2">
    <div class="wallpaper_texture-block_wrapper">
      <div class="wallpaper_texture-block">
        <?php foreach (textureListGet() as $key => $value) {?>
          <label class="wallpaper_texture-block_item" 
          style="background-image: url(img/texture/<?php echo $value['texture']; ?>);" >
          <span>
           <?php echo explode('.',$value['texture'])[0]; ?>
         </span>
         <br>
         <input type="radio" name="texture_radio" 
         id="texture_<?php echo $value['id']; ?>"
         value="<?php echo $value['texture']; ?>">
         <i class="fa fa-info-circle" id="texture<?php echo $value['id']?>" 
           aria-hidden="true" title="подробнее..."></i>    
         </label>
       <?php }  ?>
     </div>
   </div>
 </div>
</div>

<div class="wallpaper_constructor-calc">
  <div>Стоимость: <span>0</span> руб.</div>
  <div>Сo скидкой: <span>0</span> руб. </div>
  <div>
    <button name="wallpaper_constructor-favorite_add" 
    class="wallpaper_constructor-button">
    <i class="fa fa-cart-plus" aria-hidden="true"></i>
    Добавить
  </button>
</div>
</div>

</div>
</div>

<?php include_once 'includes/texture_popup.php' ?>
<?php include_once 'cart.php' ?>
<script src="js/constructor.js?<?php echo time() ?>"></script>
<?php include_once 'footer.php' ?>