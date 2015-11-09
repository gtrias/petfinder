Images.allow({
  'insert': function () {
    // add custom authentication code here
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

Meteor.startup(function () {
  // code to run on server at startup
});

