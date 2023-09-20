const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  storage: ":memory:",
  username: "name",
  password: "1234",
  // logging: false,
});

module.exports = sequelize;
