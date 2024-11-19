const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;

let server = http.createServer((request, response) => {
  let parsed = url.parse(request.url, true);
  let x = parsed.pathname;
  if (x == "/home") {
    fs.readFile("./read.txt", "utf-8", (err, data) => {
      if (err) {
        response.write(err);
        response.end();
      } else {
        response.writeHead()
        response.write(data);
        response.end();
      }
    });
  } else if (x == "/product") {
    fs.writeFile("./product.js", "look at the Products", (err, data) => {
      if (err) {
        response.write(err);
        response.end();
      } else {
        response.write("changed the data");
        response.end();
      }
    });
  } else {
    let ip = "data replaced /n";
    fs.writeFile("./read.txt", ip, { flag: "a" }, (err, data) => {
      if (err) {
        response.write(err);
        response.end();
      } else {
        response.write("else replaced the data");
        response.end();
      }
    });
  }
});
server.listen(port, () => {
  console.log("server is running " + "http://localhost:" + port);
});
