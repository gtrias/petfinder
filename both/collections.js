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
  },
  createdBy: {
      type: String,
      autoValue: function() {
          return this.userId ? this.userId : "";
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
