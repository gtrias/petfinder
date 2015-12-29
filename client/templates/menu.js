Template.ApplicationLayout.events({
  "click .launch.icon.item": function() {
    $('.ui.sidebar')
      .sidebar('toggle')
    ;
  }
});

Template.menu.events({
  "click .item.home": function() {
    Router.go('home');
  },
  "click .item.mail": function() {
    Router.go('pets.create');
  },
  "click .item.signout": function() {
    Meteor.logout();
  }
});
