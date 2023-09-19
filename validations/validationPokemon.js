const Joi = require("joi");

const pokemonSchema = Joi.object({
  name: Joi.string().required(),

  pokdexNumer: Joi.string().required(),

  generation: Joi.string().required(),

  evolutionStage: Joi.string().required(),

  evolved: Joi.string().required(),

  familyID: Joi.string().required(),

  type: Joi.string().required(),

  weather: Joi.string().required(),

  statTotal: Joi.string().required(),
});

module.exports = { pokemonSchema };
