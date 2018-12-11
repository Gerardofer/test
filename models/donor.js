const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Donor = sequelize.define("donor", {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    $state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipcode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: {
        //     isEmail: true
        // }
    }
});

Donor.sync();

//for testing only
// Donor.create({
//     address: "453 Sycamore Hill Dr",
//     city: "Danville",
//     $state: "CA",
//     zipcode: "94526",
//     phoneNumber: "10",
//     email: "b.ghataorhe@gmail.com"
// });

module.exports = Donor;