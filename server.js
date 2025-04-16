const express = require("express");
const path = require("path");
const frontity = require("@frontity/core");

const server = express();
const port = process.env.PORT || 3000;

// Serve static assets from build
server.use("/static", express.static(path.join(__dirname, "build/static")));
server.use("/client", express.static(path.join(__dirname, "build/client")));
server.use("/bundling", express.static(path.join(__dirname, "build/bundling")));

// Let Frontity handle SSR
server.use(frontity({ mode: "production" }));

server.listen(port, () => {
  console.log(`✅ Frontity server running on http://localhost:${port}`);
});