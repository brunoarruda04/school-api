const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const People = sequelize.define(
   "People",
   {
      name: {
         type: DataTypes.STRING,
         validate: {
            validateName: function (data) {
               if (data.length < 3) throw new Error("Field name need to have at least 3 characters");
            },
         },
      },
      active: DataTypes.BOOLEAN,
      email: {
         type: DataTypes.STRING,
         validate: {
            isEmail: {
               args: true,
               msg: "E-mail invalid",
            },
         },
      },
      role: DataTypes.STRING,
   },
   {
      paranoid: true,
      defaultScope: {
         where: {
            active: true,
         },
      },
      scopes: {
         all: {
            where: {},
         },
      },
   }
);

module.exports = People;
