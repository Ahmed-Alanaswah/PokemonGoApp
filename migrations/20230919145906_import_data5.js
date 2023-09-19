const ExcelJS = require("exceljs");
const path = require("path");

exports.up = async function (knex) {
  try {
    await knex.schema.createTable("Pokemons", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("pokdexNumer");
      table.string("generation");
      table.string("evolutionStage");
      table.string("evolved");
      table.string("familyID");
      table.string("type");
      table.string("weather");
      table.string("statTotal");
    });

    const excelFilePath = path.join("PokemonGo.xlsx");
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);
    const worksheet = workbook.getWorksheet(1);

    await knex.transaction(async (trx) => {
      let records = [];
      worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        const data = {
          name: row.getCell(2).value,
          pokdexNumer: row.getCell(3).value,
          generation: row.getCell(5).value,
          evolutionStage: row.getCell(6).value,
          evolved: row.getCell(7).value,
          familyID: row.getCell(8).value,
          type: row.getCell(10).value,
          weather: row.getCell(12).value,
          statTotal: row.getCell(14).value,
        };
        if (rowNumber > 1) {
          records.push(data);
        }
      });

      for (let i = 0; i < records.length; i++) {
        await trx("Pokemons").insert(records[i]);
      }
      await trx.commit();
    });
  } catch (error) {
    console.log("the migartion faild with error", error);
  }
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("Pokemons");
};
