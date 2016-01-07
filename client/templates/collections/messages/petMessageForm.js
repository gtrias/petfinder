// Client events
var hooksObject = {
  before: {
    insert: function (doc) {
      var currentPet = Session.get('currentPet');
      // console.log(currentPet);
      doc.pet = currentPet._id;
      doc.receiver = currentPet.createdBy;
      return doc;
    }
  }
};

AutoForm.hooks({ petMessageForm: hooksObject });
