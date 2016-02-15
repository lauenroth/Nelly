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
  hasComments: function() {
    return RetrospectiveComments.find({userId: Meteor.userId()}).length;
  },
  comments: function() {
    return RetrospectiveComments.find({userId: Meteor.userId()}, {$sort: {created: -1} });
  },
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
