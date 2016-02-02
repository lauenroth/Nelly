/*****************************************************************************/
/* newSession: Event Handlers */
/*****************************************************************************/
Template.newSession.events({

  'submit form': function(e) {
    e.preventDefault();
    let inputField = $('#session-name');
    let sessionName = inputField.val();
    sessionName = sessionName || (Meteor.user().profile.name.split(' ')[0]) + '\'s session';

    let currentTeam = Session.get('currentTeam');

    let newSession = {
      name: sessionName,
      created: new Date(),
      moderator: Meteor.userId(),
      participants: [],
      type: 'public',
    };

    if (currentTeam) {
      newSession.team = currentTeam._id;
      newSession.type = 'team';
    }

    if ($('#join').prop('checked')) {
      newSession.participants = [Meteor.userId()];
    }

    Sessions.insert(newSession);

    $('form.new-session').removeClass('show');
    inputField.val('');
  },

  'click #close': function() {
    $('form.new-session').removeClass('show');
  },

});

/*****************************************************************************/
/* newSession: Helpers */
/*****************************************************************************/
Template.newSession.helpers({

});

/*****************************************************************************/
/* newSession: Lifecycle Hooks */
/*****************************************************************************/
Template.newSession.onCreated(function () {
});

Template.newSession.onRendered(function () {
  movingLabel($('#session-name'));
});

Template.newSession.onDestroyed(function () {
});
