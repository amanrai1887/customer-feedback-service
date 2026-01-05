const express = require("express");
const router = express.Router();

const { analytics } = require("../controllers/analytics.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

// Admin-only analytics
router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  analytics
);

module.exports = router;
