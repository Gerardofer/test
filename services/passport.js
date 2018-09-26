const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const User = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        where: {
          googleId: profile.id
        }
      });
      if (existingUser) {
        console.log(`user wih id ${profile.id} is already in the DB`);
        done(null, existingUser);
      } else {
        const user = await User.create({
          googleId: profile.id,
          userName: profile.displayName
        });
        done(null, user);
      }
    }
  )
);
