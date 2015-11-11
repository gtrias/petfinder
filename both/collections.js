Pets = new Mongo.Collection("pets");

Pets.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Nom",
    max: 200
  },
  public: {
    type: Boolean,
    label: "Public?",
  },
  fileId: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "Images"
      }
    }
  }
}));

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});
