const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const user = require("../models/user_SQL");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      user.one(["google_id"], [profile.id], (res, fields) => {
        console.log(res);
        console.log(fields);
        // console.log(typeof res);
        // if (res[0].google_id) {
        //   console.log("User already in DB");
        // } else {
        // user.create(["google_id"], [profile.id], result => {
        //   console.log(`User with ID ${profile.id} has been created`);
        // });
      });
    }
  )
);
