const { pokemonSchema } = require("../validations/validationPokemon");

const validatePokemon = async (req, res, next) => {
  try {
    const pokemon = req.body;

    await pokemonSchema.validateAsync(pokemon);

    next();
  } catch (error) {
    if (error.isJoi) {
      return res.status(400).json({ error: error.details[0].message });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { validatePokemon };
