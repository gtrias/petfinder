Meteor.subscribe("pets");
Meteor.subscribe("images");

AutoForm.setDefaultTemplate('ionic');

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

Template.ApplicationLayout.events({
  "click .button.icon.ion-navicon": function() {
    console.log('Toggling menu');
    $('.ui.left.sidebar')
      .sidebar('toggle')
    ;
  }
});
