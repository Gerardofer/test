const epxress = require("express");
require("./services/passport");

const app = epxress();

require("./routes/authRoute")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
