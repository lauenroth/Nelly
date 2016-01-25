/*****************************************************************************/
/* Team: Event Handlers */
/*****************************************************************************/
Template.Team.events({

  'click nav.sub-menu': function() {
    $('nav.sub-menu').removeClass('show');
  },

  'click #sub-menu': function() {
    $('nav.sub-menu').addClass('show');
  },

  'click .create': function() {
    $('form.new-team').addClass('show');
  },

  'click .join': function() {
    $('.teams').addClass('show');
  },

  'click .leave': function() {
    let team = Session.get('currentTeam');
    confirmDialog('Do you really wanna leave the team ' + team.name + '?', function() {
      Teams.update({_id: team._id}, {$pull: {members: Meteor.userId()}});
      Accounts.users.update({_id: Meteor.userId()}, {$set: {'profile.currentTeam': false} });
      Session.set('currentTeam', false);
      info('You left \'' + team.name + '\'. Bye, bye!');
    });
  }

});

/*****************************************************************************/
/* Team: Helpers */
/*****************************************************************************/
Template.Team.helpers({

  setPageTitle: function() {
    let title = Session.get('currentTeam') ? Session.get('currentTeam').name : 'Join a team';
    Session.set('title', title);
  },

  currentTeam: function() {
    return Session.get('currentTeam');
  },

  members: function() {
    let members = [];
    let team = Session.get('currentTeam');
    if (team) {
      let currentTeam = Teams.findOne({_id: team._id});
      currentTeam.members.forEach(function(memberId) {
        members.push({
          user: Meteor.users.findOne({_id: memberId}),
          memberIsAdmin: (currentTeam.admins.indexOf(memberId) > -1),
        });
      });
    }
    return members;
  },

  isAdmin: function() {
    let currentTeam = Session.get('currentTeam');
    return (currentTeam.admins.indexOf(Meteor.userId()) > -1);
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
});

Template.Team.onRendered(function () {
});

Template.Team.onDestroyed(function () {
});
