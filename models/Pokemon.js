module.exports = (sequelize, DataTypes) => {
  const Pokemons = sequelize.define(
    "Pokemons",
    {
      name: DataTypes.STRING,

      pokdexNumer: DataTypes.STRING,

      generation: DataTypes.STRING,

      evolutionStage: DataTypes.STRING,

      evolved: DataTypes.STRING,

      familyID: DataTypes.STRING,

      type: DataTypes.STRING,

      weather: DataTypes.STRING,

      statTotal: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Pokemons;
};
