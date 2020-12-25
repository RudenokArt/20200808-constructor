$('body').delegate('input[type="checkbox"]', 'change', checkboxLabel);
$('body').delegate('.edit-button', 'click', setEditItem);