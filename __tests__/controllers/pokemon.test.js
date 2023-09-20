const {
  createPokemon,
  fetchPokemons,
  filterPkemons,
  searchPokemons,
  getOnePokemons,
  deletePokemon,
  editPokemons,
} = require("../../controllers/pokemon");
const { Pokemons } = require("../../models");
jest.mock("../../models");

const request = {
  query: {
    page: "1", // Include the 'page' query parameter in your test request
    type: "one",
    querySearch: "ahmed",
  },
  params: {
    id: "3",
  },
  body: {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
};

const response = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
  json: jest.fn(),
};

const mockPokemonData = [
  {
    name: "ahmed",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "one",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "evolved",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    id: "3",
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    id: "4",
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
  {
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  },
];

it("should fetch pokemons", async () => {
  Pokemons.findAll.mockResolvedValue(mockPokemonData);
  await fetchPokemons(request, response);

  expect(response.status).toHaveBeenCalledWith(200);
  expect(response.json).toHaveBeenCalledWith({
    items: mockPokemonData.slice(0, 10),
    currentPage: 1,
    totalPages: Math.ceil(mockPokemonData.length / 10),
  });
});

it("should fetch filtered pokemons", async () => {
  Pokemons.findAll.mockResolvedValue(mockPokemonData);
  await filterPkemons(request, response);

  expect(response.json).toHaveBeenCalledWith({
    filteredData: [
      {
        name: "ahmed",
        pokdexNumer: "fake",
        generation: "fake",
        evolutionStage: "fake",
        evolved: "fake",
        familyID: "fake",
        type: "one",
        weather: "fake",
        statTotal: "fake",
      },
    ],
  });
});

it("should fetch filtered pokemons", async () => {
  const requestFilter = {
    query: {
      evolutionStage: "evolved",
    },
  };

  Pokemons.findAll.mockResolvedValue(mockPokemonData);
  await filterPkemons(requestFilter, response);

  expect(response.json).toHaveBeenCalledWith({
    filteredData: [
      {
        name: "fake",
        pokdexNumer: "fake",
        generation: "fake",
        evolutionStage: "evolved",
        evolved: "fake",
        familyID: "fake",
        type: "fake",
        weather: "fake",
        statTotal: "fake",
      },
    ],
  });
});

it("should fetch searched pokemons", async () => {
  Pokemons.findAll.mockResolvedValue(mockPokemonData);
  await searchPokemons(request, response);

  expect(response.json).toHaveBeenCalledWith({
    results: [
      {
        name: "ahmed",
        pokdexNumer: "fake",
        generation: "fake",
        evolutionStage: "fake",
        evolved: "fake",
        familyID: "fake",
        type: "one",
        weather: "fake",
        statTotal: "fake",
      },
    ],
  });
});

it("should fetch searched pokemons without query", async () => {
  Pokemons.findAll.mockResolvedValue(mockPokemonData);
  const request = {
    query: {
      querySearch: null,
    },
  };

  await searchPokemons(request, response);

  expect(response.json).toHaveBeenCalledWith({
    results: mockPokemonData,
  });
});

it("should fetch one pokemon", async () => {
  const mockPokemon = {
    id: "3",
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  };

  Pokemons.findByPk.mockResolvedValue(mockPokemon);

  await getOnePokemons(request, response);

  expect(response.json).toHaveBeenCalledWith(mockPokemon);
});

it("should delete one pokemon", async () => {
  const pokemonIdToDelete = "3";
  Pokemons.destroy.mockResolvedValue(1);

  const deleteRequest = {
    params: {
      id: pokemonIdToDelete,
    },
  };

  await deletePokemon(deleteRequest, response);

  expect(response.status).toHaveBeenCalledWith(200);
  expect(response.json).toHaveBeenCalledWith({
    message: "Pokemon deleted successfully",
  });
});

it("should handle errors in deletePokemon", async () => {
  const error = new Error("An error occurred while deleting the Pokemon");
  Pokemons.destroy.mockRejectedValue(error);

  const deleteRequest = {
    params: {
      id: "3",
    },
  };

  await deletePokemon(deleteRequest, response);

  expect(response.status).toHaveBeenCalledWith(500);
  expect(response.json).toHaveBeenCalledWith({
    error: "Internal server error",
    message: "An error occurred while deleting the Pokemon",
  });
});

it("should send a status code 500  when creat pokemosn", async () => {
  await createPokemon(request, response);
  expect(response.status).toHaveBeenCalledWith(500);
  expect(response.send).toHaveBeenCalledTimes(1);
});

it("should create pokemon", async () => {
  await createPokemon(request, response);
  Pokemons.create.mockResolvedValueOnce({
    name: "ahmed",
    pokdexNumer: "1",
    generation: "1",
    evolutionStage: "1",
    evolved: "1",
    familyID: "1",
    type: "1",
    weather: "1",
    statTotal: "1",
  });
  expect(Pokemons.create).toHaveBeenCalledWith({
    name: "fake",
    pokdexNumer: "fake",
    generation: "fake",
    evolutionStage: "fake",
    evolved: "fake",
    familyID: "fake",
    type: "fake",
    weather: "fake",
    statTotal: "fake",
  });
  expect(response.status).toHaveBeenCalledWith(201);
});

it("should update one pokemon", async () => {
  const pokemonId = "3";
  const updatedPokemonData = {
    name: "ahmed",
    pokdexNumer: "1",
    generation: "1",
    evolutionStage: "1",
    evolved: "1",
    familyID: "1",
    type: "grass",
    weather: "Sunny/clear",
    statTotal: "326",
  };

  Pokemons.findByPk.mockResolvedValue({
    id: pokemonId,
  });

  Pokemons.update.mockResolvedValue([1, [updatedPokemonData]]);

  const updateRequest = {
    params: {
      id: pokemonId,
    },
    body: updatedPokemonData,
  };

  await editPokemons(updateRequest, response);

  expect(response.json).toHaveBeenCalledWith({
    message: "pokemon updated successfully",
  });
});

it("should  handle a non-existing pokemon", async () => {
  const pokemonId = "3";
  const updatedPokemonData = {
    name: "ahmed",
    pokdexNumer: "1",
    generation: "1",
    evolutionStage: "1",
    evolved: "1",
    familyID: "1",
    type: "1",
    weather: "1",
    statTotal: "1",
  };

  Pokemons.findByPk.mockResolvedValue(null);

  const updateRequest = {
    params: {
      id: pokemonId,
    },

    body: updatedPokemonData,
  };

  await editPokemons(updateRequest, response);

  expect(response.status).toHaveBeenCalledWith(404);
  expect(response.json).toHaveBeenCalledWith({ message: "pokemon not found" });
});

it("should handle an error during update", async () => {
  const pokemonId = "3";
  const updatedPokemonData = {
    id: "3",
    name: "ahmed",
    pokdexNumer: "1",
    generation: "1",
    evolutionStage: "1",
    evolved: "1",
    familyID: "1",
    type: "1",
    weather: "1",
    statTotal: "1",
  };

  Pokemons.findByPk.mockResolvedValue({
    id: pokemonId,
  });
  const error = new Error("Update failed");
  Pokemons.update.mockRejectedValue(error);
  const updateRequest = {
    params: {
      id: pokemonId,
    },

    body: updatedPokemonData,
  };

  await editPokemons(updateRequest, response);

  expect(response.status).toHaveBeenCalledWith(500);
  expect(response.json).toHaveBeenCalledWith({
    message: "Internal server error",
  });
});
