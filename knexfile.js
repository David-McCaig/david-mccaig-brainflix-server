// Update with your config settings.
require("dotenv").config();

const {
  DB_DATABASE,
  DB_PASSWORD,
  DB_USER,
  DB_HOST
} = process.env
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  client: 'mysql',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    charset: 'utf8',
  },
};
