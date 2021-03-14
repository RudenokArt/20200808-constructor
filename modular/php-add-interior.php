<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';


if ($_FILES && $_FILES['filename']['error']== UPLOAD_ERR_OK)
{
	$name = $_FILES['filename']['name'];
    move_uploaded_file($_FILES['filename']['tmp_name'], 'interiors/'.$name);
}
$mysqli->query('INSERT INTO `constructor_interiors`(`interior`) 
	VALUES ("'.$name.'")');
?>
<script type="text/javascript">document.location.href = "admin-categories-manager.html";</script>