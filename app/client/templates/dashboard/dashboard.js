/*****************************************************************************/
/* Dashboard: Event Handlers */
/*****************************************************************************/
Template.Dashboard.events({

  'click #add-session': function() {
    $('form.new-session').addClass('show');
  },
  
});

/*****************************************************************************/
/* Dashboard: Helpers */
/*****************************************************************************/
Template.Dashboard.helpers({

  currentSessions: function() {
    return Sessions.find({}, {sort: {created: -1}});
  },

  hasSessions: function() {
    return Sessions.find({}).fetch().length > 0;
  }

});

/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.onCreated(function () {
  Session.set('title', 'Dashboard');
});

Template.Dashboard.onRendered(function () {
});

Template.Dashboard.onDestroyed(function () {
});
