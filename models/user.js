const orm = require("../config/orm");

let user = {
  all: function(cb) {
    orm.selectAll("users", res => {
      console.log(res);
      cb(res);
    });
  },
  create: function(col, vals, cb) {
    orm.insertOne("users", col, vals, res => {
      console.log(res);
      cb(res);
    });
  }
};

module.exports = user;
