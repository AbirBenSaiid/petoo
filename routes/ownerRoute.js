const routerOwner = require("express").Router();

const {
  Register,
  Login,
  ResetPassword,
  validateOTP,
  allOwners,
  OwnerEdit,
} = require("../controllers/owner.controller");
const {
  validation,
  registerValidate,
  loginValidate,
  validReset,
} = require("../middlewares/validateOwner");
const { isAuth } = require("../middlewares/validations");

//Create new Owner
routerOwner.post("/register", registerValidate(), validation, Register);

//Login
routerOwner.post("/login", loginValidate(), validation, Login);

//Utilisateur authentifié
routerOwner.get("/dashboard/default/current", isAuth, (req, res) => {
  res.send({
    msg: `Welcome ${req.userLogged.prenom}`,
    userLogged: req.userLogged,
  });
});

//utilisateur a oublié son password
routerOwner.post("/forgetPwd/otp", ResetPassword);

//user after receiving mail to reset password
routerOwner.post("/forgetPwd", validReset(), validation, validateOTP);

// //Get all Owners
routerOwner.get("/getAllOwners", allOwners);

//EditOwer
routerOwner.post("/editUser", OwnerEdit);

// // Find Owner by idUser && Send Full info
// routerOwner.get("/find/:idUser", async (req, res, next) => {
//   const { idUser } = req.params;
//   console.log(idUser);
//   try {
//     const ownerFoundById = await ownerModel.find({ idUser });
//     res.status(200).json({ msg: `Owner found`, ownerFoundById });
//   } catch (error) {
//     console.log(error);
//   }
//   next();
// });

// // Modify Owner by idUser
// routerOwner.post("/modify/:idUser", async (req, res, next) => {
//   const { idUser } = req.params;
//   let ownerFoundById = ownerModel.find({ idUser });
//   let {
//     nom,
//     prenom,
//     email,
//     phoneNumber,
//     dateNaissance,
//     adresse,
//     ville,
//     codePostale,
//   } = req.body;

//   console.log(idUser);
//   try {
//     if (req.body.password) {
//       //if pass has ben changed
//       password = passwordHash.generate(req.body.password); //crypt
//       ownerFoundById = await ownerModel.findOneAndUpdate(
//         { idUser },
//         {
//           $set: { ...req.body, password },
//         }
//       );
//     } else {
//       //if NOT
//       ownerFoundById = await ownerModel.findOneAndUpdate(
//         { idUser },
//         {
//           $set: { ...req.body },
//         }
//       );
//     }
//     res.status(200).json({ msg: `Owner modified`, ownerFoundById });
//   } catch (error) {
//     console.log(error);
//   }
//   next();
// });

module.exports = routerOwner;
