Template.MasterLayout.helpers({
  initLoggedIn: function() {
    let user = Accounts.user();
    if (user && user.profile && user.profile.currentTeam) {
      let currentTeam = Teams.findOne({_id: user.profile.currentTeam});
      Session.set('currentTeam', currentTeam);
    }
  },
  title: function() {
    return Session.get('title');
  }
});

Template.MasterLayout.events({
  'click .show-menu': function() {
    showMenu();
  }
});
