// Requiring mysql npm package
const mysql = require("mysql");

// Setting up my connection the the mysql database
let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database
  });
};

// Connecting to the mysql database when the file is run
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting connection to be used in other files
module.exports = connection;