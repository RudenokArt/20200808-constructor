<?php
header('Content-type: text/html; charset=utf-8');

file_put_contents('order-settings.txt', $_POST['settings']);
echo $_POST['settings'];
echo __FILE__;
?>