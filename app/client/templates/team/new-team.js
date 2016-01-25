/*****************************************************************************/
/* Team: Event Handlers */
/*****************************************************************************/
Template.newTeam.events({

  'click #close': function() {
    $('form.new-team').removeClass('show');
  },

  'submit form': function(e) {
    e.preventDefault();
    let team = {
      name: $('#team-name').val(),
      isPublic: $('#public').is(':checked'),
      admins: [Meteor.userId()],
      members: [Meteor.userId()],
    };
    team = Teams.insert(team);
    Accounts.users.update({_id: Meteor.userId()}, {$set: {'profile.currentTeam': team._id} });
    $('form.new-team').removeClass('show');
    $('#team-name').val('');
    $('#public').prop('checked', false);
    info('The team \'' + team.name + '\' has been created!');
    Session.set('currentTeam', team);
  },

});

/*****************************************************************************/
/* Team: Helpers */
/*****************************************************************************/
Template.newTeam.helpers({
});

/*****************************************************************************/
/* Team: Lifecycle Hooks */
/*****************************************************************************/
Template.newTeam.onCreated(function () {
});

Template.newTeam.onRendered(function () {
  movingLabel($('#team-name'));
});

Template.newTeam.onDestroyed(function () {
});
