const express = require("express");
const router = express.Router();

const {
  submitFeedback,
  getFeedback
} = require("../controllers/feedback.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const { feedbackValidator } = require("../validators/feedback.validator");
const errorMiddleware = require("../middlewares/error.middleware");

/**
 * POST v1/feedback
 * @summary Submit customer feedback
 * @security BearerAuth
 *
 * @tags Feedback
 *
 * @param {CreateFeedbackRequest} request.body.required - feedback payload
 *
 * @return {Created} 201 - feedback submitted
 * @return {Unauthorized} 401 - unauthorized
 * @return {BadRequest} 400 - validation error
 */


// Submit feedback (Authenticated users)
router.post(
    "/",
    authMiddleware,
    feedbackValidator,
    errorMiddleware,
    submitFeedback
  );

  /**
 * GET v1/feedback
 * @summary Fetch feedback with pagination and filters
 * @security BearerAuth
 *
 * @tags Feedback
 *
 * @param {number} page.query - page number
 * @param {number} limit.query - items per page
 * @param {number} rating.query - filter by rating
 * @param {string} source.query - filter by source
 * @param {string} startDate.query - filter start date (YYYY-MM-DD)
 * @param {string} endDate.query - filter end date (YYYY-MM-DD)
 *
 * @return {Success} 200 - list of feedback
 * @return {Unauthorized} 401 - unauthorized
 * @return {BadRequest} 400 - invalid query params
 */

  
// Fetch feedback (Authenticated users/admins)
router.get(
  "/",
  authMiddleware,
  getFeedback
);

module.exports = router;
