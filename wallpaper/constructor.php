<?php include_once 'header.php' ?>
<div class="construcror-container">
  <div class="constractor-content">
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
        <div class="wallpaper"></div>
        <div class="wall">
          <div class="wallpaper-roll"></div>
          <div class="wallpaper-roll"></div>
          <div class="wallpaper-roll"></div>
          <div class="wallpaper-roll"></div>
          <div class="wallpaper-roll"></div>
        </div>
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
        Ширина стены:
      </div>
      <div class="sidebar-item_content">
        <div class="wall-size_wrapper">
          <div class="wall-size_slider"></div>
          <input type="range" name="wallSize" value="300" min="200" max="500">
        </div>
        <span class="wall-size_text"></span> см.
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

  </div>
</div>


<?php include_once 'footer.php' ?>