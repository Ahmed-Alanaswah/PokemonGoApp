const express = require("express");
require("express-async-errors");
const cors = require("cors");
const db = require("./models");

const app = express();
const port = 8080;

app.use(cors());

require("./startup/routes")(app);

const server = db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});

module.exports = server;
