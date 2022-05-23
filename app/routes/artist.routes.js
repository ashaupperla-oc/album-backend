module.exports = app => {
  const artists = require("../controllers/artist.controller.js");
  var router = require("express").Router();
  // Create a new Artist for a Album
  router.post("/:albumId/artists/", artists.create);
  // Retrieve all Artists for a Album
  router.get("/:albumId/artists/", artists.findAll);
  // Retrieve all published Artists for a Album
  router.get("/:albumId/artists/published", artists.findAllPublished);
  // Retrieve a single Artist with id
  router.get("/:albumId/artists/:id", artists.findOne);
  // Update a Artist with id
  router.put("/:albumId/artists/:id", artists.update);
  // Delete a Artist with id
  router.delete("/:albumId/artists/:id", artists.delete);
  // Delete all Artists
  router.delete("/:albumId/artists/:id", artists.deleteAll);
  app.use('/api/albums', router);
};