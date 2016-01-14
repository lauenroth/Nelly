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

      button.text('Creating your account...');

      let name = $('#name').val();
      let user = {
        email: email,
        password: password,
        profile: {
          name: name,
        }
      };

      Accounts.createUser(user, function(error) {
        button.text('Create new account');
        if (error) {
          errorDiv.text(error.reason).addClass('show');
          setTimeout(function() {
            errorDiv.removeClass('show');
          }, 5000);
        }
      });

    }

    else {

      button.text('Signing you in...');

      Meteor.loginWithPassword(email, password, function(error) {
        button.text('Sign in');
        if (error) {
          errorDiv.text(error.reason).addClass('show');
          setTimeout(function() {
            errorDiv.removeClass('show');
          }, 5000);
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
