const express = require("express");
const routes = require("../api/routes/index");

require("../api/config/associations");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);
