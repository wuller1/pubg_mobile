const path = require("path");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middleware/async");
const Price = require("../models/Price");

// @desc    Creates prices in db
// @route   POST /api/v1/price
// @access  Private
exports.createPrice = asyncHandler(async (req, res, next) => {
  const price = await Price.create(req.body);
  if (!price) {
    return res.status(400).json({ success: false });
  }
  res.status(201).json({ success: true, data: price });
});
// @desc    Get price from db
// @route   POST /api/v1/price?price=9
// @access  Public
exports.getPrice = asyncHandler(async (req, res, next) => {
  if (req.query.price) {
    filter = { price: req.query.price };
  } else {
    filter = {};
  }

  const price = await Price.find(filter);

  if (!price) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: price });
});
