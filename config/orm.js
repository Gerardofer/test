const connection = require("../config/connection");

let orm = {
  selectAll: function(table, cb) {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    let queryString =
      "INSERT INTO " + table + " (" + cols + ") VALUES ('" + vals + "');";

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
