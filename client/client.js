Meteor.subscribe("pets");
Meteor.subscribe("images");

Meteor.startup( function () {
  AutoForm.setDefaultTemplate('semanticUI');
});

// Client helpers
Template.petRow.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  }
});

Template.registerHelper("log", function(object) {
    console.log(object);
});

Template.home.helpers({
  petsCount: function () {
    return Pets.find({}).count();
  }
});

Template.petRow.events({
  "click .delete": function() {
    Meteor.call("deletePet", this._id);
  }
});

// Top bar logout button
Template.ApplicationLayout.events({
  "click .item.signout": function() {
    Meteor.logout();
  }
});
