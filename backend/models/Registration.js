const mongoose = require("mongoose");
const User = require('../models/User')

const TournamentRegistrationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.ObjectId,
            ref: User,
            required: [true, "Поле user не должно быть пустым"],
            trim: true,
            maxlength: [50, "Заголовок не должен содержать более 50 символов"],
        },
        tournament: {
            type: mongoose.ObjectId,
            required: [true, "Поле tournament не должно быть пустым"],
            trim: true,
            maxlength: [5, "Тип турнира не должен содержать более 5 символов"],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("TournamentRegistration", TournamentRegistrationSchema);
