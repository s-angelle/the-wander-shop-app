const mongoose = require("mongoose");

const adventureSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Number },
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;
