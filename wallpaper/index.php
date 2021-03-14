<?php include_once 'header.php' ?>
<div class="wallpaper-container">

  <div class="flex-block">

    <div class="wallpaper-sidebar">
      <?php 
      for ($i=0; $i < 20; $i++) { ?>
        <div class="sidebar-category">
          <div class="category-icon">
            <img src="img/icon/category-icon.svg" alt=" ">
          </div>
          <div>Category name</div>
          <div>15</div>
          <div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
        <div class="sidebar-subcategory_list">
          <?php for ($n=0; $n < 10; $n++) { ?>
           <div class="sidebar-subcategory">
            <div>
              <i class="fa fa-caret-right" aria-hidden="true"></i>
            </div>
            <div>subcategory</div>
            <div>12</div>
          </div>
          <?} ?>
        </div>
        <?}?>
        <div class="wallpaper-posts">
          <?php for ($i=0; $i < 5; $i++) { 
            ?><div class="wallpaper-posts_item">
              <div class="wallpaper-posts_title">
                Спец. предложение! Два рулона обоев по цене трех!
              </div>
              <img src="img/post/post-image.jpg" 
              class="wallpaper-posts_image" alt=" ">
              <div class="wallpaper-posts_text">
                Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Дороге, заглавных. Дал океана до рекламных повстречался переулка рукописи. Свой использовало, злых? Ведущими правилами предложения обеспечивает дороге мир предупредила даже сбить вопроса языком текстов деревни от всех вскоре рекламных, грустный бросил безопасную возвращайся составитель ему рукопись за меня что? Коварных, последний.
              </div>
              </div><?
            } ?>
          </div>
        </div>

        <div class="wallpaper-content">
          <div class="wallpaper-navigation">
            <span>Фотообои</span>
            <span>
             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
             Category name
           </span>
           <span>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            Subcategory name
          </span>
        </div>
        <div class="filter-block">
          <div class="filter-block_half">
            <div>Фильтр по категориям:</div>
            <div class="filter-block_select-wrapper">
              <select></select>
            </div>
          </div>
          <div class="filter-block_half">
            <div>Фильтр по подкатегориям:</div>
            <div class="filter-block_select-wrapper">
              <select></select>
            </div>
          </div>
        </div>
        <div class="wallpaper-galery">
          <?php for ($i=0; $i < 10; $i++) { 
            ?><div class="wallpaper-galery_item-wrapper">
              <div class="wallpaper-galery_item">
                <div class="wallpaper-galery_item-wallpaper"></div>
                <div class="wallpaper-galery_item-interior"></div>
                <div class="wallpaper-galery_item-info">
                  <div class="wallpaper-galery_item-container">
                    <div class="flex-wrapper">
                      <div class="wallpaper-galery_item-article">
                        Артикул:
                        <span>12345</span>
                      </div>
                      <div class="wallpaper-galery_item-icon" 
                      title="Добавить в корзину">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </div>
                    <div class="wallpaper-galery_item-icon 
                    wallpaper-galery_item-remove" title="Убрать из корзины">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="flex-wrapper">
                  <div class="wallpaper-galery_new-price">
                   от 300 р/м <sup>2</sup>
                 </div>
                 <div class="wallpaper-galery_old-price">
                  от 400 р/м <sup>2</sup>
                </div>
              </div>
              <div class="flex-wrapper">
                <div class="wallpaper-galery_image-name">
                  Фотообои: 3D Абстракция
                </div>
              </div>
              <div class="wallpaper-galery_item-category">
                <div>Category</div>/
                <div>Subcategory</div>
              </div>
            </div>
          </div>
          <div class="wallpaper-galery_item-discount">
            -25%
          </div>
        </div>
        </div><?
      } ?>
    </div>
    <div class="wallpaper-pagination_wrapper">
      <div class="wallpaper-pagination">
        <div>
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="wallpaper-cart">
      <div class="wallpaper-cart_icon">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <div class="wallpaper-cart_counter">
        10
      </div>
      <img src="../modular/images/busket-anime.png" 
      class="wallpaper-cart_image" alt="">
    </div>
  </div>

</div>
</div>


<?php include_once 'footer.php' ?>