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
