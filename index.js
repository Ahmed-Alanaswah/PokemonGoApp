const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
const port = 3000;

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

require("dotenv").config();

const server = db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("server running on port 3000");
  });
});

module.exports = server;
