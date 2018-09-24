if (process.env.NODE_ENV === "production") {
  module.exports = require("./connection_prod");
} else {
  module.exports = require("./connection_dev");
}
