/*****************************************************************************/
/* Team: Event Handlers */
/*****************************************************************************/
Template.Team.events({

  'click .create': function() {
    $('form.new-team').addClass('show');
  },

  'click .join': function() {
    $('.teams').addClass('show');
  }

});

/*****************************************************************************/
/* Team: Helpers */
/*****************************************************************************/
Template.Team.helpers({
});

/*****************************************************************************/
/* Team: Lifecycle Hooks */
/*****************************************************************************/
Template.Team.onCreated(function () {
  Session.set('title', 'A-Team');
});

Template.Team.onRendered(function () {
});

Template.Team.onDestroyed(function () {
});
