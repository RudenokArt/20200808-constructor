<?php include_once 'php/price_list.php' ?>

<div>

  <form action="php/price_manager.php" method="post">
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
        <input type="text" name="price_value">
      </div>
      <div>
        <button name="price_add" value="true">
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
      <th>Фактура</th>
      <th>Стоимость, руб.</th>
      <th>Размер, см.</th>
    </tr>
    <?php foreach (priceListGet() as $key => $value): ?>
      <tr>
        <td><?php echo $key ?></td>
        <td><?php echo $value['price'] ?></td>
        <td><?php echo textureGet($value['texture_id']) ?></td>
        <td><?php echo sizeGet($value['size_id']) ?></td>
      </tr>
    <?php endforeach ?>
  </table>
</div>

<?php foreach (priceListGet() as $key => $value): ?>
  <?php echo $key ?><br>
  <?php echo $value['price'] ?>
  <?php echo textureGet($value['texture_id']) ?>
  <?php echo sizeGet($value['size_id']) ?>
<?php endforeach ?>

