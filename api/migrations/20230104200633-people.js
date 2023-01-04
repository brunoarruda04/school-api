"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("people", {
         id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         role: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         createdAt: {
            type: Sequelize.DATE,
         },
         updatedAt: {
            type: Sequelize.DATE,
         },
      });
   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("people");
   },
};
