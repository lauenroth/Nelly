
movingLabel = function ($inputField) {

  if ($inputField.length > 1) {
    $inputField.each(function(id, input) {
      movingLabel($(input));
    });
  }
  else {
    let $label = $inputField.prev('label');

    moveLabel($inputField, $label);

    $inputField.on('keyup', function() {
      moveLabel($inputField, $label);
    });

  }

}

moveLabel = function ($inputField, $label) {
  if ($inputField.val().length > 0) {
    $label.addClass('up');
  }
  else {
    $label.removeClass('up');
  }
}
