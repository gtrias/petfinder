Meteor.subscribe("pets");

// Client helpers
Template.petList.helpers({
  pets: function() {
    // Show newest pots on top
    return Pets.find({}, {sort: {createdAt: -1}});
  }
});

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

