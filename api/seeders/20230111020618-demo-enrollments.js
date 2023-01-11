module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
         "Enrollments",
         [
            {
               status: "confirmed",
               PersonId: 1,
               ClassId: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               status: "confirmed",
               PersonId: 2,
               ClassId: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               status: "confirmed",
               PersonId: 3,
               ClassId: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               status: "confirmed",
               PersonId: 4,
               ClassId: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               status: "canceled",
               PersonId: 1,
               ClassId: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               status: "canceled",
               PersonId: 2,
               ClassId: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Enrollments", null, {});
   },
};
