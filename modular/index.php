
<?php include_once 'header.php' ?>
<?php include_once 'php-index-select.php' ?>



<div class="modular-container">
  <div class="modular-sidebar">
    <?php $categoryArr=indexSelect('SELECT * FROM `constructor_category`');
    for($i=0;$i<sizeof($categoryArr);$i++){ 
      $subcategoryArr=indexSelect('SELECT * FROM `constructor_subcategory`
      WHERE `category`="'.$categoryArr[$i]['category'].'"');?>

      <div class="modular-sidebar_category">
        <div class="modular-sidebar_icon">
          <img src="icon/category-icon.svg" alt=" ">
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
                <div><?php echo $subcategoryArr[$n]['subcategory']?></div>
                <div>
                  <?php $subImageArr=indexSelect('SELECT * FROM `constructor_galеry` 
                    WHERE `subcategory`="'.$subcategoryArr[$n]['subcategory'].'"');
                    echo sizeof($subImageArr); ?>
                  </div>
                  </div><?}
                  ?></div><? } ?>


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
                        ?><div class="modular-galery_item-wrapper">
                          <div class="modular-galery_item">
                            <div class="modular-galery_item-interior">
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
                                <div class="modular-galery_item-button">
                                  <i class="fa fa-eye" aria-hidden="true"></i>
                                  Подробнее
                                </div>
                              </div>
                              <div class="modular-galery_item-name">
                                АБСТРАКТНАЯ АБСТРАКЦИЯ
                              </div>
                              <div class="modular-galery_item-category">
                                <?php echo $galeryArr[$i]['category']?> / 
                                <?php echo $galeryArr[$i]['subcategory'] ?>
                              </div>
                            </div>
                          </div>
                          </div><?
                        } ?>

                      </div>

                    </div>
                  </div>

                  <?php include_once 'footer.php' ?>
                  <?php print_r($galeryArr[0]); ?>