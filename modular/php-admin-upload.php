<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';

if (isset($_POST['imageName'])){$imageName=$_POST['imageName'];}
if (isset($_POST['selectCategory'])){$category=$_POST['selectCategory'];}
if (isset($_POST['selectSubCategory'])){$subcategory=$_POST['selectSubCategory'];}
if (isset($_POST['discount'])){$discount=$_POST['discount'];}
if (isset($_POST['template'])){$template=$_POST['template'];}
if (isset($_POST['40x70'])){$i40x70=$_POST['40x70'];}
if (isset($_POST['46x80'])){$i46x80=$_POST['46x80'];}

if ($_FILES && $_FILES['filename']['error']== UPLOAD_ERR_OK)
{
	if (empty($imageName)){$name = $_FILES['filename']['name'];}
    else {$name=$imageName.'.png';}
    move_uploaded_file($_FILES['filename']['tmp_name'], 'galery/'.$name);
    echo ' ';
}
$mysqli->query('INSERT INTO `constructor_galеry`
	(`image`, `category`, `subcategory`, `discount`, `template`,`40x70`,`46x80`)
	VALUES ("'.$name.'", "'.$category.'", "'.$subcategory.'", 
  "'.$discount.'", "'.$template.'", "'.$i40x70.'", "'.$i46x80.'")');

include_once 'php-mini-image.php';



?>
<script type="text/javascript">document.location.href = "admin.html";</script>