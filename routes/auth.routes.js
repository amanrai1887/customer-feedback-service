const express = require("express");
const router = express.Router();

const {
  login,
  register
} = require("../controllers/auth.controller");

const {
  loginValidator,
  registerValidator
} = require("../validators/auth.validator");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const errorMiddleware = require("../middlewares/error.middleware");

/**
 * POST v1/auth/login
 * @summary Login user and return JWT
 *
 * @tags Auth
 *
 * @param {LoginRequest} request.body.required - login credentials
 *
 * @return {AuthSuccess} 200 - success response
 * @return {Unauthorized} 401 - invalid credentials
 * @return {BadRequest} 400 - validation error
 */


// Create user (Admin only)
router.post(
  "/register",
  //   authMiddleware,
  //   roleMiddleware("ADMIN"),
  registerValidator,
  errorMiddleware,
  register
);

/**
 * POST v1/auth/register
 * @summary Create a new user (Admin only)
 * @security BearerAuth
 *
 * @tags Auth
 *
 * @param {CreateUserRequest} request.body.required - user details
 *
 * @return {Created} 201 - user created successfully
 * @return {Unauthorized} 401 - unauthorized
 * @return {Forbidden} 403 - access denied
 * @return {BadRequest} 400 - validation error
 */


// Login
router.post(
  "/login",
  loginValidator,
  errorMiddleware,
  login
);


module.exports = router;
