const { check, validationResult } = require("express-validator");

exports.createPostValidator = [
  //title
  check("title")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Write a title")
    .isLength({
      min: 4,
      max: 150,
    })
    .withMessage("Title must be between 4 to 150 characters"),
  //body
  check("body")
    .notEmpty()
    .withMessage("Write a body")
    .isLength({
      min: 4,
      max: 2000,
    })
    .withMessage("Body must be between 4 to 2000 characters"),
  (req, res, next) => {
    // check for errors
    const errors = validationResult(req);
    // if error show the first one as they happen
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];
