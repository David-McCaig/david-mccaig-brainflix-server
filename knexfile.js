// Update with your config settings.
require("dotenv").config();

const {
  DB_LOCAL_DBNAME,
  DB_LOCAL_PASSWORD,
  DB_LOCAL_USER,
  DB_HOST
} = process.env
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  client: 'mysql',
  connection: {
    host: DB_HOST,
    user: DB_LOCAL_USER,
    password: DB_LOCAL_PASSWORD,
    database: DB_LOCAL_DBNAME,
    charset: 'utf8',
  },
};
