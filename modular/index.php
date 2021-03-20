
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

                </div>
              </div>


              <?php include_once 'footer.php' ?>