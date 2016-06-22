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

  'click #session-info': function() {
    $('#session-info').removeClass('show');
  },

  // 'click .card': function(e) {
  //   let newEstimate = $(e.target).data('value')
  //   Estimates.update({_id: Session.get('currentEstimate')}, {$set: {estimate: newEstimate} });
  // },

  'click button.change': function() {
    $('button.change').blur();
    Estimates.update({_id: Session.get('currentEstimate')}, {$set: {estimate: '?'} });
    $('.card.selected').removeClass('selected');
  },

  'click .reset': function(e) {
    e.preventDefault();
    let estimates = Estimates.find({session: this._id});
    estimates.forEach(function(estimate) {
      Estimates.update({_id: estimate._id}, {$set: {estimate: '?'} });
    })

  },

  'click .participants li': function(e) {
    // $(e.currentTarget).toggleClass('done').toggleClass('thinking');
  },

});

/*****************************************************************************/
/* Poker: Helpers */
/*****************************************************************************/
Template.Poker.helpers({

  estimates: function() {
    let estimates = Estimates.find({session: this._id});
    return estimates;
  },

  pokerValue: function(pokerValue) {
    if (pokerValue === undefined) pokerValue = Session.get('pokerValue') || 0;
    let pokerValues = [0, '½', 1, 2, 3, 5, 8, 13, 20, 40, 100, '∞', '?', 'break'];
    // pokerValues = [0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, '∞', '?', 'break'];
    return pokerValues[pokerValue];
  },

  isModerator: function() {
    return (this.moderator === Meteor.userId());
  },

  userIsThinking: function() {
    let estimate = Estimates.findOne({session: this._id, user: Meteor.userId()});
    return estimate && estimate.estimate === '?';
  },

  isThinking: function(estimate) {
    return estimate === '?';
  },

  everybodyPlayed: function() {
    return (Estimates.find({session: this._id, estimate: '?'}).fetch().length === 0);
  },

  isParticipant: function() {
    return !!Estimates.findOne({session: this._id, user: Meteor.userId()});
  },

  averageValue: function() {
    let estimates = Estimates.find({session: this._id});
    let participants = 0;
    let sum = 0;
    estimates.forEach(function(estimate) {
      if (estimate.estimate !== '?' && estimate.estimate !== 'break' && estimate.estimate !== '∞') {
        participants++;
        sum += estimate.estimate;
      }
    });
    let average = Math.round( (sum / participants) * 2) / 2;

    return average % 1 !== 0 ? average.toFixed(1) : average;
  }

});



/*****************************************************************************/
/* Poker: Lifecycle Hooks */
/*****************************************************************************/
Template.Poker.onCreated(function () {

  Session.set('title', 'Poker Planning');

  Session.set('pokerValue', 0);

  let pokerSession = this.data;

  // make sure the user is added to the poker session
  if (this.data.moderator !== Meteor.userId() || this.data.participants.indexOf(Meteor.userId()) !== -1) {

    Sessions.update({_id: this.data._id}, {$addToSet: {participants: Meteor.userId()}});

    let alreadyEstimated = Estimates.findOne({session: this.data._id, user: Meteor.userId()});
    if (alreadyEstimated) {
      Session.set('currentEstimate', alreadyEstimated._id);
    }
    else {
      let estimate = Estimates.insert({session: this.data._id, user: Meteor.userId(), estimate: '?'});
      Session.set('currentEstimate', estimate);
    }

  }

});

Template.Poker.onRendered(function () {

  let currentCard = $('.card:first-child');
  let start = {x: false, y: false};
  let hammer = new Hammer($('.swiper-pagination')[0]);
  hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 5, velocity: 0.2 });
  hammer.on('pan', function(ev) {
    let cardTop = parseInt(currentCard.css('top'));
    let top = 0;
    if (start.x === false) {
      start.x = ev.deltaX;
      start.y = ev.deltaY;
    }
    else {
      let delta = ev.deltaY - start.y;
      top = (cardTop + delta) > 0 ? 0 : cardTop + delta;
      console.log(top);
      currentCard.css('top', top);
      // console.log(ev.velocityY);
    }
    if (ev.isLast) {
      start.x = false;
      start.y = false;
      console.log('final', top);
      if (top <= -200) {
        currentCard.animate({
          top: -400,
        }, 200);
      }
    }

  });

  // $('.card').each(function(index, card) {
    // Hammer.Pan({direction: 'DIRECTION_VERTICAL'});

    // hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    // hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    // hammer.on('swipeup', function(ev) {
    //
    //   let $card = $(card);
    //   $card.addClass('selected');
    //   Estimates.update({_id: Session.get('currentEstimate')}, {$set: {estimate: $card.data('value')} });
    // });
  // });

  // var swiper = new Swiper('.swiper-container', {
  //   slidesPerView: 'auto',
  //   centeredSlides: true,
  //   spaceBetween: 30,
  //   pagination: '.swiper-pagination',
  //   paginationClickable: true,
  // });
//
//   setTimeout(function() {
//
//   let mc = new Hammer.Manager($('.card')[0], {
//     recoginzers: [
//       [Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL}],
//     ]
//   });
//
//   let hammertime = new Hammer($('.card')[0]);
//
//   hammertime.on('swipe', function(ev) {
//     console.log(ev);
//   });
//
//
// }, 1000);

});

Template.Poker.onDestroyed(function () {
  let estimate = Estimates.findOne({session: this.data._id, user: Meteor.userId()});
  Estimates.remove({_id: estimate._id});
});
