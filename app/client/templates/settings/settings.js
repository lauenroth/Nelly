/*****************************************************************************/
/* Settings: Event Handlers */
/*****************************************************************************/
Template.Settings.events({
});

/*****************************************************************************/
/* Settings: Helpers */
/*****************************************************************************/
Template.Settings.helpers({
  name: function() {
    return Meteor.user().profile.name;
  }
});

/*****************************************************************************/
/* Settings: Lifecycle Hooks */
/*****************************************************************************/
Template.Settings.onCreated(function () {
  Session.set('title', 'Settings');
});

Template.Settings.onRendered(function () {
  movingLabel($('#name'));
});

Template.Settings.onDestroyed(function () {
});
