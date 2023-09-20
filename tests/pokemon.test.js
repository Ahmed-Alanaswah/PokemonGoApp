const request = require("supertest");
const app = require("../index");
const router = require("../routes/pokemons");
const { Pokemons } = require("../models");
// Mock Pokemons.findAll() method
jest.mock("../models/Pokemons", () => ({
  findAll: jest.fn(),
}));

app.use("/", router);

describe("GET /", () => {
  it("should return a paginated list of Pokemons", async () => {
    // Mock the data returned by Pokemons.findAll()
    const mockPokemons = [
      {
        id: 482,
        name: "Gallade",
        pokdexNumer: "475",
        generation: "4",
        evolutionStage: "Evolved",
        evolved: "0",
        familyID: null,
        type: "psychic",
        weather: "Windy",
        statTotal: "593",
      },
      {
        id: 514,
        name: "Emboar",
        pokdexNumer: "500",
        generation: "5",
        evolutionStage: "Evolved",
        evolved: "0",
        familyID: null,
        type: "fire",
        weather: "Sunny/clear",
        statTotal: "582",
      },
      {
        id: 532,
        name: "Musharna",
        pokdexNumer: "518",
        generation: "5",
        evolutionStage: "Evolved",
        evolved: "0",
        familyID: null,
        type: "psychic",
        weather: "Windy",
        statTotal: "586",
      },
      {
        id: 548,
        name: "Conkeldurr",
        pokdexNumer: "534",
        generation: "5",
        evolutionStage: "Evolved",
        evolved: "0",
        familyID: null,
        type: "fighting",
        weather: "Cloudy",
        statTotal: "625",
      },
      {
        id: 551,
        name: "Seismitoad",
        pokdexNumer: "537",
        generation: "5",
        evolutionStage: "Evolved",
        evolved: "0",
        familyID: null,
        type: "water",
        weather: "Rainy",
        statTotal: "548",
      },
      {
        id: 552,
        name: "Throh",
        pokdexNumer: "538",
        generation: "5",
        evolutionStage: "Evolved",
        evolved: "0",
        familyID: null,
        type: "fighting",
        weather: "Cloudy",
        statTotal: "572",
      },
      {
        id: 567,
        name: "Krookodile",
        pokdexNumer: "553",
        generation: "5",
        evolutionStage: "Evolved",
        evolved: "0",
        familyID: null,
        type: "ground",
        weather: "Sunny/clear",
        statTotal: "582",
      },
      {
        id: 569,
        name: "Darmanitan (Zen Mode)",
        pokdexNumer: "555",
        generation: "5",
        evolutionStage: "Evolved",
        evolved: "0",
        familyID: null,
        type: "fire",
        weather: "Sunny/clear",
        statTotal: "587",
      },
    ]; // Replace with your mock data
    Pokemons.findAll.mockResolvedValue(mockPokemons);

    const response = await request(app).get("/");
    expect(response.status).toBe(200);

    // Add your assertions here to verify the response data
    // For example, you can check if the response body contains the expected items, currentPage, and totalPages.
  });
});
