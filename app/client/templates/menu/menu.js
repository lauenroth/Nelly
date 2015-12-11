
Template.Menu.events({

  'click a': function() {
    $('#show-menu').prop( 'checked', false );
  },

  'click .logout': function(e) {
    e.preventDefault();
    Meteor.logout();
  }

});
