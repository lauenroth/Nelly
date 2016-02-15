/*****************************************************************************/
/* RetrospectiveComment: Event Handlers */
/*****************************************************************************/
Template.RetrospectiveComment.events({
  'click #close': function() {
    $('.retrospective-comment').removeClass('show');
  },
  'click button': function(e) {
    e.preventDefault();
    $(e.target).blur();

    let comment = $('#comment').val();

    if (comment.length > 0) {
      RetrospectiveComments.insert({
        comment: comment,
        type: e.target.name,
        userId: Meteor.userId(),
        created: new Date(),
      });
      info('Comment has been added :)');
      $('.retrospective-comment').removeClass('show');
    }
    else {
      error('Please write a comment.');
    }

  },
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
  movingLabel($('#comment'));
});

Template.RetrospectiveComment.onDestroyed(function () {
});
