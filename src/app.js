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

// const app = async (yargsObj) => {
//   let Entertainment;

//   if (yargsObj.movies) {
//     Entertainment = Movies;
//   } else if (yargsObj.tvShows) {
//     Entertainment = TvShows;
//   } else {
//     console.log("Incorrect command.");
//   }

//   await sequelize.sync({ alter: true });
//   if (yargsObj.create) {
//     await Entertainment.create(yargsObj.title, yargsObj.actor);
//   } else if (yargsObj.read) {
//     console.log("r");
//     await Entertainment.read();
//   } else if (yargsObj.update) {
//     await Entertainment.update(
//       yargsObj.oldTitle,
//       yargsObj.oldActor,
//       yargsObj.newTitle,
//       yargsObj.newActor
//     );
//   } else if (yargsObj.delete) {
//     await Entertainment.delete(yargsObj.title, yargsObj.actor);
//   } else if (yargsObj.deleteAll) {
//     await Entertainment.deleteAll();
//   } else {
//     console.log("Incorrect command.");
//   }
// };

// app(yargs.argv);

// node src/app --movies --read
// node src/app --movies --create --title "spiderman 3" --actor "tom holland"
// node src/app --movies --update --oldTitle spiderman --oldActor "tom holland" --newTitle "spiderman 4" --newActor "toby mcguire"
// node src/app --movies --delete --title "spiderman 2" --actor "toby mcguire"
// node src/app --movies --deleteAll

// node src/app --tvShows --read
// node src/app --tvShows --create --title "spiderman 3" --actor "tom holland"
// node src/app --tvShows --update --oldTitle spiderman --oldActor "tom holland" --newTitle "spiderman 4" --newActor "toby mcguire"
// node src/app --tvShows --delete --title "spiderman 2" --actor "toby mcguire"
// node src/app --tvShows --deleteAll
