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
  },
  "change .file-uploader ": function (event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  }
});

Template.petRow.events({
  "click .delete": function() {
    Meteor.call("deletePet", this._id);
  }
});

