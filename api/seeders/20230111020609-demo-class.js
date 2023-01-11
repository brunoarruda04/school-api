module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
         "Classes",
         [
            {
               start_date: "2020-02-01",
               LevelId: 1,
               PersonId: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               start_date: "2020-02-01",
               LevelId: 2,
               PersonId: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               start_date: "2020-02-01",
               LevelId: 3,
               PersonId: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               start_date: "2020-07-01",
               LevelId: 3,
               PersonId: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Classes", null, {});
   },
};
