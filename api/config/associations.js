const People = require("../models/people");
const Levels = require("../models/levels");
const Classes = require("../models/classes");
const Enrollments = require("../models/enrollments");

// PEOPLE X ENROLLMENTS ASSOCIATION
People.hasMany(Enrollments);
Enrollments.belongsTo(People, { foreignKey: "PersonId", as: "People" });

// PEOPLE X CLASS ASSOCIATION
People.hasMany(Classes);
Classes.belongsTo(People, { foreignKey: "PersonId", as: "People" });

// LEVEL X CLASS ASSOCIATION
Levels.hasMany(Classes);
Classes.belongsTo(Levels, { foreignKey: "LevelId", as: "Levels" });

// CLASS X ENROLLMENTS ASSOCIATION
Classes.hasMany(Enrollments);
Enrollments.belongsTo(Classes, { foreignKey: "ClassId", as: "Classes" });

module.exports = { People, Levels, Classes, Enrollments };
