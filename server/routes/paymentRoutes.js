const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createCheckoutSession,
} = require("../controllers/paymentController");

const {
  upgradeUser,
} = require("../controllers/upgradeController");

router.post(
  "/create-checkout-session",
  auth,
  createCheckoutSession
);

router.post(
  "/upgrade",
  auth,
  upgradeUser
);

module.exports = router;