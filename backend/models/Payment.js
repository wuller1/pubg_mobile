const mongoose = require("mongoose");
const User = require("../models/User");

const Payment = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: [true, "Поле user не должно быть пустым"],
    },
    paypal: {
      type: mongoose.Schema.Types.Object,
      required: [true, "Поле tournament не должно быть пустым"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", Payment);
