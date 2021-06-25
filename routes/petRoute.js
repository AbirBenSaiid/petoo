const routerPet = require("express").Router();

const {
  PetCreate,
  PetEdit,
  allPets,
  getPetsOfOwner,
  getAssignedPets,
} = require("../controllers/pet.controller");
const { creationPet, validationPet } = require("../middlewares/validatePet");

//Route of pet creation with some verification on inputs
routerPet.post("/create", creationPet(), validationPet, PetCreate);

//modif a pet
routerPet.post("/modif/:idPet", PetEdit);

//get all pets
routerPet.get("/getAllPets", allPets);

//get all pets of owner
routerPet.post("/getYourPets", getPetsOfOwner);

//get assigned pets of vet after confirming
routerPet.post("/assignedPets", getAssignedPets);

module.exports = routerPet;
