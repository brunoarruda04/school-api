const express = require("express");
const router = express.Router();

const PeopleController = require("../controllers/PeopleController");

// People Routes
router.get("/people", PeopleController.getPeople);
router.get("/people/:id", PeopleController.getPersonById);
router.post("/people", PeopleController.registerPerson);
router.put("/people/:id", PeopleController.updatePerson);
router.delete("/people/:id", PeopleController.removePerson);

module.exports = router;
