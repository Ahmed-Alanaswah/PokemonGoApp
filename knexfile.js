// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "name",
      password: "1234",
      database: "pokemon_db",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
