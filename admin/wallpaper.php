<?php include_once 'header.php' ?>
<?php include_once '../admin/php/select-simple.php' ?>
<?php include_once 'php/texture_list.php' ?>
<?php $interiorArr=selectSimple('SELECT * FROM `wallpaper_interior`');?>
<?php $textureOptionArr=['title'=>'Название фактуры',
'size'=>'Размеры','width'=>'Ширина','length'=>'Длинна',
'density'=>'Плотность','color_rendering'=>'Цветопередача',
'base'=>'Основа','video'=>'Видео-ролик']; ?>


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
        <li><a href="#tabs-5">Управление фактурами</a></li>
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
       <div>
        <div>Количество на странице</div>
        <div class="select-wrapper">
          <select class="search-select" name="pagination-manager">
            <?php for ($i=2; $i <= 20; $i++) { ?>
              <option value="<?php echo $i; ?>">
                <?php echo $i ?>
              </option>
            <?php }  ?>
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
    <?php include_once '../wallpaper/pagination.php' ?>
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
          <td>
            <div class="icon-upload">
              <span> Загрузить иконку</span>
              <i class="fa fa-cloud-upload" aria-hidden="true"></i>
              <input type="file" name="category-icon" multiple="multiple" >
            </div>
          </td>
          <td class="category-icon">
            <img src="../wallpaper/img/icon/category-icon.svg" alt=" ">
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
  <div id="tabs-4">
    <div>
      <button class="post-add">
        <i class="fa fa-plus" aria-hidden="true"></i>
        Добавить пост
      </button>
    </div>
    <div>
      <table>
        <tr class="post-item_edit">
          <td class="post-item_id">id</td>
          <td>
            <input type="text" name="post-title_edit" placeholder="Заголовок поста">
            <button name="post-edit" title="редактировать">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
            <button name="post-edit_cancel" title="Отмена">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
            <button name="post-edit_save" title="Сохранить">
             <i class="fa fa-floppy-o" aria-hidden="true"></i>
           </button>
           <button name="post-edit_delete" title="Удалить">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
          <br>
          <textarea name="post-text_edit" cols="50" rows="3" 
          name="post-text" placeholder="Текст поста"></textarea>
        </td>
        <td>
          <div class="post-image_upload">
            <span> Загрузить <br> изображение</span>
            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
            <input type="file" name="post-image" multiple="multiple" >
          </div>
        </td>
        <td class="post-image_picture">
          <img src="" alt=" ">
        </td>
      </tr>
    </table>
  </div>
</div>

<div id="tabs-5"><?php include_once 'includes/wallpaper_texture.php' ?></div>

</div>


<?php include_once 'includes/wallpaper_popups.php' ?>
<script src="js/wallpaper.js?<?php echo time()?>"></script>
<?php include_once 'footer.php' ?>
