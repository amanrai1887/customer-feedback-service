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

// Create user (Admin only)
router.post(
    "/register",
  //   authMiddleware,
  //   roleMiddleware("ADMIN"),
    registerValidator,
    errorMiddleware,
    register
  );

// Login
router.post(
  "/login",
  loginValidator,
  errorMiddleware,
  login
);


module.exports = router;
