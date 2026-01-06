const express = require("express");
const router = express.Router();

const { analytics } = require("../controllers/analytics.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");


/**
 * GET v1/admin/dashboard
 * @summary Get feedback analytics dashboard data
 * @security BearerAuth
 *
 * @tags Admin
 *
 * @return {Success} 200 - analytics data returned
 * @return {Unauthorized} 401 - unauthorized
 * @return {Forbidden} 403 - admin access required
 * @return {BadRequest} 500 - server error
 */



// Admin-only analytics
router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  analytics
);

module.exports = router;
