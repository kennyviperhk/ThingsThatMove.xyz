const { default: server } = require("@frontity/core/server");
const http = require("http");

module.exports = async (req, res) => {
  const { url, method, headers } = req;

  req.url = url;
  req.method = method;
  req.headers = headers;

  res.setHeader("Access-Control-Allow-Origin", "*");

  const nodeServer = http.createServer(server);
  nodeServer.emit("request", req, res);
};