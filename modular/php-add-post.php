<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';

if (isset($_POST['postText'])){$postText=$_POST['postText'];}


if ($_FILES && $_FILES['filename']['error']== UPLOAD_ERR_OK)
{
	$name = $_FILES['filename']['name'];
    move_uploaded_file($_FILES['filename']['tmp_name'], 'post-image/'.$name);
}
$mysqli->query('INSERT INTO `constructor_post`(`image_name`, `post_text`)
	VALUES ("'.$name.'", "'.$postText.'")');
echo $name.'-';
echo $postText;
?><script type="text/javascript">document.location.href = "admin.html";</script>