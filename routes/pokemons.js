const express = require("express");
const router = express.Router();
const { validatePokemon } = require("../middleware/validatePokemon");
const {
  createPokemon,
  fetchPokemons,
  filterPkemons,
  searchPokemons,
  getOnePokemons,
  deletePokemon,
  editPokemons,
} = require("../controllers/pokemon");

router.get("/", fetchPokemons);

router.get("/filter", filterPkemons);

router.get("/search", searchPokemons);

router.get("/:id", getOnePokemons);

router.post("/", validatePokemon, createPokemon);

router.put("/:id", editPokemons);

router.delete("/:id", deletePokemon);

module.exports = router;
