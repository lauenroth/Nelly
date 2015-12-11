/*****************************************************************************/
/* Sessions: Event Handlers */
/*****************************************************************************/
Template.Sessions.events({

  'click paper-icon-button': function() {
    $('form.new-session').addClass('show');
  },

});

/*****************************************************************************/
/* Sessions: Helpers */
/*****************************************************************************/
Template.Sessions.helpers({

  currentSessions: function() {
    return Sessions.find({}, {sort: {created: -1}});
  },

  hasSessions: function() {
    return Sessions.find({}).fetch().length > 0;
  }
});

/*****************************************************************************/
/* Sessions: Lifecycle Hooks */
/*****************************************************************************/
Template.Sessions.onCreated(function () {
  Session.set('title', 'Poker Planning');
});

Template.Sessions.onRendered(function () {
});

Template.Sessions.onDestroyed(function () {
});