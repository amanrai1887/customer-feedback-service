const express = require("express");
const router = express.Router();

const {
  submitFeedback,
  getFeedback
} = require("../controllers/feedback.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const { feedbackValidator } = require("../validators/feedback.validator");
const errorMiddleware = require("../middlewares/error.middleware");

// Submit feedback (Authenticated users)
router.post(
    "/",
    authMiddleware,
    feedbackValidator,
    errorMiddleware,
    submitFeedback
  );
  
// Fetch feedback (Authenticated users/admins)
router.get(
  "/",
  authMiddleware,
  getFeedback
);

module.exports = router;
