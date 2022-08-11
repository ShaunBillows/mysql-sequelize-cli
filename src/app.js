const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const Movies = require("./movies/functions");
const TvShows = require("./tv-shows/functions");
// const TvShows = require("./tv-shows/functions");

(async () => {
  let Entertainment;
  if (yargsObj.movies) {
    Entertainment = Movies;
  } else if (yargsObj.tvShows) {
    Entertainment = TvShows;
  } else {
    console.log("Incorrect command.");
  }

  await sequelize.sync({ alter: true });
  if (yargsObj.create) {
    await Entertainment.create(yargsObj.title, yargsObj.actor);
  } else if (yargsObj.read) {
    console.log("r");
    await Entertainment.read();
  } else if (yargsObj.update) {
    await Entertainment.update(
      yargsObj.oldTitle,
      yargsObj.oldActor,
      yargsObj.newTitle,
      yargsObj.newActor
    );
  } else if (yargsObj.delete) {
    await Entertainment.delete(yargsObj.title, yargsObj.actor);
  } else if (yargsObj.deleteAll) {
    await Entertainment.deleteAll();
  } else {
    console.log("Incorrect command.");
  }
})((yargsObj = yargs.argv));
