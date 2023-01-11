const People = require("../models/people");
const Levels = require("../models/levels");
const Class = require("../models/class");
const Enrollments = require("../models/enrollments");

// PEOPLE X ENROLLMENTS ASSOCIATION
People.hasMany(Enrollments, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Enrollments.belongsTo(People, { foreignKey: "student_id", as: "people" });

// PEOPLE X CLASS ASSOCIATION
People.hasMany(Class, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Class.belongsTo(People, { foreignKey: "teacher_id", as: "people" });

// LEVEL X CLASS ASSOCIATION
Levels.hasMany(Class, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Class.belongsTo(Levels, { foreignKey: "level_id", as: "levels" });

// CLASS X ENROLLMENTS ASSOCIATION
Class.hasMany(Enrollments, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Enrollments.belongsTo(Class, { foreignKey: "class_id", as: "class" });

module.exports = { People, Levels, Class, Enrollments };
