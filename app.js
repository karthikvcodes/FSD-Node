const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from node.js server");
});

server.listen(3000, () => {
  console.log("Server running on PORT: 3000");
});

// express
