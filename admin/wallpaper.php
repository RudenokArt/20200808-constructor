<?php include_once 'header.php' ?>
<?php include_once '../admin/php/select-simple.php' ?>
<?php $wallpaperArr=selectSimple('SELECT * FROM `wallpaper_wallpaper` 
ORDER BY `article` ASC ');?>
<?php $categoryArr=selectSimple('SELECT * FROM `wallpaper_category`');?>
<?php $interiorArr=selectSimple('SELECT * FROM `wallpaper_interior`');?>

<div class="section">
  <h1>Фото-обои</h1>
  <a href="../admin/">
    <button>
      <i class="fa fa-home" aria-hidden="true"></i>
      На главную
    </button>
  </a>
  <div>

    <div id="tabs">
      <ul>
        <li><a href="#tabs-1">Фотообои</a></li>
        <li><a href="#tabs-2">Управление категориями</a></li>
        <li><a href="#tabs-3">Статьи</a></li>
      </ul>
      <div id="tabs-1">
        <div class="section">
          <button class="popup-button_show">
            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
            Загрузить изображение обоев
          </button>
        </div>

        <div class="wallpaper-admin_galery">
          <div class="wallpaper-galery_item">
            <div class="wallpaper-galery_image"></div>
            <div class="wallpaper-galery_interior"></div>
            <div class="wallpaper-gallery_info"></div>
          </div>
        </div>
      </div>
      <div id="tabs-2">content 2</div>
      <div id="tabs-3">content 3</div>
    </div>

    <div class="popup-wrapper">
      <div class="popup">
        <button class="popup-button_hide">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <div>
          <label class="file-upload">
            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
            <input type="file" name="wallpaperImage" 
            multiple="multiple" class="file-uploder">
            <span class="file-upload_info">ЗАГРУЗИТЬ</span>
          </label>
        </div>
        <div>
          Наименование для галлереи: <br>
          <input type="text" name="wallpaperImageName">
        </div>
        <div>
          Размер скидки: <br>
          <input type="text" name="wallpaperImageDiscount">
        </div>
        <div>
          Порядковый номер: <br>
          <input type="text" name="wallpaperImageNumber">
        </div>
        <div>
          Интерьер для галлереи: <br>
          <div class="select-wrapper">
            <select name="wallpaperInterior">
              <?php for ($i=0; $i<sizeof($interiorArr); $i++){?>
                <option>
                  <?php echo $interiorArr[$i]['interior'] ?>
                </option>
              <?php } ?>
            </select>
          </div>
        </div>
        <div>
          Категория: <br>
          <div class="select-wrapper">
            <select name="wallpaperCategory">
              <?php for ($i=0; $i<sizeof($categoryArr); $i++){?>
                <option>
                  <?php echo $categoryArr[$i]['category'] ?>
                </option>
              <?php } ?>
            </select>
          </div>
        </div>
        <div>
          Подкатегория: <br>
          <div class="select-wrapper">
            <select name="wallpaperSubCategory">
              Lorem ipsum dolor sit amet.
            </select>
          </div>
        </div>
        <div>
          <button class="wallpaper-upload">
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    </div>

    <div class="edit-popup_wrapper">
      <div class="edit-popup">
        <button class="edit_popup-button_hide">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <div>РЕДАКТИРОВАНИЕ ЭЛЕМНТА</div>
        <div><input type="text" name="editPopupId" disabled="disabled"></div>
        <div><input type="text" name="editPopupArticle" disabled="disabled"></div>
        <div>
          Название для галлереи: <br>
          <input type="text" name="editPopupWallpaper">
        </div>
        Категория: <br>
        <div class="select-wrapper">
          <select name="editPopupCategory" value="">
            <?php for ($i=0; $i<sizeof($categoryArr); $i++){?>
              <option value="<?php echo $categoryArr[$i]['category'] ?>">
                <?php echo $categoryArr[$i]['category'] ?>
              </option>
            <?php } ?>
          </select>
        </div>
        Подкатегория: <br>
        <div class="select-wrapper">
          <select name="editPopupSubCategory">
            Lorem ipsum dolor sit amet.
          </select>
        </div>
        Интерьер: <br>
        <div class="select-wrapper">
          <select name="editPopupInterior">
            <?php for ($i=0; $i<sizeof($interiorArr); $i++){?>
              <option>
                <?php echo $interiorArr[$i]['interior'] ?>
              </option>
            <?php } ?>
          </select>
        </div>
        <div>
          Размер скидки: <br>
          <input type="text" name="editPopupDiscount">
        </div>
        <div>
          Порядковый номер: <br>
          <input type="text" name="editPopupNumber">
        </div>
        <div>
          <button class="edit-popup_save-button">
            СОХРАНИТЬ
            <i class="fa fa-floppy-o" aria-hidden="true"></i>
          </button>
        </div>
        <div>
          <button class="edit-popup_delete-button">
            УДАЛИТЬ
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>

    <script src="js/wallpaper.js?<?php echo time()?>"></script>
    <?php include_once 'footer.php' ?>