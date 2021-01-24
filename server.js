const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log("Reqsuest for" + pathname + " received.");

    if (pathname == "/") {
      pathname = "/index.html";
    }

    fs.readFile(pathname.substr(1), (err, data) => {
      if (err) {
        console.log(err);
        response.writeHead(404, { "Content-Type": "text/html" });
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });

        response.write(data.toString());
        console.log(data.toString());
      }
      response.end();
    });
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081");
