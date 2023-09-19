const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
const port = 8080;

app.use(cors());

require("./startup/routes")(app);

require("dotenv").config();

const server = db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});

module.exports = server;
