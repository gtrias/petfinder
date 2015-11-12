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

Meteor.publish("pets", function () {
  return Pets.find({
    /* $or: [
       { public: {$ne: true} },
       ] */
  });
});

Meteor.publish("images", function () {
  return Images.find({
  });
});

Meteor.startup(function () {
  // code to run on server at startup
});

