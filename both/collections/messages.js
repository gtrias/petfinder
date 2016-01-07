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
  pet: {
    type: String,
    optional: true
  },
  sender: {
    type: String,
    autoValue: function() {
      return this.userId ? this.userId : "";
    }
  }
}));

Messages.allow({
  'insert': function () {
    console.log("adding new message");

    if (! Meteor.userId()) {
      console.log("You are not allowed to chat without login.");
      throw new Meteor.Error("not-authorized");
    }

    // add custom authentication code here
    return true;
  },
  'update': function() {
    if (! Meteor.userId()) {
      console.log("You are not allowed to chat without login.");
      throw new Meteor.Error("not-authorized");
    }

    return true;
  },
});
