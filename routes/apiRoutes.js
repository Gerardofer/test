const Profile = require("../models/profile");
const Project = require("../models/project");

module.exports = app => {
  app.get("/api/personal_info", async (req, res) => {
    const profiles = await Profile.findAll();
    res.send(profiles);
  });

  app.get("/api/projects", async (req, res) => {
    const projects = await Project.findAll();
    res.send(projects);
  });

  app.get("/api/projects/:id", (req, res) => {
    const project = Project.findOne({
      where: {
        id: req.params.id
      }
    }).then(res.send(project))
  });

  app.post("/profile", async (req, res) => {
    // const profile = await Profile.create();
    console.log(req.body);
  });

  app.post("/api/projects/:id", (req, res) => {
    console.log(req.body);
  })
};
