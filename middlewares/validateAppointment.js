const { validationResult, check } = require("express-validator");

exports.creationAppointment = () => [
  check("appointment.date", "choose a date for you appointment").isLength({ min: 2 }),
  check("appointment.description", "Please enter a description for this apointment(ex: reason)").isLength({ min: 2 }),
   
];

exports.validationAppointment = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
