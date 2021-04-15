


<link rel="stylesheet" href="css/constructor.css?<?php echo time() ?>">
<?php include_once 'header.php' ?>
<?php include_once '../admin/php/select-simple.php' ?>
<?php $interiorArr=selectSimple('SELECT * FROM `wallpaper_interior`');?>
<?php $textureArr=selectSimple('SELECT * FROM `wallpaper_texture`');?>



<div class="construcror-container">
  <div class="constractor-content">
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
    <div class="wall_wrapper">
      <!-- <div class="wallpaper"></div> -->
      <img src="img/wallpaper/04185.jpg" class="wallpaper">
      <div class="wallpaper-texture" style="background-image: 
      url(img/texture/<?php echo $textureArr[0]['texture'] ?>);"></div>
      <div class="wall">
        <!-- <div class="wallpaper-roll"></div>
        <div class="wallpaper-roll"></div>
        <div class="wallpaper-roll"></div>
        <div class="wallpaper-roll"></div>
        <div class="wallpaper-roll"></div> -->
      </div>
      <div class="wallpaper_section-wrapper">
        <div class="wallpaper_section"></div>
        <div class="wallpaper_section-center">
          <div class="wallpaper_section-top"></div>
          <div class="wallpaper_section-middle"></div>
          <div class="wallpaper_section-bottom"></div>
        </div>
        <div class="wallpaper_section"></div>
      </div>
      <div class="wallpaper-interior" 
      style="background-image: 
      url(img/interior/<?php echo $interiorArr[0]['interior'] ?>);">
    </div>

    <div class="wallpaper_range-block_wrapper">
      <div class="wallpaper_range-block">
       <div class="wallpaper_range-wrapper">
        <div class="wallpaper_range-half">
          <div class="wallpaper_range-slider wallpaper_range-slider_left">
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </div>
          <input type="range" name="wallSize" max="50" min="0">
        </div>
        <div class="wallpaper_range-half">
          <div class="wallpaper_range-slider wallpaper_range-slider_right">
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
          </div>
          <input type="range" name="wallSize" max="50" min="0">
        </div>
      </div>
    </div>
  </div>

</div>

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
<div class="constructor-sidebar">
  <div class="sidebar-item">
    <div class="sidebar-item_title">
      Ширина обоев:
    </div>
    <?php $rollArr=['105','137','150','160','260'];
    foreach ($rollArr as $key => $value) {?>
      <div class="sidebar-item_content">
        <label class="radio-label">
          <input type="radio" 
          <?php if($value=='105'){?>checked="checked"<?php } ?>
          value="<?php echo $value ?>" name="rollSize">
        </label>
        <span><?php echo $value ?></span> см.
      </div>
    <?php } ?>
  </div>
  <div class="sidebar-item">
    <div class="sidebar-item_title">
      Обрезка:
    </div>
    <div class="sidebar-item_content">
      <label class="radio-label">
        <input type="radio" checked="checked" name="wallpaperTrimm">
      </label>
      <span>по горизонтали</span>
    </div>
    <div class="sidebar-item_content">
      <label class="radio-label">
        <input type="radio" name="wallpaperTrimm">
      </label>
      <span>по вертикали</span>
    </div>
  </div>
  <div class="sidebar-item">
    <div class="sidebar-item_title">
      Поворот:
    </div>
    <?php $rotateArr=['0','90','180','270'];
    foreach ($rotateArr as $key => $value) {?>
      <div class="sidebar-item_content">
        <label class="radio-label">
          <input type="radio" value="<?php echo $value ?>" name="rotate">
        </label>
        <span><?php echo $value ?></span><sup>0</sup>
      </div>
    <?php } ?>
  </div>
  <div class="sidebar-item">
    <div class="sidebar-item_title">
      Зеркало:
    </div>
    <div class="sidebar-item_content">
      <label class="checkbox-label">
        <input type="checkbox" name="miror">
      </label>
      По горизонтали
    </div>
    <div class="sidebar-item_content">
      <label class="checkbox-label">
        <input type="checkbox" name="miror">
      </label>
      По вертикали
    </div>
  </div>
  <div class="sidebar-item">
    <div class="sidebar-item_title">
      Выбор фактуры:
    </div>

    <div class="sidebar-item_content">
      <div class="wallpaper_constructor-select">
        <select name="wallpaperTexture">
          <?php foreach ($textureArr as $key => $value) {?>
            <option value="<?php echo $value['texture']; ?>">
              <?php echo explode('.',$value['texture'])[0]; ?>
            </option>
          <?php }  ?>
        </select>
      </div>
    </div>
  </div>
  <div class="sidebar-item">
    <div class="wallpaper_constructor-calc">
      <div>Стоимость: 1000 руб.</div>
      <div>Сo скидкой: 1000 руб. </div>
      <div>
        <button>
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
          Добавить
        </button>
      </div>
    </div>
  </div>
</div>

</div>

<div class="test"></div>

<script>
  // Карусель интерьеров
  $(document).ready(function(){
    $('.wallpaper_interior-tape').slick({ 
      //dots: true, 
      slidesToShow: 5, 
      slidesToScroll: 1, 
    });
  });
</script>

<?php include_once 'cart.php' ?>
<script src="js/constructor.js?<?php echo time() ?>"></script>
<?php include_once 'footer.php' ?>
