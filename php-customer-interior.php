<?php 
header("Content-Type: text/html; charset=utf-8");
$folder=scandir('interiors/customer-interior');
for ($i=2;$i<sizeof($folder);$i++){
	unlink('interiors/customer-interior/'.$folder[$i]);
}
$take = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$arr=explode('.',$name);
//move_uploaded_file($take, 'interiors/customer-interior.'.$arr[1]);
move_uploaded_file($take, 'interiors/customer-interior/'.$name);
//setcookie('imageName', 'customer-image.'.$arr[1]);
echo '<meta http-equiv="refresh" content="0; url=interior-upload.html" />'
?>
<script>
localStorage.setItem('interior', '<?php echo $name ?>');
</script>
