Template.petList.helpers({
  pets: function() {
    // Show newest pots on top
    return Pets.find({}, {sort: {createdAt: 1}});
  }
});
