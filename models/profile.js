const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Profile = sequelize.define("profile", {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

Profile.sync();

module.exports = Profile;
