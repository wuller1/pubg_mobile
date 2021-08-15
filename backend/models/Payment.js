const mongoose = require("mongoose");
const User = require("../models/User");

const TournamentRegistrationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: [true, "Поле user не должно быть пустым"],
      trim: true,
      unique: [true, "Вы уже зарегестрированы на данном турнире"],
    },
    paypal: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Поле tournament не должно быть пустым"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "TournamentRegistration",
  TournamentRegistrationSchema
);
