Template.MasterLayout.helpers({
  title: function() {
    return Session.get('title');
  }
});

Template.MasterLayout.events({
  'click .show-menu': function() {
    showMenu();
  }
});
