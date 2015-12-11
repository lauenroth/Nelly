/*****************************************************************************/
/* Retrospective: Event Handlers */
/*****************************************************************************/
Template.Retrospective.events({
  'click paper-icon-button.add': function(e) {

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
