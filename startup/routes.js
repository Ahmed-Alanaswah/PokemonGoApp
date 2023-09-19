const express = require("express");
const pokemonRouter = require("../routes/pokemons");
const { error } = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/pokemons", pokemonRouter);
  app.use(error);
};
