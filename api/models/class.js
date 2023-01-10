const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Class = sequelize.define("Class", {
   start_date: DataTypes.DATEONLY,
});

module.exports = Class;
