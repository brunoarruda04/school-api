const Sequelize = require("sequelize");
const database = require("../config/sequelize");

const sequelize = new Sequelize(database);

module.exports = sequelize;
