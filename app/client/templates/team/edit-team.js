/*****************************************************************************/
/* Team: Event Handlers */
/*****************************************************************************/
Template.editTeam.events({

  'click #close': function() {
    $('form.edit-team').removeClass('show');

    let team = Session.get('currentTeam');
    $('#edit-team-name').val(team.name).prev().addClass('up');
    $('#edit-public').prop('checked', team.isPublic);
  },

  'submit form': function(e) {
    e.preventDefault();
    let team = Session.get('currentTeam');
    let edit = {
      name: $('#edit-team-name').val(),
      isPublic: $('#edit-public').is(':checked'),
    }
    if (edit.name.length === 0) {
      error('The name is required.')
    }
    else if(edit.name === team.name && edit.isPublic === team.isPublic) {
      info('You haven\'t changed anything ;)');
    }
    else {
      team.name = edit.name;
      team.isPublic = edit.isPublic;
      Teams.update({_id: team._id}, team);
      $('form.edit-team').removeClass('show');
      info('The team \'' + team.name + '\' has been updated!');
      Session.set('currentTeam', team);
    }
  },

});

/*****************************************************************************/
/* Team: Helpers */
/*****************************************************************************/
Template.editTeam.helpers({
  currentTeam: function() {
    return Session.get('currentTeam');
  }
});

/*****************************************************************************/
/* Team: Lifecycle Hooks */
/*****************************************************************************/
Template.editTeam.onCreated(function () {
});

Template.editTeam.onRendered(function () {
  movingLabel($('#edit-team-name'));
});

Template.editTeam.onDestroyed(function () {
});
