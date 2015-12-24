Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', {
  action: function() {
    this.render('home');
  },
  name: 'home'
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
  },
  name: 'pets.create'
});

Router.route('/pets/:_id', {
  waitOn: function () {
    // return one handle, a function, or an array
    Meteor.subscribe('pets');
    Meteor.subscribe('images');
    return;
  },
  action: function () {
    this.render('petsShow', {
        'data': function () {
            return Pets.findOne({_id: this.params._id});
        }
    });
  },
  name: 'pets.show'
});
