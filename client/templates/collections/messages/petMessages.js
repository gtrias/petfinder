Template.petMessages.helpers({
  messages: function() {
    // Show newest pots on top
    var currentPet = Session.get('currentPet');

    return Messages.find({ "pet": currentPet }, {sort: {createdAt: -1}});
  }
});
