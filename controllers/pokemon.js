const { Pokemons } = require("../models");

async function createPokemon(req, res) {
  try {
    const Pokemon = req.body;
    await Pokemons.create(Pokemon);
    res.status(201).json(Pokemon);
  } catch (error) {
    res.status(500);
    res.send({ error: "Internal server error" });
  }
}

async function fetchPokemons(req, res) {
  const listOfPokemons = await Pokemons.findAll();

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const items = listOfPokemons.slice(startIndex, endIndex);

  res.status(200);
  res.json({
    items,
    currentPage: page,
    totalPages: Math.ceil(listOfPokemons.length / limit),
  });
}

async function filterPkemons(req, res) {
  const listOfPokemons = await Pokemons.findAll();

  const type = req.query.type;
  const evolutionStage = req.query.evolutionStage;

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
}

function searchFunction(data, query) {
  if (!query) {
    return data;
  }

  const lowerCaseQuery = query.toLowerCase();

  return data.filter((item) => {
    return (
      item.name?.toLowerCase().includes(lowerCaseQuery) ||
      item.weather?.toLowerCase().includes(lowerCaseQuery) ||
      item.type?.toLowerCase().includes(lowerCaseQuery) ||
      item.evolutionStage?.toLowerCase().includes(lowerCaseQuery)
    );
  });
}

async function searchPokemons(req, res) {
  const listOfPokemons = await Pokemons.findAll();

  const query = req.query.querySearch;

  const results = searchFunction(listOfPokemons, query);

  res.json({ results });
}

async function getOnePokemons(req, res) {
  const id = req.params.id;
  const Pokemon = await Pokemons.findByPk(id);
  res.json(Pokemon);
}

async function deletePokemon(req, res) {
  try {
    const pokemonId = req.params.id;
    await Pokemons.destroy({ where: { id: pokemonId } });
    res.status(200);
    res.json({ message: "Pokemon deleted successfully" });
  } catch (error) {
    res.status(500);
    res.json({ error: "Internal server error", message: error.message });
  }
}

async function editPokemons(req, res) {
  const pokemonId = req.params.id;
  const updatedPokemon = req.body;

  try {
    const pokemon = await Pokemons.findByPk(pokemonId);

    if (!pokemon) {
      res.status(404);
      res.json({ message: "pokemon not found" });
    }

    await pokemon.update(updatedPokemon);
    res.json({ message: "pokemon updated successfully" });
  } catch (error) {
    console.error("Error updating pokemon:", error);
    res.status(500);
    res.json({ message: "Internal server error" });
  }
}

module.exports = {
  createPokemon,
  fetchPokemons,
  filterPkemons,
  searchPokemons,
  getOnePokemons,
  deletePokemon,
  editPokemons,
};
