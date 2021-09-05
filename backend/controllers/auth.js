const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const Payment = require("../models/Payment");
const Price = require("../models/Price");
const axios = require("axios");

// @desc    get paypal links
// @route   POST /api/v1/auth/link
// @access  Private
exports.getLinks = asyncHandler(async (req, res, next) => {
  // get paypal token
  const qs = require("qs");
  let data = qs.stringify({
    grant_type: "client_credentials",
  });
  let config = {
    method: "post",
    url: `${process.env.PAYPAL}/v1/oauth2/token`,
    headers: {
      Authorization: process.env.PAYPAL_AUTHORIZATION,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  let d = await axios(config);
  d = d.data;
  const token = d.access_token;

  // return link for the user to process payments

  data = JSON.stringify({
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    transactions: [
      {
        amount: {
          total: `${req.query.amount}`,
          currency: "USD",
        },
      },
    ],
    redirect_urls: {
      return_url: `${process.env.URL}/balance/success`,
      cancel_url: `${process.env.URL}/balance?status=fail`,
    },
  });

  config = {
    method: "post",
    url: `${process.env.PAYPAL}/v1/payments/payment`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  let payment_url = await axios(config);
  payment_url = payment_url.data;
  const link = payment_url.links[1];

  res.status(200).json({ success: true, data: link });
});

// @desc    execute payment, get current balance, fill balance
// @route   POST /api/v1/auth/execute
// @access  Private
exports.executePayment = asyncHandler(async (req, res, next) => {
  // get paypal token
  const qs = require("qs");
  let data = qs.stringify({
    grant_type: "client_credentials",
  });
  let config = {
    method: "post",
    url: `${process.env.PAYPAL}/v1/oauth2/token`,
    headers: {
      Authorization: process.env.PAYPAL_AUTHORIZATION,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  let d = await axios(config);
  d = d.data;
  const token = d.access_token;
  const payerID = req.body.payerID;
  const payID = req.body.payID;
  const userID = req.body.userID;

  // execute payment
  data = JSON.stringify({
    payer_id: payerID,
  });

  config = {
    method: "post",
    url: `${process.env.PAYPAL}/v1/payments/payment/${payID}/execute`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  const info = await axios(config);
  console.log(info.data);

  // create enty in DB for payment
  const payment = await Payment.create({
    user: userID,
    paypal: info.data,
  });

  // get current balance
  const user = await User.findById(userID);
  const balance = user.balance;
  const amount = info.data.transactions[0].amount.total;
  const numTickets = await Price.findOne({ price: amount });

  const fillBalance = await User.findByIdAndUpdate(userID, {
    balance: numTickets,
  });

  res.status(200).json({ success: true, balance: numTickets });
});

// @desc    Update user
// @route   POST /api/v1/auth/user
// @access  Public
exports.updateUser = asyncHandler(async (req, res, next) => {
  const {
    lastName,
    firstName,
    nickName,
    country,
    discordLogin,
    phoneNumber,
    id,
  } = req.body;

  new_data = {
    lastName,
    firstName,
    nickName,
    country,
    discordLogin,
    phoneNumber,
  };

  const user = await User.findByIdAndUpdate(id, new_data);
  res.status(200).json({ success: true, data: user });
});

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Create user
  const user = await User.create({
    email,
    password,
  });

  sendTokenResponse(user, 200, res);
});

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // Check if password matches

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      role: user.role,
      email: user.email,
      id: user._id,
      token,
      firstName: user.name,
      balance: user.balance,
      expires: options.expires,
    });
};

// @desc    Get current logged in user
// @route   POST /api/v1/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});
