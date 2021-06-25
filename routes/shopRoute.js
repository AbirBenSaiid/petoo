const routerShop = require("express").Router();

const { ShopRegister, ShopLogin } = require("../controllers/shop.controller");
const { validation, registerValidate, loginValidate } = require("../middlewares/validateShop");

// const { isAuth } = require("../middlewares/validations");

//Shop register
routerShop.post("/register", registerValidate(), validation, ShopRegister);
//Login
routerShop.post("/login", loginValidate(), validation, ShopLogin);
// //Shop Authentifié
// routerShop.get("/dashboard/default/current", isAuth, (req, res) => {
//   res.send({ msg: "Welcome", userLogged: req.userLogged });
// });

module.exports = routerShop;
