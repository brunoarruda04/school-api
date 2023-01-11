const Levels = require("../models/levels");

module.exports = {
   // LISTING LEVELS
   async getLevels(req, res) {
      try {
         const levels = await Levels.findAll();
         return res.status(200).json(levels);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // LISTING A LEVEL BY ID
   async getLevelById(req, res) {
      try {
         const level = await Levels.findByPk(req.params.id);
         return res.status(200).json(level);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // REGISTERING A NEW LEVEL
   async registerLevel(req, res) {
      try {
         const { level_description } = req.body;
         const level = await Levels.create({ level_description });
         return res.status(201).json(level);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   },

   // UPDATING A LEVEL
   async updateLevel(req, res) {
      const { level_description } = req.body;
      try {
         await Levels.update(
            { level_description },
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

   // REMOVING A LEVEL
   async removeLevel(req, res) {
      try {
         await Levels.destroy({
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
