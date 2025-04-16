const path = require("path");
const express = require("express");
const frontity = require("@frontity/core");

const server = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the build directory
server.use("/static", express.static(path.join(__dirname, "build/static")));
server.use("/client", express.static(path.join(__dirname, "build/client")));
server.use("/bundling", express.static(path.join(__dirname, "build/bundling")));

// Let Frontity handle the rest
server.all("*", async (req, res) => {
  await frontity.serve(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});