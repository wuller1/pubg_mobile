const mongoose = require("mongoose");

const TournamentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Поле заголовок не должно быть пустым"],
      trim: true,
      maxlength: [50, "Заголовок не должен содержать более 50 символов"],
    },
    type: {
      type: String,
      enum: ["solo", "duo", "squad"],
      required: [true, "Поле тип турнира не должно быть пустым"],
      trim: true,
      maxlength: [5, "Тип турнира не должен содержать более 5 символов"],
    },
    map: {
      type: String,
      required: [false, "Введите название карты"],
      trim: true,
      maxlength: [50, "Название карты не должно содержать более 50 символов"],
    },
    startsAt: {
      type: Date,
      required: false,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Поле описание не должно быть пустым"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tournament", TournamentSchema);
