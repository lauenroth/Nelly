/*****************************************************************************/
/* Settings: Event Handlers */
/*****************************************************************************/
Template.Settings.events({

  'click p.change-password': function() {
    $('p.change-password').hide();
    $('div.change-password').fadeIn(200);
  },

  'submit form': function(e) {
    e.preventDefault();
    let profile = {
      name: $('#name').val(),
      email: $('#email').val(),
    };

    let newPassword = $('#new-password').val();
    let currentPassword = $('#current-password').val();

    if (currentPassword.length > 0 || newPassword.length > 0) {

      let passwordConfirmation = $('#confirm-password').val();

      if (currentPassword.length === 0 || newPassword.length === 0 || passwordConfirmation.length === 0) {
        error('Please fill out all password fields if you wanna change your password.');
      }

      else if (newPassword !== passwordConfirmation) {
        error('Oups, you entered a different password as confirmation!');
        $('#confirm-password').select();
      }

      else {
        Accounts.changePassword(currentPassword, newPassword, function(err) {
          if (err) {
            error(err.reason);
          }
          else {
            info('Your password has been updated.');
          }
        });
      }

    }
    else {

      let currentProfile = Meteor.user().profile;

      if (currentProfile.name !== profile.name) {

        Meteor.users.update(
          {_id: Meteor.userId()},
          {
            $set: {
              'profile.name': profile.name,
              // 'emails.0.address': profile.email,
            }
          }, function(err) {

            if (err) {
              error(err.reason);
            }
            else {
              info('Your profile has been updated');
            }

          }
        );
      }

      else {
        info('Well, you haven\'t changed anything...');
      }
    }

    $('.submit').blur();

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
