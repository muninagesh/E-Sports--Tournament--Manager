
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/esports-final");

const Match = require("./models/Match");

io.on("connection", (socket) => {
  socket.on("score_update", async (data) => {
    await Match.findByIdAndUpdate(data.id, data);
    io.emit("score_update", data);
  });
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/tournaments", require("./routes/tournament"));
app.use("/api/matches", require("./routes/match"));

server.listen(5000, () => console.log("Server running on 5000"));
