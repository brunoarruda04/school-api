const Classes = require("../models/classes");

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
};
