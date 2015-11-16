// Client events
Template.petRow.helpers({
  image: function(pictures) {
    if (pictures) {
      pictures[0];
      image = Images.findOne({
        _id: firstImage
      });

      console.log(image);

    }

    return false;
  }
});
