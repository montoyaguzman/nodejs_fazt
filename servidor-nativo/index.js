const colors = require("colors");
const http = require("http");
const handleServer = function(req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("<h1>Primer servidor en NodeJS</h1>");
  res.end();
};
const server = http.createServer(handleServer);

server.listen(3000, function() {
  console.log("Server runing in port 3000...".green);
});

// npm install whatever crea el node_module y package-lock.json
// npm init --> crea package.json y lo vuelve proyecto de npm
