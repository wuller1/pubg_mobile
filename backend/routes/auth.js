const express = require("express");
const { register, login, getMe, updateUser } = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/user", updateUser);
router.post("/login", login);
router.get("/me", protect, getMe);

module.exports = router;
