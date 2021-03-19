<?php include_once 'header.php' ?>


<div class="section">
  <h1>Фото-обои</h1>
  <a href="../admin/">
    <button>
      <i class="fa fa-home" aria-hidden="true"></i>
      На главную
    </button>
  </a>
  <div>

    <script>$( function() {$( "#tabs" ).tabs();});</script>
    <div id="tabs">
      <ul>
        <li><a href="#tabs-1">Интерьеры</a></li>
        <li><a href="#tabs-2">Категории</a></li>
        <li><a href="#tabs-3">Фотообои</a></li>
        <li><a href="#tabs-4">Статьи</a></li>
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
                <button value="" name="">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="tabs-2">content 2</div>
      <div id="tabs-3">content 3</div>
      <div id="tabs-4">content 4</div>
    </div>

    <script src="js/wallpaper.js?<?php echo time()?>"></script>
    <?php include_once 'footer.php' ?>