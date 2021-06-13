<?php include_once 'php/price_list.php' ?>

<div>

  <form action="php/price_manager.php" method="post" id="price_add_form">
    <div class="flex-wrapper">
      <div class="select-wrapper">
        <select name="price_texture">
          <?php foreach (textureListGet() as $key => $value): ?>
            <option value="<?php echo $value['id'];?>">
              <?php echo $value['title'] ?>
            </option>
          <?php endforeach ?>
        </select>
      </div>
      <div class="select-wrapper">
        <select name="price_size">
          <?php foreach (rollSizeList() as $key => $value): ?>
            <option value="<?php echo $value['id'];?>">
              <?php echo $value['roll'] ?>
            </option>
          <?php endforeach ?>
        </select>
      </div>
      <div>
        <input type="text" name="price_value" placeholder="Цена">
      </div>
      <div>
        <input type="hidden" name="price_add" value="true">
        <button name="price_add_button">
          Добавить цену
        </button>
      </div>
    </div>
  </form>
  
</div>

<div>
  <table>
    <tr>
      <th>id</th>
      <th>Стоимость, руб.</th>
      <th>Фактура</th>
      <th>Размер, см.</th>
      <th>ред.</th>
      <th>удал.</th>
    </tr>
    <?php foreach (priceListGet() as $key => $value): ?>
      <tr>
        <td><?php echo $value['id'];?></td>
        <td style="width: 200px;">
          <?php echo $value['price'] ?>
          <form action="php/price_manager.php" style="display: none" 
          class="price_edit_form" method="post">
            <input type="text" name="price_edit" style="width: 100px;"
            value="<?php echo $value['price'] ?>">
            <input type="hidden" name="price_id" value="<?php echo $value['id'];?>">
            <button name="price_save_button" value="true">
              <i class="fa fa-floppy-o" aria-hidden="true"></i>
            </button>
          </form>
        </td>
        <td><?php echo textureGet($value['texture_id']) ?></td>
        <td><?php echo sizeGet($value['size_id']) ?></td>
        <td>
          <button name="price_edit_button">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        </td>
        <td>
          <form action="php/price_manager.php" method="post">
            <input type="hidden" name="price_delete" value="<?php echo $value['id'] ?>">
            <button name="price_delete_button" title="удалить">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </form>
        </td>
      </tr>
    <?php endforeach ?>
  </table>
</div>


