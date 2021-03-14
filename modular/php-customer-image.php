<?php 
header("Content-Type: text/html; charset=utf-8");
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$arr=explode('.',$name);
print_r($arr);
move_uploaded_file($take, 'galery/customer-image.'.$arr[1]);
//setcookie('imageName', 'customer-image.'.$arr[1]);
echo 'файл загружен';
?>
<script>
	document.cookie="imageName=customer-image.<?php echo $arr[1] ?>";
	document.cookie='discount=0';
	document.location.href = "constructor.html";
</script>