const Classes = require("../models/classes");
const Enrollments = require("../models/enrollments");

module.exports = {
   // LISTING CLASSES
   async getClass(req, res) {
      try {
         const classes = await Classes.findAll();
         return res.status(200).json(classes);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // LISTING A CLASS BY ID
   async getClassById(req, res) {
      try {
         const classes = await Classes.findByPk(req.params.id);
         return res.status(200).json(classes);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // REGISTERING A NEW CLASS
   async registerClass(req, res) {
      try {
         const newClass = req.body;
         const classes = await Classes.create(newClass);
         return res.status(201).json(classes);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // UPDATING A CLASS
   async updateClass(req, res) {
      const newClass = req.body;
      try {
         await Classes.update(newClass, {
            where: {
               id: req.params.id,
            },
         });
         return res.status(202).json("Register updated successfully.");
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // REMOVING A CLASS
   async removeClass(req, res) {
      try {
         await Classes.destroy({
            where: {
               id: req.params.id,
            },
         });
         return res.status(200).send("Register removed succesfully.");
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // CLASSES X ENROLLMENTS METHODS
   // LISTING ALL CLASS'S ENROLLMENTS
   async getStudentEnrollments(req, res) {
      const { ClassId } = req.params;
      try {
         const enrollments = await Enrollments.findAll({
            where: {
               ClassId: ClassId,
            },
         });
         return res.status(200).json(enrollments);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // LISTING A CLASS'S ENROLLMENT BY ID
   async getEnrollmentByStudent(req, res) {
      const { ClassId, EnrollmentId } = req.params;
      try {
         const enrollment = await Enrollments.findOne({
            where: {
               id: Number(EnrollmentId),
               ClassId: Number(ClassId),
            },
         });
         return res.status(200).json(enrollment);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // REGISTERING A NEW ENROLLMENT
   async registerEnrollment(req, res) {
      const { ClassId } = req.params;
      const enrollment = { ...req.body, ClassId: Number(ClassId) };
      try {
         const enrollments = await Enrollments.create(enrollment);
         return res.status(201).json(enrollments);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // UPDATING A ENROLLMENT
   async updateEnrollment(req, res) {
      const { ClassId, EnrollmentId } = req.params;
      const enrollment = { ...req.body, ClassId: ClassId };
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
