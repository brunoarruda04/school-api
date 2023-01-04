const { sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const People = sequelize.define("people", {
   name: DataTypes.STRING,
   active: DataTypes.BOOLEAN,
   email: DataTypes.STRING,
   role: DataTypes.STRING,
});

module.exports = People;
