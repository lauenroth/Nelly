
showMenu = function() {
  $('nav.main').animate({
    left: 0,
  }, 300);
  $('#scrim').css('visibility', 'visible').animate({
    opacity: 1,
  }, 300);
}

hideMenu = function() {
  $('nav.main').animate({
    left: '-250px',
  }, 300);
  let $scrim = $('#scrim');
  $scrim.animate({
    'opacity': 0,
  }, 300, function() {
    $scrim.css('visibility', 'hidden');
  });
}
