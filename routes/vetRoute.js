const routerVet = require("express").Router();

const {
  VetRegister,
  VetLogin,
  allVets,
} = require("../controllers/vet.controller");
const { validation, registerValidate } = require("../middlewares/validateVet");
const { loginValidate } = require("../middlewares/validateOwner");
const { isAuth } = require("../middlewares/validations");

//Vet register
routerVet.post("/register", registerValidate(), validation, VetRegister);
//Login
routerVet.post("/login", loginValidate(), validation, VetLogin);
//Veto authentifié
routerVet.get("/dashboard/default/current", isAuth, (req, res) => {
  res.send({ msg: "Welcome", userLogged: req.userLogged });
});
//get all Vets
routerVet.get("/getAllVets", allVets);

module.exports = routerVet;
