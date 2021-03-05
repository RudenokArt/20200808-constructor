$.post('theme/set-data.php',{data:'data'}, setThemeData);
$('.save-options').click((e)=>{
  $.post('theme/get-data.php',$('form').serialize(),(data)=>{
    console.log(data);
  });
});
$('.back-button').click(()=>{
  window.location='admin.html';
})


// ===== FUNCTIONS =====

function setThemeData (data) {
  var themeData=JSON.parse(data);
  $('input[name="themeColor"]')[0].value=themeData.themeColor;
  $('input[name="fontColor"]')[0].value=themeData.fontColor;
  console.log(themeData);
}