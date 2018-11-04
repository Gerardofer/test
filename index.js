const express = require("express");
const keys = require("./config/keys");
require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoute")(app);
require("./routes/apiRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(expresßs.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
