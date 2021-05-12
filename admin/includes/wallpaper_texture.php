<div>
  <button name="texture_new">
    <i class="fa fa-plus" aria-hidden="true"></i>
    Добавить фактуру
  </button>
</div>
<div id="accordion">
  <?php foreach (textureListGet() as $key => $value) { ?>
   <h3><?php echo $value['title'];?></h3>
   <div class="accordion_tab" style="background-image: 
   url(../wallpaper/img/texture/<?php echo $value['texture'];?>);">
   <div class="flex-wrapper">
     <div class="accordion_tab-item">
       <button title="Сохранить" name="texture_edit">
        <i class="fa fa-floppy-o" aria-hidden="true"></i>
      </button>
    </div>
    <div class="accordion_tab-item">
      <form action="php/texture_delete.php" method="post" >
        <input type="hidden" name="id"
        value="<?php echo $value['id'];?>">
        <input type="hidden" name="texture"
        value="<?php echo $value['texture'];?>">
      </form>
      <button title="Удалить"name="texture_delete">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <form action="php/texture_edit.php" method="post">
    <?php foreach ($value as $subkey => $subvalue) { ?>
     <div class="accordion_tab-item">
       <input type="text" placeholder="<?php echo $textureOptionArr[$subkey] ?>" 
       <?php if($subkey=='id'||$subkey=='texture'){?>
        readonly="readonly"          
      <?php }?>
      name="<?php echo $subkey ?>" value="<?php echo $subvalue ?>" >
    </div>
  <?php }  ?>
</form>
</div>
<?php } ?>
</div>
