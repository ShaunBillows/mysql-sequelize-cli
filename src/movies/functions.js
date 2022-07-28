const { Movie } = require("./table");

exports.create = async (title, actor) => {
  try {
    newMovie = await Movie.create({
      title: title,
      actor: actor,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.read = async () => {
  try {
    const allMovies = await Movie.findAll();
    console.log("All Movies:", JSON.stringify(allMovies, null, 2));
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (oldTitle, oldActor, newTitle, newActor) => {
  try {
    await Movie.update(
      {
        title: newTitle,
        actor: newActor,
      },
      {
        where: {
          title: oldTitle,
          actor: oldActor,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.delete = async (title, actor) => {
  try {
    await Movie.destroy({
      where: {
        title: title,
        actor: actor,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteAll = async () => {
  await Movie.destroy({
    where: {},
  });
};
