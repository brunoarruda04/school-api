const express = require("express");
const router = express.Router();

const PeopleController = require("../controllers/PeopleController");

// People Routes
router.get("/people", PeopleController.getActivePeople);
router.get("/people/all", PeopleController.getPeople);
router.get("/people/:id", PeopleController.getPersonById);

router.post("/people", PeopleController.registerPerson);
router.post("/people/:id", PeopleController.restorePerson);

router.put("/people/:id", PeopleController.updatePerson);

router.delete("/people/:id", PeopleController.removePerson);

// People x Enrollments Routes
router.get("/people/:StudentId/enrollments/", PeopleController.getStudentEnrollments);
router.get("/people/:StudentId/enrollments/:EnrollmentId", PeopleController.getEnrollmentByStudent);

router.post("/people/:StudentId/enrollments/", PeopleController.registerEnrollment);

router.put("/people/:StudentId/enrollments/:EnrollmentId", PeopleController.updateEnrollment);

router.delete("/people/:StudentId/enrollments/:EnrollmentId", PeopleController.removeEnrollment);

module.exports = router;
