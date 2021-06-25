const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
  check("nom", "Last Name is required").notEmpty(),
  check("prenom", "First Name is required").notEmpty(),
  check("email", "Enter a valid Email!").isEmail(),
  check("password", "Password should contain at least 6 caracters!").isLength({
    min: 6,
  }),
  check("CIN", "Enter a valid Cin").isLength({
    min: 8,
  }),
  check("about", "Enter a small recap about your resume").isLength({
    min: 10,
  }),
  check("proNumber", "Enter your professional Number").isLength({
    min: 3,
  }),

  check("adresse", "Adress is required!").isLength({
    min: 4,
  }),
  check("ville", "City is required").isLength({
    min: 4,
  }),
  check("codePostale", "Postal Code is required").isLength({
    min: 4,
  }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
