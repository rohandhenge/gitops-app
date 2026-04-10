const http = require('http');

const server = http.createServer((req, res) => {
  res.end("res.end("Version GitOps Working");");
});

server.listen(3000, () => console.log("Server running"));
