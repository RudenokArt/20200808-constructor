<?php 
echo array_keys($_FILES)[0];

print_r ($_FILES[array_keys($_FILES)[0]]['name']);
print_r ($_FILES[array_keys($_FILES)[0]]['tmp_name']);


move_uploaded_file(
  $_FILES[array_keys($_FILES)[0]]['tmp_name'], 
  'icon/'.array_keys($_FILES)[0].'.svg');


  ?>