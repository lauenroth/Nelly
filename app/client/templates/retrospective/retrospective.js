/*****************************************************************************/
/* Retrospective: Event Handlers */
/*****************************************************************************/
Template.Retrospective.events({
  'click .add': function() {
    $('.retrospective-comment').addClass('show');
  }
});

/*****************************************************************************/
/* Retrospective: Helpers */
/*****************************************************************************/
Template.Retrospective.helpers({
});

/*****************************************************************************/
/* Retrospective: Lifecycle Hooks */
/*****************************************************************************/
Template.Retrospective.onCreated(function () {
  Session.set('title', 'Retrospective');
});

Template.Retrospective.onRendered(function () {
});

Template.Retrospective.onDestroyed(function () {
});
