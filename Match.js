
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  team1: String,
  team2: String,
  score1: Number,
  score2: Number,
  status: String
});

module.exports = mongoose.model("Match", schema);
