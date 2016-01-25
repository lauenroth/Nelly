/*****************************************************************************/
/* Team: Event Handlers */
/*****************************************************************************/
Template.teams.events({

  'click #close': function() {
    $('form.teams').removeClass('show');
  },

  'click li': function() {
    let team = this;

    confirmDialog('Do you wanna join the team ' + team.name + '?', function() {
      Teams.update({_id: team._id}, {$addToSet: {members: Meteor.userId()}});
      Accounts.users.update({_id: Meteor.userId()}, {$set: {'profile.currentTeam': team._id} });
      Session.set('currentTeam', team);
      info('You have joined \'' + team.name + '\'!');
      $('form.teams').removeClass('show');
    });
  },

});

/*****************************************************************************/
/* Team: Helpers */
/*****************************************************************************/
Template.teams.helpers({

  teams: function() {
    return Teams.find({}, {sort: {name: 1}});
  },

  hasTeams: function() {
    return Teams.find().count() > 0;
  }

});

/*****************************************************************************/
/* Team: Lifecycle Hooks */
/*****************************************************************************/
Template.teams.onCreated(function () {
});

Template.teams.onRendered(function () {
});

Template.teams.onDestroyed(function () {
});
