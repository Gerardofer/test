const Profile = require("../models/profile");
const Project = require("../models/project");
const Donor = require("../models/donor");

module.exports = app => {
  app.get("/api/personal_info", async (req, res) => {
    const profiles = await Profile.findAll();
    res.send(profiles);
  });

  app.get("/api/new_donor/", async (req, res) => {
    const newDonorReqBody = req.body;
    console.log("The req from app.get: ", newDonorReqBody)
    const donor = await Donor.findAll();
    res.send(donor);
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
    // console.log(req.body);
  });

  app.post("/api/new_donor", function (req, res) {
    const body = req.body;
    //send to dB
    Donor.create({
      address: body.address,
      city: body.city,
      $state: body.$state,
      zipcode: body.zipcode,
      phoneNumber: body.phoneNumber,
      email: body.email,
    })
  });


  app.post("/api/projects/:id", (req, res) => {
    console.log(req.body);
  })
};
