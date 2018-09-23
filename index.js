const epxress = require("express");
const keys = require("./config/keys");
require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = epxress();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoute")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
