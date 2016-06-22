/*****************************************************************************/
/* Sprint: Event Handlers */
/*****************************************************************************/
Template.Sprint.events({
  'click nav.sub-menu': function() {
    $('nav.sub-menu').removeClass('show');
  },

  'click #sub-menu': function() {
    $('nav.sub-menu').addClass('show');
  },
});

/*****************************************************************************/
/* Sprint: Helpers */
/*****************************************************************************/
Template.Sprint.helpers({

});

/*****************************************************************************/
/* Sprint: Lifecycle Hooks */
/*****************************************************************************/
Template.Sprint.onCreated(function () {
  Session.set('title', 'Current Sprint');
});

Template.Sprint.onRendered(function () {
  // movingLabel($('input'));
});

Template.Sprint.onDestroyed(function () {
});
