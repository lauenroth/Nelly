/*****************************************************************************/
/* RetrospectiveComment: Event Handlers */
/*****************************************************************************/
Template.RetrospectiveComment.events({
  'click #close': function() {
    $('.retrospective-comment').removeClass('show');
  }
});

/*****************************************************************************/
/* RetrospectiveComment: Helpers */
/*****************************************************************************/
Template.RetrospectiveComment.helpers({
});

/*****************************************************************************/
/* RetrospectiveComment: Lifecycle Hooks */
/*****************************************************************************/
Template.RetrospectiveComment.onCreated(function () {
});

Template.RetrospectiveComment.onRendered(function () {
});

Template.RetrospectiveComment.onDestroyed(function () {
});
