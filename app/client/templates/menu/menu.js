
Template.Menu.events({

  'click a': function() {
    $('#show-menu').prop( 'checked', false );
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
