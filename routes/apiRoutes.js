const Profile = require("../models/profile");
const Project = require("../models/project");

module.exports = app => {
  app.get("/api/personal_info", async (req, res) => {
    const profiles = await Profile.findAll();
    res.send(profiles);
  });

  app.get("api/projects"), async (req, res) => {
    const projects = await Project.findAll();
    res.send(projects);
  }

  app.post("/profile", async (req, res) => {
    // const profile = await Profile.create();
    console.log(req.body);
  });
};
