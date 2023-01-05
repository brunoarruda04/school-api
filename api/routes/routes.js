const express = require("express");
const routes = express.Router();

const PeopleController = require("../controllers/PeopleController");

routes.get("/people", PeopleController.getPeople);
routes.get("/people/:id", PeopleController.getPersonById);
routes.post("/people", PeopleController.registerPerson);
routes.put("/people/:id", PeopleController.updatePerson);
routes.delete("/people/:id", PeopleController.removePerson);

module.exports = routes;
