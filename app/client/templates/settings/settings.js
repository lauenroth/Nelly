/*****************************************************************************/
/* Settings: Event Handlers */
/*****************************************************************************/
Template.Settings.events({

  'click a.change-password': function() {
    $('a.change-password').hide();
    $('div.change-password').fadeIn(200);
    $('#current-password').focus();
  },

  'submit form': function(e) {
    e.preventDefault();
    let profile = {
      name: $('#name').val(),
      email: $('#email').val(),
    };

    let newPassword = $('#new-password').val();
    if (newPassword.length > 0) {
      let currentPassword = $('#current-password').val();
      let passwordConfirmation = $('#confirm-password').val();
      if (newPassword !== passwordConfirmation) {
        error('Oups, you entered a different password as confirmation!');
        $('#confirm-password').select();
      }
    }

    Meteor.users.update(
      {_id: Meteor.userId()},
      {
        $set: {
          'profile.name': profile.name,
          'emails.0.address': profile.email,
        }
      }, function(errorMessage) {

        if (errorMessage) {
          error(errorMessage.reason);
        }

      }
    );

  },

});

/*****************************************************************************/
/* Settings: Helpers */
/*****************************************************************************/
Template.Settings.helpers({

  profile: function() {
    let profile = Meteor.user().profile;
    profile.email = Meteor.user().emails[0].address;
    return profile;
  },

});

/*****************************************************************************/
/* Settings: Lifecycle Hooks */
/*****************************************************************************/
Template.Settings.onCreated(function () {
  Session.set('title', 'Settings');
});

Template.Settings.onRendered(function () {
  movingLabel($('input'));
});

Template.Settings.onDestroyed(function () {
});
