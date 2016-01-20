/*****************************************************************************/
/* Team: Event Handlers */
/*****************************************************************************/
Template.teams.events({

  'click #close': function() {
    $('form.teams').removeClass('show');
  },

  'click li': function() {
    let teamName = this.name;
    confirmDialog('Do you wanna join the team ' + teamName + '?', function() {
      info('You joined the team ' + teamName + '!');
      $('form.teams').removeClass('show');
    });
  },

});

/*****************************************************************************/
/* Team: Helpers */
/*****************************************************************************/
Template.teams.helpers({

  teams: function() {
    return Teams.find();
  },

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
