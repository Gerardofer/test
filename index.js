const epxress = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oath20").Strategy;
const keys = require("./config/keys");

const app = epxress();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecrest: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ name: "Gerardo Fernandez" });
});

app.listen(PORT);
