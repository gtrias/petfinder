Pets = new Mongo.Collection("pets");

Meteor.methods({
  addPet: function (name) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Pets.insert({
      name: name,
      createdAt: new Date(), // current time
      owner: Meteor.userId(), // User owner id
      username: Meteor.user().username // Username so we dont have to query each time
    });
  },

  deletePet: function (petId) {
    Pets.remove(petId);
  },
});

if (Meteor.isClient) {
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

  Template.body.helpers({
    petsCount: function () {
      return Pets.find({}).count();
    }
  });

  // Client events
  Template.petForm.events({
    "submit .new-pet": function (event) {

      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var name = event.target.name.value;

      // Insert a pet into the collection
      Meteor.call("addPet", name);

      // Clear form
      event.target.name.value = "";
    }
  });

  Template.petRow.events({
    "click .delete": function() {
      Meteor.call("deletePet", this._id);
    }
  });

}

if (Meteor.isServer) {
  Meteor.publish("pets", function () {
    return Pets.find();
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
