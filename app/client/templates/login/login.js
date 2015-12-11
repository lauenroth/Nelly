/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'submit form': function(e) {
    e.preventDefault();

    let email = $('#email input').val();
    let password = $('#password input').val();

    if ($('section.login').hasClass('sign-up')) {

      let name = $('#name input').val();
      let user = {
        email: email,
        password: password,
        profile: {
          name: name,
        }
      };

      Accounts.createUser(user, function(error) {
        if (error) alert(error.reason);
      });

    }
    else {

      Meteor.loginWithPassword(email, password, function(error) {
        if (error) alert(error.reason);
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
});

Template.Login.onDestroyed(function () {
});
