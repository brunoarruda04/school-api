const People = require("../models/people");
const Enrollments = require("../models/enrollments");
const { database } = require("../config/config");

module.exports = {
   // LISTING ALL REGISTERED PEOPLE
   async getPeople(req, res) {
      try {
         const people = await People.scope("all").findAll();
         return res.status(200).json(people);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // LISTING ALL ACTIVE REGISTERED PEOPLE
   async getActivePeople(req, res) {
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
      const { name, active, email, role } = req.body;
      try {
         const person = await People.create({ name, active, email, role });
         return res.status(201).json(person);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // UPDATING A PERSON
   async updatePerson(req, res) {
      const { name, active, email, role } = req.body;
      try {
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

   // RESTORE A DELETED PERSON
   async restorePerson(req, res) {
      const { id } = req.params;
      try {
         await People.restore({
            where: {
               id: id,
            },
         });
         return res.status(200).send("Person restored succesfully.");
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // PEOPLE X ENROLLMENTS METHODS
   // LISTING ALL STUDENT'S ENROLLMENTS
   async getStudentEnrollments(req, res) {
      const { StudentId } = req.params;
      try {
         const person = await People.findOne({
            where: {
               id: StudentId,
            },
         });
         const enrollments = await person.getClassEnrollments();
         return res.status(200).json(enrollments);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // LISTING A STUDENT'S ENROLLMENT BY ID
   async getEnrollmentByStudent(req, res) {
      const { StudentId, EnrollmentId } = req.params;
      try {
         const enrollment = await Enrollments.findOne({
            where: {
               id: Number(EnrollmentId),
               PersonId: Number(StudentId),
            },
         });
         return res.status(200).json(enrollment);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // REGISTERING A NEW ENROLLMENT
   async registerEnrollment(req, res) {
      const { StudentId } = req.params;
      const enrollment = { ...req.body, PersonId: Number(StudentId) };
      try {
         const enrollments = await Enrollments.create(enrollment);
         return res.status(201).json(enrollments);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // UPDATING A ENROLLMENT
   async updateEnrollment(req, res) {
      const { StudentId, EnrollmentId } = req.params;
      const enrollment = { ...req.body, PersonId: StudentId };
      try {
         await Enrollments.update(enrollment, {
            where: {
               id: EnrollmentId,
            },
         });
         return res.status(202).json("Register updated successfully.");
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // REMOVING A ENROLLMENT
   async removeEnrollment(req, res) {
      try {
         await Enrollments.destroy({
            where: {
               id: req.params.EnrollmentId,
            },
         });
         return res.status(200).send("Register removed succesfully.");
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },
};
