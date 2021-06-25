const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
  check("shopName", "The Shop Name is required").isLength({
    min: 3,
  }),
  check("email", "Enter a valid Email!").isEmail(),
  check("password", "Password should contain at least 6 caracters!").isLength({
    min: 6,
  }),
  check("phoneNumber", "Shop's phone number is required").isLength({
    min: 8,}),
  check("taxNumber", "Enter a tax Number").isLength({
    min: 3,
  }),
  check("adresse", "Adress is required!").isLength({
    min: 3,
  }),
  check("ville", "City is required").isLength({
    min: 3,
  }),
  check("codePostale", "Postal Code is required").isLength({
    min: 4,
  }),
  check("about", "Enter a small recap about your shop").isLength({
    min: 10,
  }),
  check("legalContact.nom", "The legal contact name is required").isLength({
    min: 3,
  }),
  check("legalContact.prenom", "The legal contact last name is required").isLength({
    min: 3,
  }),
  check("legalContact.phoneNumber", "The legal contact's phone number is required").isLength({
    min: 8,}),
  check("legalContact.adresse", "The legal contact's adress is required!").isLength({
    min: 3,
  }),
  check("legalContact.ville", "The legal contact's city is required").isLength({
    min: 3,
  }),
  check("legalContact.codePostale", "The legal contact's postal Code is required").isLength({
    min: 4,
  }),
  check("legalContact.CIN", "The legal contact's CIN is required").isLength({
    min: 8,}),

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
