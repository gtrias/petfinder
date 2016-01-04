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
    if (Meteor.userId()) {
      this.render('pets-create');
    } else {
      this.render('login');
    }
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

// Pet request chat
Router.route('/pets/:_id/chat', {
  waitOn: function () {
    // return one handle, a function, or an array
    Meteor.subscribe('pets');
    Meteor.subscribe('images');
    Meteor.subscribe('messages');
    return;
  },
  action: function () {
    this.render('petsChat', {
        'data': function () {
            return Pets.findOne({_id: this.params._id});
        }
    });
  },
  name: 'pets.chat'
});
