const epxress = require("express");
const app = epxress();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ name: "Jolie Lin" });
});

app.listen(PORT);
