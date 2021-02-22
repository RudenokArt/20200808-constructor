<?php

$db_host = "localhost"; // Подключаемся к базе

$db_user = "root"; // Логин БД
$db_password = "root"; // Пароль БД
$db_base = 'cx57370_modul'; // Имя БД

// $db_user = "cx57370_modul"; // Логин БД
// $db_password = "cx57370"; // Пароль БД
// $db_base = 'cx57370_modul'; // Имя БД

$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);
if ($mysqli->connect_error) 
{die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);}
$mysqli->set_charset("utf8");// Кодировка бд



?>