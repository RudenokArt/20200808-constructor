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
        <li><a href="#tabs-1">Фотообои</a></li>
        <li><a href="#tabs-2">Категории</a></li>
        <li><a href="#tabs-3">Статьи</a></li>
      </ul>
      <div id="tabs-1">
        content 1
      </div>
      <div id="tabs-2">content 2</div>
      <div id="tabs-3">content 3</div>
    </div>

    <script src="js/wallpaper.js?<?php echo time()?>"></script>
    <?php include_once 'footer.php' ?>