module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define("song", {
    title: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
  });
  return Song;
};