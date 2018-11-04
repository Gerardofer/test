const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Project = sequelize.define('project', {
	Name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Description: {
		type: Sequelize.STRING,
		allowNull: false
	},
	image: {
		type: Sequelize.STRING,
		allowNull: false
	},
	link: {
		type: Sequelize.STRING,
		allowNull: false
	},
	target: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
})

Project.sync();

module.exports = Project;

