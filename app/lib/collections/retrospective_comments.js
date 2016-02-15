RetrospectiveComments = new Mongo.Collection('retrospective_comments');


if (Meteor.isServer) {
  // RetrospectiveComments.allow({
  //   insert: function (userId, doc) {
  //     return false;
  //   },
  //
  //   update: function (userId, doc, fieldNames, modifier) {
  //     return false;
  //   },
  //
  //   remove: function (userId, doc) {
  //     return false;
  //   }
  // });
  //
  // RetrospectiveComments.deny({
  //   insert: function (userId, doc) {
  //     return true;
  //   },
  //
  //   update: function (userId, doc, fieldNames, modifier) {
  //     return true;
  //   },
  //
  //   remove: function (userId, doc) {
  //     return true;
  //   }
  // });
}
