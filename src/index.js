const appsignal = require("./appsignal");
const { expressMiddleware } = require("@appsignal/express");
const express = require("express");
const { Server } = require("socket.io");
const path = require("path");

const app = express();

app.use(expressMiddleware(appsignal));
app.use("/", express.static(path.join(__dirname, "public")));

const io = new Server();
io.on("connection", () => {
  console.info("Connected!");
});

const tcpHandler = app.listen(3000, () => {
  console.info("express listening on http://127.0.0.1:3000");
});

io.attach(tcpHandler);
