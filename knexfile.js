module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "db",
      user: "name",
      password: "1234",
      database: "pokemon_db",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
