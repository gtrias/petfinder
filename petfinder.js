Meteor.methods({
  addPet: function (name) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Pets.insert({
      name: name,
      public: true,
      createdAt: new Date(), // current time
      owner: Meteor.userId(), // User owner id
      username: Meteor.user().username // Username so we dont have to query each time
    });
  },

  deletePet: function (petId) {
    Pets.remove(petId);
  },
});

