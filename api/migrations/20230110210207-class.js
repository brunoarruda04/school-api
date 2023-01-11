"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Class", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },

         teacher_id: {
            allowNull: false,
            references: { model: "People", key: "id" },
            type: Sequelize.INTEGER,

            onDelete: "CASCADE",
            onUpdate: "CASCADE",
         },

         start_date: {
            allowNull: false,
            type: Sequelize.DATEONLY,
         },

         level_id: {
            allowNull: false,
            references: { model: "Levels", key: "id" },
            type: Sequelize.INTEGER,

            onDelete: "CASCADE",
            onUpdate: "CASCADE",
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
      await queryInterface.dropTable("Class");
   },
};
