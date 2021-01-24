const http = require("http");

let options = {
  host: "localhost",
  port: "8081",
  path: "/index.html",
};

var callback = (response) => {
  let body = "";
  response.on("data", (data) => {
    body += data;
  });

  response.on("end", () => console.log(body));
};

let req = http.request(options, callback);
req.end();
