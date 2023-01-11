const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Classes = sequelize.define(
   "Classes",
   {
      start_date: DataTypes.DATEONLY,
   },
   { paranoid: true }
);

module.exports = Classes;
