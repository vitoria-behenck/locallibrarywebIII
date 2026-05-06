const mongoose = require("mongoose");
const author = require("./author");

const Schema = mongoose.Schema;

const MusicaSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String },
  ano: { type: Date }
});

module.exports = mongoose.model("Musica", MusicaSchema);