// const http = require("http");

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { "Content-type": "text/plain" });
//     response.end("hello world\n");
//   })
//   .listen(8081);

// console.log("Server running at http://127.0.0.1:8081");

const { EventEmitter } = require("events");
var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = () => {
  console.log("Connection Successful");
  eventEmitter.emit("data_received");
};

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_received", () => {
  console.log("Data Received");
});

eventEmitter.emit("connection");
console.log("Program has ended");
