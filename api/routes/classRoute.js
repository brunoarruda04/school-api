const express = require("express");
const router = express.Router();

const ClassesController = require("../controllers/ClassesController");

// Classes Routes
router.get("/classes", ClassesController.getClasses);
router.get("/classes/:id", ClassesController.getClassById);
router.post("/classes/", ClassesController.registerClass);
router.put("/classes/:id", ClassesController.updateClass);
router.delete("/classes/:id", ClassesController.removeClass);

// Classes x Enrollments Routes
router.get("/classes/:ClassId/enrollments/", ClassesController.getClassEnrollments);
router.get("/classes/:ClassId/enrollments/:EnrollmentId", ClassesController.getClassEnrollmentById);
router.post("/classes/:ClassId/enrollments/", ClassesController.registerEnrollment);
router.put("/classes/:ClassId/enrollments/:EnrollmentId", ClassesController.updateEnrollment);
router.delete("/classes/:ClassId/enrollments/:EnrollmentId", ClassesController.removeEnrollment);
module.exports = router;
