// Pets collection
Pets = new Mongo.Collection("pets");

Pets.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Nom",
    max: 200
  },
  public: {
    type: Boolean,
    optional: true,
    label: "Public?",
  },
  pictures: {
    type: [String],
    optional: true,
    label: "Fotos",
  },
  'pictures.$': {
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        accept: 'image/*',
        collection: 'Images',
      }
    }
  },
  location: {
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
  }
}));

Pets.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'update': function() {
    return true;
  },
});

// Images collection
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'update': function() {
    return true;
  },
  'download': function () {
    return true;
  }
});
