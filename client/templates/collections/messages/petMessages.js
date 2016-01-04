Template.petMessages.helpers({
  messages: function() {
    // Show newest pots on top
    return Messages.find({}, {sort: {createdAt: -1}});
  }
});
