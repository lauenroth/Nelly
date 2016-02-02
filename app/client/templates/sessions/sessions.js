/*****************************************************************************/
/* Sessions: Event Handlers */
/*****************************************************************************/
Template.Sessions.events({

  'click .add': function() {
    $('form.new-session').addClass('show');
    $('#session-name input').focus();
  },

});

/*****************************************************************************/
/* Sessions: Helpers */
/*****************************************************************************/
Template.Sessions.helpers({

  currentSessions: function() {
    let currentTeam = Session.get('currentTeam');
    if (currentTeam) {
      return Sessions.find({team: currentTeam._id}, {sort: {created: -1}});
    }
    return Sessions.find({type: 'public'}, {sort: {created: -1}});
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
