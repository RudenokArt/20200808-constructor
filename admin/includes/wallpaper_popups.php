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

<div class="post-popup_wrapper">
  <div class="post-popup">
    <button class="post-popup_button-hide">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
    <p>ДОБАВЛЕНИЕ ПОСТА</p>
    <div>
      <input type="text" name="post-title_add"
      placeholder="Заголовок поста">
    </div>
    <div>
      <textarea name="post-text_add" cols="30" rows="10"
      placeholder="Текст поста"></textarea>
    </div>
    <div>
      <button name="post-save_add" title="сохранить">
        <i class="fa fa-floppy-o" aria-hidden="true"></i>
        Сохранить
      </button>
    </div>
  </div>
</div>


<div class="texture-popup_wrapper">
  <div class="texture-popup">
    <button name="texture-popup_hide">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
    <p>ДОБАВЛЕНИЕ ФАКТУРЫ</p>
    <form action="php/texture_add.php" id="texture_add-form"
    enctype="multipart/form-data" method="post">
    <?php foreach ($textureOptionArr as $key => $value) {?>
      <div>
        <input name="<?php echo $key ?>" type="text"
        placeholder="<?php echo $value ?>">
      </div>
    <?php } ?>
    <div>
      <label class="file-upload">
        <i class="fa fa-cloud-upload" aria-hidden="true"></i>
        <input type="file" name="texture" class="file-uploder">
        <span class="file-upload_info">ФАКТУРА</span>
      </label>
    </div>
  </form>
  <div>
    <button name="texture_add" title="сохранить">
      <i class="fa fa-floppy-o" aria-hidden="true"></i>
      Сохранить
    </button>
  </div>
</div>
</div>