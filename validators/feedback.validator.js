const { body } = require("express-validator");

exports.feedbackValidator = [
  body("rating")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),

  body("comment")
    .optional()
    .isString()
    .withMessage("Comment must be a string"),

  body("source")
    .notEmpty()
    .withMessage("Source is required")
    .isString()
    .withMessage("Source must be a string")
];
