const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Project = sequelize.define('project', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
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


// For testing purposes only; delete these example project after.
// const Project = require("../models/project");
Project.create({
  name: "test",
  description: "test",
  image: "Test",
  link: "test",
  target: 1000
});

Project.create({
	name: "test2",
	description: "test",
	image: "Test",
	link: "test",
	target: 1000
});

Project.create({
	name: "test3",
	description: "test",
	image: "Test",
	link: "test",
	target: 1000
});

module.exports = Project;

