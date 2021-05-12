<?php foreach (textureListGet() as $key => $value) {?>
 <div id="popup_texture<?php echo $value['id']?>"
   class="wallpaper_constructor-popup_wrapper">
   <div class="wallpaper_constructor-popup">
    <div class="wallpaper_constructor-popup_img">
      <div class="wallpaper_constructor-popup_textute"></div>
    </div>
    <div>
      <div class="wallpaper_constructor-popup_textute"></div>
      <div class="wallpaper_constructor-popup_info">
        <div style="text-align: right;">
          <button name="wallpaper_constructor-popup_close"
          class="wallpaper_constructor-button">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div class="wallpaper_constructor-popup_title">
        <?php echo $value['title'] ?>
      </div>
      <button name="video_button" class="wallpaper_constructor-button">
        <i class="fa fa-video-camera" aria-hidden="true"></i>
        Смотреть видео
      </button>
      <table>
        <tr>
          <th>Размеры</th>
          <td><?php echo $value['size'] ?></td>
        </tr>
        <tr>
          <th>Ширина рулона</th>
          <td><?php echo $value['width'] ?></td>
        </tr>
        <tr>
          <th>Длинна рулона</th>
          <td><?php echo $value['length'] ?></td>
        </tr>
        <tr>
          <th>Плотность</th>
          <td><?php echo $value['density'] ?></td>
        </tr>
        <tr>
          <th>Цветопередача</th>
          <td><?php echo $value['color_rendering'] ?></td>
        </tr>
        <tr>
          <th>Основа</th>
          <td><?php echo $value['base'] ?></td>
        </tr>
      </table>
    </div>
  </div>
  <div class="wallpaper_constructor-video_block">
    <button name="video_button-close">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
    <iframe width="300" height="200" src="<?php echo $value['video'] ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</div>
<?php }  ?>

