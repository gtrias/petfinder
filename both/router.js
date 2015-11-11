Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function() {
  this.render('home');
});


Router.route('/pets/create', {
  waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('pets');
  },
  action: function () {
    this.render('pets-create');
  }
}, {
  name: 'pets.create'
});
