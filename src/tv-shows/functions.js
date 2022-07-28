const { TvShow } = require("./table");

exports.create = async (title, actor) => {
  try {
    newMovie = await TvShow.create({
      title: title,
      actor: actor,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.read = async () => {
  try {
    const allTvShows = await TvShow.findAll();
    console.log("All Movies:", JSON.stringify(allTvShows, null, 2));
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (oldTitle, oldActor, newTitle, newActor) => {
  try {
    await TvShow.update(
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
    await TvShow.destroy({
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
  await TvShow.destroy({
    where: {},
  });
};
