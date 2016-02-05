
Template.Menu.events({

  'click #scrim': function() {
    hideMenu();
  },

  'click a': function() {
    hideMenu();
  },

  'click .logout': function(e) {
    e.preventDefault();
    Meteor.logout();
  }

});

Template.Menu.helpers({

  teamName: function() {
    return Session.get('currentTeam') ? Session.get('currentTeam').name : 'Join a team';
  },

});


Template.Menu.onRendered(function () {

  let nav = $('nav.main');
  let scrim = $('#scrim')
  let start = false;
  let isHidden = true;
  let hammertime = new Hammer($('.opener')[0]);

  hammertime.on('pan', function(ev) {
    scrim.css('visibility', 'visible');
    if (!start) {
      isHidden = parseInt(nav.css('left')) < 0;
      start = (isHidden ? ev.deltaX : ev.deltaX - 250);
    }
    offset = ev.deltaX - start;
    if (offset <= 250 && offset >= 0) {
      nav.css('left', '' + (offset - 250) + 'px');
      scrim.css('opacity', offset / 250);
    }
    else if (offset > 250) {
      nav.css('left', '0px');
    }
    else {
      nav.css('left', '-250px');
    }
    if (ev.isFinal) {
      if (ev.additionalEvent === 'panright') {
        showMenu();
        start = false;
        isHidden = false;
      }
      else {
        hideMenu();
        start = false;
        isHidden = true;
      }
    }
  });

});
