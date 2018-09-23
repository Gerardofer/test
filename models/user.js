const orm = require("../config/orm");

let user = {
  all: function(cb) {
    orm.selectAll("users", res => {
      console.log(res);
      cb(res);
    });
  },
  one: function(col, input, cb) {
    orm.selectOne("users", col, input, res => {
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
