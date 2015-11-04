Pets = new Mongo.Collection("pets");

if (Meteor.isClient) {

  // Client helpers
  Template.petList.helpers({
      pets: function() {
        // Show newest pots on top
        return Pets.find({}, {sort: {createdAt: -1}});
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

      // Insert a task into the collection
      Pets.insert({
        name: name,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.name.value = "";
    }
  });

  Template.petRow.events({
    "click .delete": function() {
      Pets.remove(this._id);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
