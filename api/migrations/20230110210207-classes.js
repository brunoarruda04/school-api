"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Classes", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },

         PersonId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: { model: "People", key: "id" },
         },

         start_date: {
            allowNull: false,
            type: Sequelize.DATEONLY,
         },

         LevelId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: { model: "Levels", key: "id" },
         },

         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },

         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Classes");
   },
};
