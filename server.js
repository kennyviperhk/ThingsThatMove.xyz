const path = require("path");
const app = require("./build/server").default;

module.exports = (req, res) => {
  app(req, res);
};