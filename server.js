const server = require("./build/server");

module.exports = (req, res) => {
  const app = server.default || server;
  return app(req, res);
};