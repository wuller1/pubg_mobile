const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema(
  {
    tickets: Number,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Price", PriceSchema);
