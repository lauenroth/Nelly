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
    };
    Teams.insert(team);
    $('form.new-team').removeClass('show');
    $('#team-name').val('');
    $('#public').prop('checked', false);
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
