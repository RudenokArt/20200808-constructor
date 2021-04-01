<?php include_once 'header.php' ?>
<?php include_once '../admin/php/select-simple.php' ?>
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
        <li><a href="#tabs-3">Управление подкатегориями</a></li>
        <li><a href="#tabs-4">Статьи (посты)</a></li>
      </ul>
      <div id="tabs-1">
        <div class="flex-wrapper">
          <div>
            <input type="text" name="search-input">
            <button name="search-button">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <button name="search-resset">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div>
           <button class="popup-button_show">
            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
            Загрузить изображение обоев
          </button>
        </div>
      </div>
      <div class="flex-wrapper">
        <div>
          <div>Фильтр по категориям</div>
          <div class="select-wrapper">
            <select class="search-select" name="admin-category_filter">
              <option value="all">Все...</option>
            </select>
          </div>
        </div>
        <div>
          <div>Фильтр по подкатегориям</div>
          <div class="select-wrapper">
            <select class="search-select" name="admin-subcategory_filter">
             <option value="all">Все...</option>
           </select>
         </div>
       </div>
     </div>


     <div class="wallpaper-admin_galery">
      <div class="wallpaper-galery_item">
        <div class="wallpaper-galery_image"></div>
        <div class="wallpaper-galery_interior"></div>
        <div class="wallpaper-gallery_info"></div>
      </div>
    </div>
  </div>
  <div id="tabs-2">
    <div>
      <button class="category-manager_add">
        <i class="fa fa-plus" aria-hidden="true"></i>
        Добавить категорию
      </button>
    </div>
    <div>
      <table class="category-manager_table">
        <tr class="category-manager_item">
          <td class="category-manager_id"></td>
          <td>
            <input type="text" name="category-manager_input">
          </td>
          <td>
            <button name="category-manager_edit" title="редактировать">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </td>
          <td>
            <button name="category-manager_save" title="сохранить">
              <i class="fa fa-floppy-o" aria-hidden="true"></i>
            </button>
          </td>
          <td>
            <button name="category-manager_delete" title="удалить">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div id="tabs-3">
    <div class="flex-wrapper">
      <div class="select-wrapper">
        <select name="subcategory-manager_select">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </select>
      </div>
      <div>
        <button class="subcategory-manager_add">
          <i class="fa fa-plus" aria-hidden="true"></i>
          Добавить подкатегорию
        </button>
      </div>
    </div>
    <div>
      <table class="subcategory-manager_table">
        <tr class="subcategory-manager_item">
          <td class="subcategory-manager_id"></td>
          <td>
            <input type="text"name="subcategory-manager_input">
          </td>
          <td>
            <button name="subcategory-manager_edit" title="редактировать">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </td>
          <td>
            <button name="subcategory-manager_save" title="сохранить">
              <i class="fa fa-floppy-o" aria-hidden="true"></i>
            </button>
          </td>
          <td>
            <button name="subcategory-manager_delete" title="удалить">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>

  </div>
  <div id="tabs-4">under construction</div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
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