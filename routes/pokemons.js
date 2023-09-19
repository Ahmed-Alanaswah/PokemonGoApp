const express = require("express");
const router = express.Router();
const { Pokemons } = require("../models");
const { validatePokemon } = require("../middleware/validatePokemon");

router.get("/", async (req, res) => {
  const listOfPokemons = await Pokemons.findAll();

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const items = listOfPokemons.slice(startIndex, endIndex);

  res.json({
    items,
    currentPage: page,
    totalPages: Math.ceil(listOfPokemons.length / limit),
  });
});

router.get("/filter", async (req, res) => {
  const listOfPokemons = await Pokemons.findAll();

  const { type, evolutionStage } = req.query;

  let filteredData = listOfPokemons;

  if (type) {
    filteredData = filteredData.filter((item) => item.type === type);
  }

  if (evolutionStage) {
    filteredData = filteredData.filter(
      (item) => item.evolutionStage === evolutionStage
    );
  }

  res.json({ filteredData });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const Pokemon = await Pokemons.findByPk(id);
  res.json(Pokemon);
});

router.post("/", validatePokemon, async (req, res) => {
  try {
    const Pokemon = req.body;
    await Pokemons.create(Pokemon);
    res.json(Pokemon);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  const pokemonId = req.params.id;
  const updatedPokemon = req.body;

  try {
    const pokemon = await Pokemons.findByPk(pokemonId);

    if (!pokemon) {
      return res.status(404).json({ message: "pokemon not found" });
    }

    await pokemon.update(updatedPokemon);
    res.json({ message: "pokemon updated successfully" });
  } catch (error) {
    console.error("Error updating pokemon:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pokemonId = req.params.id;
    await Pokemons.destroy({ where: { id: pokemonId } });
    res.status(200).json({ message: "Pokemon deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});

module.exports = router;
