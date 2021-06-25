const { validationResult, check } = require("express-validator");

exports.creationProduct = () => [
  check("product.name", "Enter your product's name").isLength({ min: 2 }),
  check("product.description", "Please give a small description for you product").isLength({ min: 5 }),
  check("product.price", "Please specify your product's price").notEmpty(),
  check("product.brand", "Please specify the brand of your product!").isLength({min: 3,}),
  check("product.productType", "Please specify the type of your product!").isLength({ min: 3 }),
];

exports.validationProduct = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
