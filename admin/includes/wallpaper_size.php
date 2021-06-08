<?php include_once 'php/roll_size_list.php' ?>
<div>
  <form action="php/roll_size_manager.php" method="post">
    <table>
      <tr>
        <td>
          <input type="text" name="roll_size">
        </td>
        <td>
          <button name="add_size" value="true">
            Добавить размер
          </button>
        </td>
      </tr>
    </table>
  </form>
</div>
<div>
  <table>
    <tr>
      <th>id</th>
      <th>Размер</th>
      <th>ред.</th>
      <th>удал.</th>
    </tr>
    <?php foreach (rollSizeList() as $key => $value): ?>
      <tr>
        <td><?php echo $value['id'] ?> </td>
        <td>
          <?php echo $value['roll'] ?>
          <form action="php/roll_size_manager.php" style="display: none" 
          method="post" name="roll_size_edit_form">
            <input type="text" name="roll_size_edit" 
            style="width: 50px;" value="<?php echo $value['roll'] ?>">
            <input type="hidden" name="roll_size_save"
            value="<?php echo $value['id'] ?>">
            <button title="сохранить" name="roll_size_save" >
            <i class="fa fa-floppy-o" aria-hidden="true"></i>
          </button>
        </form>
      </td>
      <td>
        <button name="roll_size_edit_button" title="редактировать">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
      </td>
      <td>
        <form action="php/roll_size_manager.php" method="post">
          <input type="hidden" name="roll_size_delete" 
          value="<?php echo $value['id'] ?>">
          <button name="roll_size_delete_button">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </form>
      </td>
    </tr>
  <?php endforeach ?>
</table>
</div>
