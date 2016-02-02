/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'submit form': function(e) {
    e.preventDefault();

    let email = $('#email').val();
    let password = $('#password').val();
    let button = $('button');
    let errorDiv = $('.error');

    if ($('section.login').hasClass('sign-up')) {

      let name = $('#name').val();

      if (name.length === 0) {
        error('Please set a user name.');
        $('#name').focus()
      }

      else {
        button.text('Creating your account...').prop('disabled', true);

        let user = {
          email: email,
          password: password,
          profile: {
            name: name,
          }
        };

        Accounts.createUser(user, function(err) {
          if (err) {
            error(err.reason);
            button.text('Create new account').prop('disabled', false);
          }
        });

      }

    }

    else {

      button.text('Signing you in...').prop('disabled', true);

      Meteor.loginWithPassword(email, password, function(err) {
        if (err) {
          error(err.reason);
          button.text('Sign in').prop('disabled', false);
        }
        else {
          info('Welcome back!');
        }
      });

    }

  },

  'click #sign-up a': function(e) {
    e.preventDefault();

    let section = $('section.login');
    section.toggleClass('sign-up');
    $('button[type="submit"]').text( section.hasClass('sign-up') ? 'Create new account' : 'Sign in' );
    $(e.currentTarget).text( section.hasClass('sign-up') ? 'Already have an account? Sign in' : 'Create new account' );
  }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
  Session.set('title', 'Login');
});

Template.Login.onRendered(function () {
  movingLabel($('input'));
});

Template.Login.onDestroyed(function () {
});
