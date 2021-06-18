const express = require("express");
const {
  getTournament,
  getTournaments,
  createTournament,
  updateTournament,
  deleteTournament,
  tournamentImageUpload,
} = require("../controllers/tournaments");

const Tournament = require("../models/Tournament");
const advancedResults = require("../middleware/advancedResults");

const router = express.Router();

const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(advancedResults(Tournament), getTournaments)
  .post(protect, authorize("publisher", "admin"), createTournament);
router
  .route("/:id/photo")
  .put(protect, authorize("publisher", "admin"), tournamentImageUpload);
router
  .route("/:id")
  .get(getTournament)
  .put(protect, authorize("publisher", "admin"), updateTournament)
  .delete(protect, authorize("publisher", "admin"), deleteTournament);

module.exports = router;
