const path = require("path");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc    Fill balance for the currently logged in user
// @route   POST /api/v1/balance/fill
// @access  Private
exports.fillBalance = asyncHandler(async (req, res, next) => {
  const user = req.body.user;
  const tournamentRegistration = await User.findOne({
    tournament,
  }).populate("user");
  if (!tournamentRegistration) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: tournamentRegistration });
});
