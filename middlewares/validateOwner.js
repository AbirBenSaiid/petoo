const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
  check("nom", "Last Name is required").notEmpty(),
  check("prenom", "First Name is required").notEmpty(),
  check("email", "Enter a valid Email!").isEmail(),
  check("password", "Password is required!").notEmpty(),
  check("password", "Password should contain at least 6 caracters!").isLength({
    min: 6,
  }),
];
exports.loginValidate = () => [
  check("email", "No such Combination!").isEmail(),
  check("password", "Enter a valid Password!").notEmpty().isLength({ min: 6 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
exports.validReset = () => [
  check("password", "Password should contain at least 6 caracters!").isLength({
    min: 6,
  }),
  check("email", "Enter a valid Email!").isEmail(),
  check("otp", "OTP should be number!").isNumeric(),
];
