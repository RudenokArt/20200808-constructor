<?php include_once 'header.php' ?>
<?php include_once 'php/select-simple.php' ?>


<div class="section">
  <h1>Интерьеры</h1>
  <a href="../admin/">
    <button>
      <i class="fa fa-home" aria-hidden="true"></i>
      На главную
    </button>
  </a>
  <div>

   <div id="tabs">
    <ul>
      <li><a href="#tabs-1">Загрузка(удаление)</a></li>
      <li>
        <a href="#tabs-2">
          Категории модульных картин
        </a>
      </li>
    </ul>
    <div id="tabs-1">
      <div class="section">
        <label class="file-upload">
          <i class="fa fa-cloud-upload" aria-hidden="true"></i>
          <input type="file" name="interiorImage" 
          multiple="multiple" class="file-uploder">
          <span class="logo-name">ЗАГРУЗИТЬ</span>
        </label>
      </div>
      <div class="section">
        <table class="interiorTable">
          <tr>
            <td><input type="text" name="" class="interiorOrder" ></td>
            <td>Наименование</td>
            <td><img src="" alt="Изображение" width="100"></td>
            <td>
              <button value="" name="" title="удалить">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="tabs-2">
      <script>
        $(function(){$("#accordion" ).accordion({active:100});});
      </script>
      <?php $categoryArr=selectSimple('SELECT * FROM `constructor_category`');?>
      <?php $interiorArr=selectSimple('SELECT * FROM `wallpaper_interior`'); ?>
      <button class="modular-button_save">
        <i class="fa fa-floppy-o" aria-hidden="true"></i>
        Сохранить изменения
      </button>
      <div id="accordion">
        <?php for ($i=0; $i<sizeof($categoryArr); $i++) { ?>
          <?php $subCategoryArr=
          selectSimple('SELECT * FROM `constructor_subcategory`
          WHERE `category`="'.$categoryArr[$i]['category'].'"');?>
          <h3><?php echo $categoryArr[$i]['category'] ?></h3>
          <div class="widget">
            <fieldset>
              <legend>
                Основной (для всех подкатегорий):
                <select name="<?php echo $categoryArr[$i]['category'] ?>"
                  class="categorySelect"  value="">
                  <?php for ($k=0; $k<sizeof($interiorArr); $k++) {?>
                    <option value="<? echo $interiorArr[$k]['interior']?>">
                      <? echo $interiorArr[$k]['interior']?>
                    </option>
                    <?} ?>
                  </select>
                </legend>
                <?php for ($n=0;$n<sizeof($subCategoryArr); $n++) { ?>
                  <?php echo $subCategoryArr[$n]['subcategory'] ?>:
                  <select name="<?php echo $subCategoryArr[$n]['subcategory'] ?>"
                    class="subCategorySelect">
                    <?php for ($m=0; $m<sizeof($interiorArr); $m++) {?>
                      <option value="<? echo $interiorArr[$m]['interior']?>">
                        <? echo $interiorArr[$m]['interior']?>
                      </option>
                      <?} ?>
                    </select><br>
                  <?php } ?>
                </fieldset>
              </div>
            <?php } ?>
          </div>
        </div>
      </div>

      <script src="js/interior.js?<?php echo time()?>"></script>
      <?php include_once 'footer.php' ?>