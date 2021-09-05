const express = require("express");
const {
  register,
  login,
  getMe,
  updateUser,
  getLinks,
  executePayment,
} = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/execute", executePayment);
router.post("/user", protect, updateUser);
router.post("/login", login);
router.get("/me", protect, getMe);
router.get("/link", protect, getLinks);

module.exports = router;
