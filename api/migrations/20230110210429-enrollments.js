"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Enrollments", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },

         status: {
            allowNull: false,
            type: Sequelize.STRING,
         },

         PersonId: {
            allowNull: false,
            references: { model: "People", key: "id" },
            type: Sequelize.INTEGER,

            onDelete: "CASCADE",
            onUpdate: "CASCADE",
         },

         ClassId: {
            allowNull: false,
            references: { model: "Classes", key: "id" },
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
      await queryInterface.dropTable("Enrollments");
   },
};
