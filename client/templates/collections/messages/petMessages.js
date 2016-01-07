Template.petMessages.helpers({
  messages: function() {
    // Show newest pots on top
    var currentPet = Session.get('currentPet');

    return Messages.find({
      "pet": currentPet._id,
      $or: [
        { receiver: Meteor.userId() },
        { sender: Meteor.userId() }
      ]},
      { sort: {createdAt: -1} });
  }
});
