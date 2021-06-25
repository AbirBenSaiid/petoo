const { validationResult, check } = require("express-validator");

exports.creationPet = () => [
  check("pet.name", "Give your pet a name!").isLength({ min: 2 }),
  check("pet.petType", "Please specify your animal!").isLength({ min: 2 }),
  check("pet.age", "Please specify the age of Pet approximatly!").notEmpty(),
  check("pet.race", "Please specify the breed of Pet approximatly!").isLength({
    min: 2,
  }),
  check("pet.gender", "Please specify the gender of Pet!").isLength({ min: 2 }),
  check("pet.color", "Please specify the color of Pet!").isLength({ min: 2 }),
  check(
    "pet.distinguishingMark",
    "Please describe distinguishing mark of Pet!"
  ).isLength({ min: 2 }),
  check("pet.knownAllergies", "Please describe your pet Allergy!").isLength({
    min: 2,
  }),
  check("pet.isVaccined", "Please check if your pet is vaccinated!").notEmpty(),
  check("pet.vaccines", "Please add the vaccin and the date").isArray(),
];

exports.validationPet = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
