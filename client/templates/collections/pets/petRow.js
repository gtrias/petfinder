// Client events
Template.petRow.helpers({
  image: function() {
    if (this.pictures) {
      image = Images.findOne({
        _id: this.pictures[0]
      });

      return image;
    }

    return false;
  }
});
