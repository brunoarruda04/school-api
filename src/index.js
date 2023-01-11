const express = require("express");
const { people, levels, classes } = require("../api/routes/index");

require("../api/config/associations");

const app = express();

app.use(express.json());
app.use(people, levels, classes);

app.listen(3000);
