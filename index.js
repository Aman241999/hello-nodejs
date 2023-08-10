/*const fs = require("fs");
fs.writeFileSync("hello text", "hello from node.js");*/
const Http = require("http");
Http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
}).listen(4500);
