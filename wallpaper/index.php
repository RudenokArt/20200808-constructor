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
            <img src="img/icon/category-icon.svg" alt=" ">
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
              <div class="wallpaper-pagination_wrapper">
                <div class="wallpaper-pagination">
                  <div class="first-page">
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                  </div>
                  <div class="back-page">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </div>
                  <div class="number-page">1</div>
                  <div class="number-page">2</div>
                  <div class="number-page">3</div>
                  <div class="number-page">4</div>
                  <div class="number-page">5</div>
                  <div class="next-page">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                  <div class="last-page">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="wallpaper-cart">
                <div class="wallpaper-cart_icon">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div class="wallpaper-cart_counter">
                  0
                </div>
                <img src="../modular/images/busket-anime.png" 
                class="wallpaper-cart_image" alt="">
              </div>
            </div>

          </div>
        </div>


        <?php include_once 'footer.php' ?>