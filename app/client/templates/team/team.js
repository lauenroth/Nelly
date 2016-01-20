/*****************************************************************************/
/* Team: Event Handlers */
/*****************************************************************************/
Template.Team.events({

  'click .create': function() {
    $('form.new-team').addClass('show');
  },

  'click .join': function() {
    $('.teams').addClass('show');
  }

});

/*****************************************************************************/
/* Team: Helpers */
/*****************************************************************************/
Template.Team.helpers({

  currentTeam: function() {
    let profile =  Meteor.user().profile;
    if (profile.currentTeam) return Teams.findOne({_id: profile.currentTeam});
    return false;
  },

});

/*****************************************************************************/
/* Team: Lifecycle Hooks */
/*****************************************************************************/
Template.Team.onCreated(function () {
  Session.set('title', 'Join a team');
});

Template.Team.onRendered(function () {
});

Template.Team.onDestroyed(function () {
});
