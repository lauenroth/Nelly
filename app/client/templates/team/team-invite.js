/*****************************************************************************/
/* Team: Event Handlers */
/*****************************************************************************/
Template.teamInvite.events({

  'click #close': function() {
    $('form.team-invite').removeClass('show');
  },

  'click .add': function() {
    let numEmails = $('input[type=email]').length;
    let newEmailField = $('<div class="form-group"><label for="email_' + numEmails + '" class="moving">E-mail address</label><input type="email" id="email_' + numEmails + '"></div>');
    $('.buttons').before(newEmailField);
    movingLabel($('#email_' + numEmails));
  },

  'submit form': function(e) {
    e.preventDefault();
    error('Todo');
  },

});

/*****************************************************************************/
/* Team: Helpers */
/*****************************************************************************/
Template.teamInvite.helpers({
});

/*****************************************************************************/
/* Team: Lifecycle Hooks */
/*****************************************************************************/
Template.teamInvite.onCreated(function () {
});

Template.teamInvite.onRendered(function () {
  movingLabel($('#email'));
});

Template.teamInvite.onDestroyed(function () {
});
