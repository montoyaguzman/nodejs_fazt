const express = require("express");
const server = express();

server.get("/", function(req, res) {
  res.send("<h1>Express Server works!</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running...");
});
