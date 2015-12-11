/*****************************************************************************/
/* Poker: Event Handlers */
/*****************************************************************************/
Template.Poker.events({

  'click nav.sub-menu': function() {
    $('nav.sub-menu').removeClass('show');
  },

  'click #sub-menu': function() {
    $('nav.sub-menu').addClass('show');
  },

  'click .session-info': function(e) {
    e.preventDefault();
    $('#session-info').addClass('show');
  },

  'click #card': function() {
    $('section.poker').addClass('chosen');
  },

  'click button.change': function() {
    $('button.change').blur();
    $('section.poker').removeClass('chosen');
  },

  'click .participants li': function(e) {
    $(e.currentTarget).toggleClass('done').toggleClass('thinking');
  },

});

/*****************************************************************************/
/* Poker: Helpers */
/*****************************************************************************/
Template.Poker.helpers({
  pokerValue: function() {
    let pokerValue = Session.get('pokerValue');
    if (!pokerValue) pokerValue = 0;
    let pokerValues = [0, '½', 1, '1½', 2, 3, 5, 8, 13, 20, 40, 100, '∞', '?', 'break'];
    // pokerValues = [0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, '∞', '?', 'break'];
    return pokerValues[pokerValue];
  },
});



/*****************************************************************************/
/* Poker: Lifecycle Hooks */
/*****************************************************************************/
Template.Poker.onCreated(function () {

  Session.set('title', 'Poker Planning');

  let pokerSession = this.data;

  // make sure the user is added to the poker session
  Sessions.update({_id: this.data._id}, {$addToSet: {participants: Meteor.userId()}});

});

Template.Poker.onRendered(function () {
  $('paper-slider').on('immediate-value-change', function() {
    Session.set('pokerValue', $('#sliderBar')[0].value);

  });
  $('paper-slider').on('change', function() {
    Session.set('pokerValue', $('#sliderBar')[0].value);
  });

  $('#card').on('swipe', function(e) {
    console.log(e);
  })

  // var hammertime = new Hammer(document.getElementById('card'), {});
  // hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  // hammertime.on('swipe', function(e) {
  //   console.log(e)
  // });
});

Template.Poker.onDestroyed(function () {
});
