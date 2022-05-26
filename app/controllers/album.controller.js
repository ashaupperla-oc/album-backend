const db = require("../models");
const Album = db.albums;
const Op = db.Sequelize.Op;
// Create and Save a new Album
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Album
  const album = {
    title: req.body.title,
    artist: req.body.artist,
    published: req.body.published ? req.body.published : false
  };
  // Save Album in the database
  Album.create(album)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Album."
      });
    });
};
