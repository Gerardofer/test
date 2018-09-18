const epxress = require("express");
const app = epxress();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ name: "Gerardo Fernandez" });
});

app.listen(PORT);
