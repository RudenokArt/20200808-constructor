<?php 
if (isset($_POST['quantity'])) {
  file_put_contents('pagination.txt', $_POST['quantity']);
}
$quantity=file_get_contents('pagination.txt');
echo $quantity;


?>