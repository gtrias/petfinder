Pets = new Mongo.Collection("pets");

if (Meteor.isClient) {

  Template.petList.helpers({
      pets: function() {
        return Pets.find({});
      }
  });

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

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
