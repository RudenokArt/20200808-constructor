<?php     header('Content-type: text/html; charset=utf-8');

if (isset($_FILES['newLogo']['tmp_name'])) {
  move_uploaded_file($_FILES['newLogo']['tmp_name'], '../images/logotip.png');
}

?>