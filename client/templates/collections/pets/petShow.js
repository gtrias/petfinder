// Client events
Template.petsShow.helpers({
  images: function() {
    if (this.pictures) {
      images = Images.find({
        _id: { $in: this.pictures }
      });

      console.log(images);
      return images;
    }

    return false;
  }
});

// petShow Events
Template.petsShow.events({
  'click #chat': function () {
    alert('open chat');
  }
});
