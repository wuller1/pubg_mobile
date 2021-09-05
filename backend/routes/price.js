const express = require("express");
const { createPrice, getPrice } = require("../controllers/price");

const router = express.Router();

const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .post(protect, authorize("admin"), createPrice)
  .get(getPrice);

module.exports = router;
