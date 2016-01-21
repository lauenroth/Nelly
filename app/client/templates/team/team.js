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
    return Session.get('currentTeam');
  },

  members: function() {
    let members = [];
    let currentTeam = Session.get('currentTeam');
    currentTeam.members.forEach(function(memberId) {
      members.push(Meteor.users.findOne({_id: memberId}));
    });
    return members;
  },

});

/*****************************************************************************/
/* Team: Lifecycle Hooks */
/*****************************************************************************/
Template.Team.onCreated(function () {

  let currentTeam = false;
  let profile =  Meteor.user().profile;
  if (profile.currentTeam) {
    currentTeam = Teams.findOne({_id: profile.currentTeam});
  }
  Session.set('currentTeam', currentTeam);

  let title = Session.get('currentTeam') ? Session.get('currentTeam').name : 'Join a team';
  Session.set('title', title);
});

Template.Team.onRendered(function () {
});

Template.Team.onDestroyed(function () {
});
