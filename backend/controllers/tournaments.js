const path = require("path");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middleware/async");
const Tournament = require("../models/Tournament");
const Registration = require("../models/Registration");
const User = require("../models/User");

// @desc    Create new tournament
// @route   GET /api/v1/tournaments/:id/register
// @access  Private
exports.getTournamentRegistrations = asyncHandler(async (req, res, next) => {
  const tournament = req.params.id;
  const tournamentRegistration = await Registration.find({
    tournament,
  }).populate("user");
  if (!tournamentRegistration) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: tournamentRegistration });
});

// @desc    Create new tournament
// @route   POST /api/v1/tournaments/:id/register
// @access  Private
exports.registerTournament = asyncHandler(async (req, res, next) => {
  const tournament = req.params.id;
  const user = req.body.user;
  const nickName = req.body.nickName;
  const data = {
    tournament,
    user,
    nickName,
  };

  // Find if there is enough tickets
  const userData = await User.findById(user);
  const balance = userData.balance;
  if (!balance || balance < 2) {
    return res
      .status(400)
      .json({ success: false, message: "There is not enough tickets" });
  }

  const changeBalance = await User.findByIdAndUpdate(user, {
    balance: balance - 2,
  });

  const tournamentRegistration = await Registration.create(data);
  if (!tournamentRegistration) {
    return res.status(400).json({ success: false });
  }
  res.status(201).json({ success: true, data: tournamentRegistration });
});

// @desc Get all tournaments
// @route GET /api/v1/tournaments
// @access Public
exports.getTournaments = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get single tournament
// @route   GET /api/v1/tournaments/:id
// @access  Public
exports.getTournament = asyncHandler(async (req, res, next) => {
  const tournament = await Tournament.findById(req.params.id);

  if (!tournament) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: tournament });
});

// @desc    Create new tournament
// @route   POST /api/v1/tournaments
// @access  Private
exports.createTournament = asyncHandler(async (req, res, next) => {
  const tournament = await Tournament.create(req.body);
  if (!tournament) {
    return res.status(400).json({ success: false });
  }
  res.status(201).json({ success: true, data: tournament });
});

// @desc    Update tournament
// @route   PUT /api/v1/tournaments/:id
// @access  Private
exports.updateTournament = asyncHandler(async (req, res, next) => {
  const tournament = await Tournament.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!tournament) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: tournament });
});

// @desc    Delete tournament
// @route   DELETE /api/v1/tournaments/:id
// @access  Private
exports.deleteTournament = asyncHandler(async (req, res, next) => {
  const tournament = await Tournament.findByIdAndDelete(req.params.id);
  if (!tournament) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  return res.status(200).json({ success: true, data: {} });
});
// @desc    Upload photo for tournament
// @route   PUT /api/v1/tournaments/:id/photo
// @access  Private
exports.tournamentImageUpload = asyncHandler(async (req, res, next) => {
  const tournament = await Tournament.findById(req.params.id);
  if (!tournament) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom filename
  file.name = `photo_${tournament._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Tournament.findByIdAndUpdate(req.params.id, {
      image: `/images/${file.name}`,
    });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
