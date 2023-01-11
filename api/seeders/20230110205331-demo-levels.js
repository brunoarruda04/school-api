"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
         "Levels",
         [
            {
               level_description: "beginner",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               level_description: "intermediate",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               level_description: "advanced",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Levels", null, {});
   },
};
