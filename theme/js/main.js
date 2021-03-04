$('.save-options').click((e)=>{
  $.post('theme/get-data.php',$('form').serialize(),(data)=>{console.log(data)});
});



// ===== FUNCTIONS =====