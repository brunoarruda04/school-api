const People = require("../models/people");
const Levels = require("../models/levels");
const Classes = require("../models/classes");
const Enrollments = require("../models/enrollments");

// PEOPLE X ENROLLMENTS ASSOCIATION
People.hasMany(Enrollments, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Enrollments.belongsTo(People, { foreignKey: "PersonId", as: "People" });

// PEOPLE X CLASS ASSOCIATION
People.hasMany(Classes, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Classes.belongsTo(People, { foreignKey: "PersonId", as: "People" });

// LEVEL X CLASS ASSOCIATION
Levels.hasMany(Classes, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Classes.belongsTo(Levels, { foreignKey: "LevelId", as: "Levels" });

// CLASS X ENROLLMENTS ASSOCIATION
Classes.hasMany(Enrollments, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Enrollments.belongsTo(Classes, { foreignKey: "ClassId", as: "Classes" });

module.exports = { People, Levels, Classes, Enrollments };
