const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const People = sequelize.define("people", {
   name: DataTypes.STRING,
   active: DataTypes.BOOLEAN,
   email: DataTypes.STRING,
   role: DataTypes.STRING,
});

module.exports = People;
