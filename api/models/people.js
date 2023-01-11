const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const People = sequelize.define(
   "People",
   {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
   },
   { paranoid: true }
);

module.exports = People;
