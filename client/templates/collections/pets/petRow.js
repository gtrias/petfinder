// Client events
Template.petRow.helpers({
  images: function() {
    if (this.pictures) {
      images = Images.find({
        _id: { $in: this.pictures }
      }).map(function (image, index){
        // Mark the first item
        if (index == 0)
          image.isFirst = true;
        return image;
      });

      return images;
    }

    return false;
  },
  isOwner: function() {
    return this.createdBy == this.userId ? true : false;
  }
});

Template.petRow.events({
    'click': function() {
        Router.go('pets.show', {_id: this._id});
    }
});
