const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

exports.Movie = sequelize.define("User", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
});
