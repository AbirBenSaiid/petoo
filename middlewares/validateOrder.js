const { validationResult, check } = require("express-validator");

exports.creationOrder = () => [
  
  check("order.quantity", "Please enter the quantity").notEmpty(),

];

exports.validationOrder = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
