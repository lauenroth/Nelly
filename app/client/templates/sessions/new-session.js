/*****************************************************************************/
/* newSession: Event Handlers */
/*****************************************************************************/
Template.newSession.events({

  'submit form': function(e) {
    e.preventDefault();
    let inputField = $('#session-name input');
    let sessionName = inputField.val();
    sessionName = sessionName || (Meteor.user().profile.name.split(' ')[0]) + '\'s session';

    let newSession = {
      name: sessionName,
      created: new Date(),
      moderator: Meteor.userId(),
      participants: [],
      type: 'public',
    };
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
});

Template.newSession.onDestroyed(function () {
});
