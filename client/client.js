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

