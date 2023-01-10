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

         student_id: {
            allowNull: false,
            references: { model: "people", key: "id" },
            type: Sequelize.INTEGER,

            onUpdate: "CASCADE",
            onDelete: "CASCADE",
         },

         class_id: {
            allowNull: false,
            references: { model: "class", key: "id" },
            type: Sequelize.INTEGER,

            onUpdate: "CASCADE",
            onDelete: "CASCADE",
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
