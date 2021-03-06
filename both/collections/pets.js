// Pets collection
Pets = new Mongo.Collection("pets");

Pets.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Nom",
    max: 200
  },
  description: {
    type: String,
    label: "Descripció",
    autoform: {
        rows: 10
    }
  },
  public: {
    type: Boolean,
    optional: true,
    label: "Public?",
    autoValue: function() {
        return true;
    }
  },
  pictures: {
    type: [String],
    optional: true,
    label: "Puja fotos de la mascota",
  },
  'pictures.$': {
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        accept: 'image/*',
        collection: 'Images',
        selectFileBtnTemplate: 'selectFileButton',
      }
    }
  },
  /* location: {
    type: String,
    optional: true,
    autoform: {
      type: "map",
      afFieldInput: {
        geolocation: true,
        searchBox: true,
        autolocate: true
      }
    }
  }, */
  createdBy: {
      type: String,
      autoValue: function() {
          return this.userId ? this.userId : "";
      }
  }
}));

// Deprecated, ?
Meteor.methods({
  addPet: function (name, description) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      console.log("You are not allowed to insert without login.");
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

Pets.allow({
  'insert': function () {
    if (! Meteor.userId()) {
      console.log("You are not allowed to insert without login.");
      throw new Meteor.Error("not-authorized");
    }

    // add custom authentication code here
    return true;
  },
  'update': function() {
    return true;
  },
});
