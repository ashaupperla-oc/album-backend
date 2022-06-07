module.exports = app => {
  const songs = require("../controllers/song.controller.js");
  var router = require("express").Router();
  // Create a new Song for a Album
  router.post("/:albumId/songs/", songs.create);
  // Retrieve all Songs for a Album
  router.get("/:albumId/songs/", songs.findAll);
  // Retrieve a single Song with id
  router.get("/:albumId/songs/:id", songs.findOne);
  // Update a Song with id
  router.put("/:albumId/songs/:id", songs.update);
  // Delete a Song with id
  router.delete("/:albumId/songs/:id", songs.delete);
  // Delete all Songs
  router.delete("/:albumId/songs/:id", songs.deleteAll);
  app.use('/api/albums', router);
};