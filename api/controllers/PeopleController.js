const People = require("../models/people");

module.exports = {
   // LISTING ALL REGISTERED PEOPLE
   async getPeople(req, res) {
      try {
         const people = await People.findAll();
         return res.status(200).json(people);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // LISTING A REGISTERED PERSON BY ID
   async getPersonById(req, res) {
      try {
         const people = await People.findByPk(req.params.id);
         return res.status(200).json(people);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // REGISTERING A NEW PERSON
   async registerPerson(req, res) {
      try {
         const { name, active, email, role } = req.body;
         const person = await People.create({ name, active, email, role });
         return res.status(201).json(person);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // UPDATING A PERSON
   async updatePerson(req, res) {
      try {
         const { name, active, email, role } = req.body;
         await People.update(
            { name, active, email, role },
            {
               where: {
                  id: req.params.id,
               },
            }
         );
         return res.status(202).json("Register updated successfully.");
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // REMOVING A PERSON
   async removePerson(req, res) {
      try {
         await People.destroy({
            where: {
               id: req.params.id,
            },
         });
         return res.status(200).send("Register removed succesfully.");
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },
};
