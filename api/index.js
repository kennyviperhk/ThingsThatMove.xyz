const path = require("path");
const server = require(path.join(__dirname, "..", "build", "server.js")).default;

module.exports = async (req, res) => {
  await server(req, res);
};