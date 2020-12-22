<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';

// if (isset($_POST['templateSize'])){$templateSize=$_POST['templateSize'];}
// if (isset($_POST['price'])){$price=$_POST['price'];}


if ($_FILES && $_FILES['filename']['error']== UPLOAD_ERR_OK)
{
	$name = $_FILES['filename']['name'];
    move_uploaded_file($_FILES['filename']['tmp_name'], 'templates/'.$name);
}
$mysqli->query('INSERT INTO `constractor_templates`(`template`)
	VALUES ("'.$name.'")');
include_once'php-mini-template.php';
echo 'INSERT INTO `constractor_templates`(`template`)
	VALUES ("'.$name.'")';

?><script type="text/javascript">document.location.href = "admin-categories-manager.html";</script>