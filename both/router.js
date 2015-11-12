Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function() {
  this.render('home');
});


Router.route('/pets/create', {
  waitOn: function () {
    // return one handle, a function, or an array
    Meteor.subscribe('pets');
    Meteor.subscribe('images');
    return;
  },
  action: function () {
    this.render('pets-create');
  }
}, {
  name: 'pets.create'
});
