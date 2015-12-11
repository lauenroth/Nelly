Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'dashboard',
  data: function() {
    // no dashboard for now -> go to poker session overview
    Router.go('sessions');
  }
});

Router.route('tasks');
Router.route('projects');
Router.route('sessions');
// Router.route('poker');

Router.route('retrospective');

Router.route('settings');

Router.route('poker/:id', {
  name: 'poker',
  data: function() {
    let pokerSessionId = this.params.id;
    let pokerSession = Sessions.findOne({_id: pokerSessionId});
    if (pokerSession) return pokerSession;
    else Router.go('sessions');
  }
});
