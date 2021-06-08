
<?php include_once 'header.php' ?>
<?php include_once 'php-index-select.php' ?>



<div class="modular-container">

  <div class="modular-sidebar">
    <?php $categoryArr=indexSelect('SELECT * FROM `constructor_category` 
      ORDER BY `category`');
    for($i=0;$i<sizeof($categoryArr);$i++){ 
      $subcategoryArr=indexSelect('SELECT * FROM `constructor_subcategory`
      WHERE `category`="'.$categoryArr[$i]['category'].'"');?>

      <div class="modular-sidebar_category">
        <div class="modular-sidebar_icon">
          <img src="icon/<?php echo $categoryArr[$i]['id'] ?>.svg" alt=" ">
        </div>
        <div><?php echo $categoryArr[$i]['category']?></div>
        <div>
          <?php $imageArr=indexSelect('SELECT * FROM `constructor_galеry` 
            WHERE `category`="'.$categoryArr[$i]['category'].'"');
            echo sizeof($imageArr); ?>
          </div>
          <div>
            <?php if(sizeof($subcategoryArr)>0) {?>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
              <?}?>
            </div>
          </div>
          <div class="modular-sidebar_category-list">
            <? for ($n=0;$n<sizeof($subcategoryArr);$n++) { 
              ?><div class="modular-sidebar_subcategory">
                <div>
                  <i class="fa fa-caret-right" aria-hidden="true"></i>
                </div>
                <div><?php echo trim($subcategoryArr[$n]['subcategory']) ?></div>
                <div>
                  <?php $subImageArr=indexSelect('SELECT * FROM `constructor_galеry` 
                    WHERE `subcategory`="'.$subcategoryArr[$n]['subcategory'].'"');
                    echo sizeof($subImageArr); ?>
                  </div>
                  </div><?}
                  ?></div><? } ?>
                  <?php $postArr=indexSelect('SELECT * FROM `constructor_post`');?>
                  <div class="wallpaper-posts">
                    <?php for ($i=0; $i < sizeof($postArr); $i++) { 
                      ?><div class="wallpaper-posts_item">
                        <img src="post-image/<?php echo $postArr[$i]['image_name'] ?>" 
                        class="wallpaper-posts_image" alt=" ">
                        <div class="wallpaper-posts_text">
                          <?php echo $postArr[$i]['post_text'] ?>
                        </div>
                        </div><?
                      } ?>
                    </div>

                  </div>

                  <div class="modular-content">

                    <div class="modular-navigation_wrapper">
                      <div class="modular-navigation">
                        <div class="modular-navigation_root">
                          <span>Модульные картины</span>
                        </div>
                        <div class="modular-navigation_category">
                          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                          <span>empty</span>
                        </div>
                        <div class="modular-navigation_subcategory">
                          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                          <span>empty</span>
                        </div>
                      </div>
                    </div>

                    <div class="filter-block">
                      <div class="filter-block_half">
                        <div>Фильтр по категориям:</div>
                        <div class="filter-block_select-wrapper">
                          <select class="category-select">
                            <option value="all">Все...</option>
                            <?php for ($i=0;$i<sizeof($categoryArr);$i++) { 
                              ?><option>
                                <?php echo $categoryArr[$i]['category']?>
                                </option><?
                              } ?>
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

                      <?php $galeryArr=indexSelect('
                      SELECT * FROM `constructor_galеry` ORDER BY `40x70`'); ?>
                      <div class="modular-galery">
                        <?php for ($i=0;$i<sizeof($galeryArr);$i++) { 
                          $categoryInterior=indexSelect('
                            SELECT * FROM `constructor_category` 
                            WHERE `category`="'.$galeryArr[$i]['category'].'"');
                          if(isset($categoryInterior[0]['interior'])){
                            $imageInterior=$categoryInterior[0]['interior'];
                          };
                          $subCategoryInterior=indexSelect('
                            SELECT * FROM `constructor_subcategory` 
                            WHERE `subcategory`="'.$galeryArr[$i]['subcategory'].'"');
                          if(isset($subCategoryInterior[0]['interior'])){
                            $imageInterior=$subCategoryInterior[0]['interior'];
                          };
                          ?>
                          <div class="modular-galery_item-wrapper"
                          id="<?php echo $galeryArr[$i]['image'].
                          '|'.$galeryArr[$i]['category'].
                          '|'.$galeryArr[$i]['subcategory'].
                          '|'.$galeryArr[$i]['46x80'].
                          '|'.$galeryArr[$i]['discount'].
                          '|'.$galeryArr[$i]['template']?>">
                          <div class="modular-galery_item">
                            <div class="modular-galery_item-interior"
                            style="background-image: url(../wallpaper/img/interior/<?php echo $imageInterior ?>);">
                            <div class="modular-galery_item-image"
                            style="background-image: url(miniatures/<?php echo $galeryArr[$i]['image']?>);">
                            <div class="modular-galery_item-template"
                            style="background-image: url(mini-templates/<?php echo $galeryArr[$i]['template']?>);"></div>
                          </div>
                        </div>
                        <div class="modular-galery_item-info">
                          <div class="modular-galery_item-discount">
                            - <b><?php echo $galeryArr[$i]['discount'] ?></b> %
                          </div>
                          <div class="flex-wrapper">
                            <div class="modular-galery_item-article">
                              АРТИКУЛ:
                              <?php 
                              $imageArticle=explode('.',$galeryArr[$i]['image']);
                              echo $imageArticle[0] ?>
                            </div>

                            <div class="modulat-galery_item-cart">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                              <i class="fa fa-times" aria-hidden="true" 
                              style="display: none"></i>
                              <input type="checkbox" 
                              value="<?php echo $galeryArr[$i]['image'].
                              '|'.$galeryArr[$i]['discount'].
                              '|'.$galeryArr[$i]['template'] ?>">
                            </div>

                          </div>
                          <div class="flex-wrapper">
                            <div class="modular-galery_item-name">
                              <?php echo $galeryArr[$i]['46x80'] ?>
                            </div>
                            <div class="modular-galery_item-button">
                              <i class="fa fa-eye" aria-hidden="true"></i>
                              Подробнее
                            </div>
                          </div>
                          <div class="modular-galery_item-category">
                            <?php echo $galeryArr[$i]['category']?> / 
                            <?php echo $galeryArr[$i]['subcategory'] ?>
                          </div>
                        </div>
                      </div>
                      </div><?
                    } ?>

                    <a href="favorite.html" class="modular-cart">
                      <div class="modular-cart_icon">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      </div>
                      <div class="modular-cart_counter">
                        0
                      </div>
                      <img src="../modular/images/busket-anime.png" 
                      class="modular-cart_image" alt="">
                    </a>

                  </div>

                  <div class="modular-pagination_wrapper">
                    <div class="modular-pagination">
                      <div class="first-page">
                        <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                      </div>
                      <div class="back-page">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                      </div>
                      <div class="number-page">0</div>
                      <div class="number-page">0</div>
                      <div class="number-page">0</div>
                      <div class="number-page">0</div>
                      <div class="number-page">0</div>
                      <div class="next-page">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </div>
                      <div class="last-page">
                        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <?php include_once 'footer.php' ?>
              <?php print_r($galeryArr[0]); ?>