const express = require("express");
const router = express.Router();

const LevelsController = require("../controllers/LevelsController");

// Levels Routes
router.get("/levels", LevelsController.getLevels);
router.get("/levels/:id", LevelsController.getLevelById);
router.post("/levels/", LevelsController.registerLevel);
router.put("/levels/:id", LevelsController.updateLevel);
router.delete("/levels/:id", LevelsController.removeLevel);

module.exports = router;
