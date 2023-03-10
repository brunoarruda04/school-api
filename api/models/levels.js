const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Levels = sequelize.define(
   "Levels",
   {
      level_description: DataTypes.STRING,
   },
   { paranoid: true }
);

module.exports = Levels;
