const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "testdb.c83eturldoby.us-east-1.rds.amazonaws.com",
  user: "gerardoFer",
  password: "sevafund1",
  database: "testDB"
});

connection.connect(err => {
  if (err) {
    console.log("error connecting", err.stack);
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
