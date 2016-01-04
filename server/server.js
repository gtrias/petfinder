Meteor.publish("pets", function () {
  return Pets.find({
    /* $or: [
       { public: {$ne: true} },
       ] */
  });
});

Meteor.publish("messages", function () {
  return Messages.find({});
});

Meteor.publish("images", function () {
  return Images.find({
  });
});

Meteor.startup(function () {
  // code to run on server at startup
});

