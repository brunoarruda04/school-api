const People = require("../models/people");
const Levels = require("../models/levels");
const Class = require("../models/class");
const Enrollments = require("../models/enrollments");

People.hasMany(Enrollments);
People.hasMany(Class);

Levels.hasMany(Class);

Class.hasMany(Enrollments);
