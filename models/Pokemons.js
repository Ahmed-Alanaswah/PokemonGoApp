module.exports = (sequelize, DataTypes) => {
  const Pokemons = sequelize.define(
    "Pokemons",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      pokdexNumer: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      generation: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      evolutionStage: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      evolved: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      familyID: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      weather: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      statTotal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Pokemons;
};
