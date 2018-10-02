const Profile = require("../models/profile");

module.exports = app => {
  app.get("/api/personal_info", async (req, res) => {
    const profiles = await Profile.findAll();
    res.send(profiles);
  });

  app.post("/profile", async (req, res) => {
    // const profile = await Profile.create();
    console.log(req.body);
  });
};
