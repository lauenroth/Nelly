
// get user name of user with given id
Handlebars.registerHelper('userName', function(id) {
  let user = Meteor.users.findOne({_id: id});
  if (user && user.profile && user.profile.name) return user.profile.name;
});


// format date object to date and time
Handlebars.registerHelper('dateTimeFormat', function(date) {

  return moment(date).format('DD.MM.YYYY HH:mm');

});
