
<?php include_once 'header.php' ?>
<?php include_once '../admin/php/select-simple.php' ?>
<?php $wallpaperArr=selectSimple('SELECT * FROM `wallpaper_wallpaper` 
ORDER BY `number`');?>
<?php $categoryArr=selectSimple('SELECT * FROM `wallpaper_category`');?>

<div class="wallpaper-container">

  <div class="flex-block">

    <div class="wallpaper-sidebar">
      <?php 
      for ($i=0; $i < sizeof($categoryArr); $i++) { ?>
        <div class="sidebar-category">
          <div class="category-icon">
            <img src="img/icon/<?php echo $categoryArr[$i]['id'] ?>.svg" alt=" ">
          </div>
          <div class="category-name">
            <?php echo $categoryArr[$i]['category']; ?>
          </div>
          <div class="category-quantity">
            <?php $categoryQunter=selectSimple(
              'SELECT * FROM `wallpaper_wallpaper`
              WHERE `category`="'.$categoryArr[$i]['category'].'"');
              echo sizeof($categoryQunter); ?>
            </div>
            <div class="category-shevron">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </div>
          <?php $subCategoryArr=selectSimple(
            'SELECT * FROM `wallpaper_subcategory`
            WHERE `category`="'.$categoryArr[$i]['category'].'"');?>
            <div class="sidebar-subcategory_list">
              <?php for ($n=0; $n < sizeof($subCategoryArr); $n++) { ?>
               <div class="sidebar-subcategory">
                <div>
                  <i class="fa fa-caret-right" aria-hidden="true"></i>
                </div>
                <div class="subcategory-name">
                  <?php if (isset($subCategoryArr[$n]['subcategory'])) {
                    echo $subCategoryArr[$n]['subcategory'];
                  } ?>
                </div>
                <div class="subcategory-quantity">
                  <?php $subCategoryQunter=selectSimple(
                    'SELECT * FROM `wallpaper_wallpaper`
                    WHERE `subcategory`="'.$subCategoryArr[$n]['subcategory'].'"');
                    echo sizeof($subCategoryQunter); ?>
                  </div>
                </div>
                <?} ?>
              </div>
              <?}?>
              <?php $postArr=selectSimple('SELECT * FROM `wallpaper_post`');?>
              <div class="wallpaper-posts">
                <?php for ($i=0; $i < sizeof($postArr); $i++) { 
                  ?><div class="wallpaper-posts_item">
                    <div class="wallpaper-posts_title">
                      <?php echo $postArr[$i]['title'] ?>
                    </div>
                    <img src="img/post/<?php echo $postArr[$i]['image'] ?>" 
                    class="wallpaper-posts_image" alt=" ">
                    <div class="wallpaper-posts_text">
                      <?php echo $postArr[$i]['text'] ?>
                    </div>
                    </div><?
                  } ?>
                </div>
              </div>

              <div class="wallpaper-content">
                <div class="wallpaper-navigation_wrapper">
                  <div class="wallpaper-navigation">
                    <span class="navigation-root">Фотообои</span>
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    <span class="navigation-category">empty</span>
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    <span class="navigation-subcategory">empty</span>
                  </div>
                </div>

                <div class="filter-block">
                  <div class="filter-block_half">
                    <div>Фильтр по категориям:</div>
                    <div class="filter-block_select-wrapper">
                      <select class="category-select">
                        <option value="all">Все...</option>
                        <?php for ($i=0; $i<sizeof($categoryArr); $i++) {?>
                          <option class="category-select_option">
                            <?php echo $categoryArr[$i]['category'] ?>
                          </option>
                        <? } ?>
                      </select>
                    </div>
                  </div>
                  <div class="filter-block_half">
                    <div>Фильтр по подкатегориям:</div>
                    <div class="filter-block_select-wrapper">
                      <select class="subcategory-select">
                        <option value="all">Все...</option>
                        <?php for ($i=0; $i<100; $i++) { 
                          ?><option class="subcategory-select_option">empty</option><?
                        } ?>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="wallpaper-galery">
                  <?php for ($i=0; $i<sizeof($wallpaperArr); $i++) { 
                    ?><div class="wallpaper-galery_item-wrapper"
                    id="<?php echo $wallpaperArr[$i]['id'].'|'. 
                    $wallpaperArr[$i]['article'].'|'.
                    $wallpaperArr[$i]['wallpaper'].'|'.
                    $wallpaperArr[$i]['category'].'|'.
                    $wallpaperArr[$i]['subcategory'].'|'.
                    $wallpaperArr[$i]['interior'].'|'.
                    $wallpaperArr[$i]['discount'] ?>">
                    <div class="wallpaper-galery_item">
                      <div class="wallpaper-galery_item-wallpaper" 
                      style="background-image: 
                      url(img/wallpaper/<?php echo $wallpaperArr[$i]['article'] ?>);">
                      
                    </div>
                    <div class="wallpaper-galery_item-interior"
                    style="background-image: 
                    url(img/interior/<?php echo $wallpaperArr[$i]['interior'] ?>);">
                  </div>
                  <div class="wallpaper-galery_item-info">
                    <div class="wallpaper-galery_item-container">
                      <div class="flex-wrapper">
                        <div class="wallpaper-galery_item-article">
                          Артикул:
                          <span class="wallpaper-article">
                            <?php echo $wallpaperArr[$i]['article'] ?>
                          </span>
                        </div>
                        <div for="" class="wallpaper-galery_item-cart">
                          <div class="wallpaper-galery_item-icon">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                          </div>
                          <div class="wallpaper-galery_item-icon                  wallpaper-galery_item-remove" title="Убрать из корзины">
                            <i class="fa fa-times" aria-hidden="true"></i>
                          </div>
                          <input type="checkbox" title="Добавить в корзину"
                          class="wallpaper-galery_item-check" 
                          value="<?php echo $wallpaperArr[$i]['id'].'|'. 
                          $wallpaperArr[$i]['article'].'|'.
                          $wallpaperArr[$i]['wallpaper'].'|'.
                          $wallpaperArr[$i]['category'].'|'.
                          $wallpaperArr[$i]['subcategory'].'|'.
                          $wallpaperArr[$i]['interior'].'|'.
                          $wallpaperArr[$i]['discount'] ?>">
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
                        <span>Фотообои: </span>
                        <span><?php echo $wallpaperArr[$i]['wallpaper']; ?></span>
                      </div>
                      <div class="wallpaper-galery_item-button">
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        Подробнее
                      </div>
                    </div>
                    <div class="wallpaper-galery_item-category">
                      <div class="wallpaper-category">
                        <?php echo $wallpaperArr[$i]['category'] ?>
                      </div>/
                      <div class="wallpaper-subcategory">
                        <?php echo $wallpaperArr[$i]['subcategory'] ?>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wallpaper-galery_item-discount">
                  <span> - </span>
                  <span>
                    <?php echo $wallpaperArr[$i]['discount'] ?>
                  </span>
                  <span> % </span>
                </div>
              </div>
              </div><?
            } ?>
          </div>
          <?php include_once 'pagination.php' ?>
          <?php include_once 'cart.php' ?>
        </div>

      </div>
    </div>

    <script src="js/index.js"></script>
    <?php include_once 'footer.php' ?>