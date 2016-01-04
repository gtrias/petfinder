// Messages collection
Messages = new Mongo.Collection("messages");

Messages.attachSchema(new SimpleSchema({
  message: {
    type: String,
    label: "Missatge",
    autoform: {
        rows: 10
    }
  },
  sender: {
      type: String,
      autoValue: function() {
          return this.userId ? this.userId : "";
      }
  },
  receiver: {
      type: String
  }
}));

Messages.allow({
  'insert': function () {
    if (! Meteor.userId()) {
      console.log("You are not allowed to chat without login.");
      throw new Meteor.Error("not-authorized");
    }

    // add custom authentication code here
    return true;
  },
  'update': function() {
    return false;
  },
});
