const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Enrollments = sequelize.define("Enrollments", {
   status: DataTypes.STRING,
});

module.exports = Enrollments;
