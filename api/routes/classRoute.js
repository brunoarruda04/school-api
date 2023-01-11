const express = require("express");
const router = express.Router();

const ClassesController = require("../controllers/ClassesController");

// Classes Routes
router.get("/classes", ClassesController.getClass);
router.get("/classes/:id", ClassesController.getClassById);
router.post("/classes/", ClassesController.registerClass);
router.put("/classes/:id", ClassesController.updateClass);
router.delete("/classes/:id", ClassesController.removeClass);

module.exports = router;
