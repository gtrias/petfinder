// Client events
Template.petsShow.helpers({
  images: function() {
    if (this.pictures) {
      images = Images.find({
        _id: { $in: this.pictures }
      });

      return images;
    }

    return false;
  }
});

// petShow Events
Template.petsShow.events({
  'click #chat': function () {
    Router.go('pets.chat', {_id: this._id});
  }
});
