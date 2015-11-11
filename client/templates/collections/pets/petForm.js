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
