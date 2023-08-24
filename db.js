/** Database config for database. */


// const { Client } = require("pg");
// const {DB_URI} = require("./config");

// let db = new Client({
//   connectionString: DB_URI
// });

// db.connect();


// module.exports = db;

const { Client } = require("pg");

const client = new Client({
  user: 'baer',
  host: 'localhost',
  port: 5432,
  password: 'baer',
  database: 'books'
});

client.connect();


module.exports = client;