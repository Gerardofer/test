const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const User = sequelize.define("user", {
  googleId: Sequelize.STRING,
  userName: Sequelize.STRING
});

User.sync();

module.exports = User;
