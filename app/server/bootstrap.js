Meteor.startup(function () {

  if (!Sessions.findOne()) {
    Sessions.insert({
      name: 'Test session',
      type: 'public',
      moderator: 'obZoGLcediKXqS9FB',
      participants: [],
      created: new Date(),
    });
  }

});
