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

client.query(`select * from users`, (err, res) => {
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})

module.exports = client;