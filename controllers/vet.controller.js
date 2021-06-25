const jwt = require("jsonwebtoken");
// const vetModel = require("../models/Vet");
const ownerModel = require("../models/owner");
const uniqid = require("uniqid");
const passwordHash = require("password-hash");

//register
exports.VetRegister = async (req, res) => {
  try {
    let { email, CIN, proNumber } = req.body;
    email = email.toLowerCase();
    const foundOwnerByEmail = await ownerModel.findOne({ email });
    const foundOwnerByCIN = await ownerModel.findOne({ CIN });
    const foundOwnerByProNumber = await ownerModel.findOne({ proNumber });

    if (foundOwnerByEmail || foundOwnerByCIN || foundOwnerByProNumber)
      //email and cin and proNumber are unique
      return res.status(400).send({ errors: [{ msg: "Vet already exist" }] });

    let newVeto = new ownerModel({ ...req.body });
    newVeto.idUser = uniqid("Veto-"); //Create specific Id for Veto, not the mongoDB one
    newVeto.role = "Veterinary"
    newVeto.password = passwordHash.generate(newVeto.password); //crypt password

    await newVeto.save();

    res
      .status(200)
      .json({ msg: `Professional account created successfully!`, newVeto });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not register Veto!" }] });
  }
};

//login
exports.VetLogin = async (req, res) => {
  var { password, email } = req.body;
  try {
    email = email.toLowerCase();
    let foundVet = await vetModel.findOne({ email });
    if (!foundVet)
      return res
        .status(404)
        .send({ errors: [{ msg: "Check your combination! " }] });

    const pass = foundVet.password;
    const comparePass = passwordHash.verify(password, pass);
    if (!comparePass)
      return res
        .status(404)
        .send({ errors: [{ msg: "Check your combination! " }] });

    const token = jwt.sign(
      {
        id: foundVet.idUser,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    res.status(200).json({ msg: `User logged`, foundVet, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Can not login!" }] });
  }
};
//getting all vetos
exports.allVets = async (req, res) => {
  try {
    const foundAllVetos = await ownerModel.find({
      idUser: { $regex: "Veto-" },
    });
    res.status(200).send({ msg: "all vets", foundAllVetos });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get All Vetos" }] });
  }
};

// // //Send mail to reset password
// exports.ResetPassword = async (req, res, next) => {
//   try {
//     let { email } = req.body;
//     email = email.toLowerCase();
//     console.log(email);
//     let foundUser = await ownerModel.findOne({ email });
//     if (!foundUser)
//       return res
//         .status(404)
//         .send({ error: [{ msg: "Email does not exist!" }] });

// //     //Generate OTP
//     foundUser.OTP = Math.floor(100000 + Math.random() * 900000).toString();
//     // console.log(foundUser.OTP);
//     await foundUser.save();

//     const DOMAIN = "sandbox36c8c1a8f8014eb2862a5882b8d5278c.mailgun.org";
//     const mg = mailgun({
//       apiKey: "16b3dc7dbeb555bb665313c78b49eafe-602cc1bf-f1906692",
//       domain: DOMAIN,
//     });
//     const data = {
//       from: "Petoo <no-reply@petoo.tn>",
//       to: foundUser.email,
//       subject: "Rest password for Petoo Account",
//       text: `Ched your OTP 3leya ${foundUser.OTP}`,
//     };
//     mg.messages().send(data, function (error, body) {
//       console.log(body);
//     });
//     res
//       .status(200)
//       .send({ msg: "Email sent Successfully! Check your email box.", email });
//   } catch (error) {
//     res.status(500).send({ errors: [{ msg: "Can not send email!" }] });
//   }
// };

// //validateOTP CODE
// exports.validateOTP = async (req, res) => {
//   try {
//     let { email, otp, password } = req.body;
//     email = email.toLowerCase();
//     let foundUser = await ownerModel.findOne({ email });

//     if (!foundUser)
//       return res
//         .status(404)
//         .send({ error: [{ msg: "Email does not exist!" }] });

//     if (foundUser.OTP !== otp.toString())
//       return res.status(403).send({ error: [{ msg: "OTP does not match!" }] });

//     hashedPass = passwordHash.generate(password);
//     foundUser.password = hashedPass;

//     foundUser.OTP = null;
//     await foundUser.save();
//     res.status(200).send({ msg: "Password successfully changed!" });
//   } catch (error) {
//     res.status(500).send({ errors: [{ msg: "Can not reset password" }] });
//   }
// };
