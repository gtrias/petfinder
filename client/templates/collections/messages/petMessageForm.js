// Client events
var hooksObject = {
  before: {
    insert: function (doc) {
      var currentPet = Session.get('currentPet');
      // console.log(currentPet);
      doc.pet = currentPet;
      return doc;
    }
  }
};

AutoForm.hooks({ petMessageForm: hooksObject });
