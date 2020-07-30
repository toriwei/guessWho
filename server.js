// The Guess Who Server

// Bring in the server-side libraries and configure networking
const express = require("express");
const app = express();
const server = app.listen(process.env.PORT || 3000);
const io = require("socket.io")(server);

// Serve all the scripts and stylesheets from this folder
app.use(express.static("src"));

// Webserver routes
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/index.html");
});

app.get("/pickVersion", (request, response) => {
  response.sendFile(__dirname + "/pages/pickVersion.html");
});

app.get("/mainGrid", (request, response) => {
  response.sendFile(__dirname + "/pages/mainGrid.html");
});

app.get("/inputPictures", (request, response) => {
  response.sendFile(__dirname + "/pages/inputPictures.html");
});

let chatters = {};

// Chat is just sending back the message to everyone
io.on("connection", socket => {
  socket.on("name", data => {
    chatters[socket.id] = data;
  });
  socket.on("message", message => {
    io.emit("message", { name: chatters[socket.id] || "Anonymous", message });
  });
});
