const Sequelize = require("sequelize");
const sequelize = require("../config/connection_seq");

const User = sequelize.define("user", {
  google_id: Sequelize.STRING,
  user_name: Sequelize.STRING
});

User.sync();

module.exports = User;
