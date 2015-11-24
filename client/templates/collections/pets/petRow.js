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
