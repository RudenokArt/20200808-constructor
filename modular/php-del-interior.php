<?php
header("Content-Type: text/html; charset=utf-8");
require 'connectdb.php';

if (isset($_POST['id'])){$id=$_POST['id'];}
if (isset($_POST['interior'])){$interior=$_POST['interior'];}
echo $id;
echo $interior;
unlink (dirname(__FILE__).'/interiors/'.$interior);

$mysqli->query('DELETE FROM `constructor_interiors` WHERE `id`="'.$id.'"');

?>