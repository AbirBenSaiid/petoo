const jwt = require("jsonwebtoken");

const shopModel = require("../models/Shop");
const uniqid = require("uniqid");
const passwordHash = require("password-hash");

//register
exports.ShopRegister = async (req, res) => {
  try {
    let { email, taxNumber, shopName} = req.body;
    email = email.toLowerCase();
    //Shop related
    const foundShopByEmail = await shopModel.findOne({ email });
    const foundShopByTaxNumber = await shopModel.findOne({ taxNumber });
    const foundShopByShopName = await shopModel.findOne({ shopName });

    
    if (foundShopByEmail || foundShopByTaxNumber ||foundShopByShopName )
      //email and cin and proNumber are unique
      return res.status(400).send({ errors: [{ msg: "Shop already exist" }] });

    let newShop = new shopModel({ ...req.body });
    newShop.idShop = uniqid("Shop-"); //Create specific Id for Shop, not the mongoDB one
    newShop.role= "Shop"

    newShop.password = passwordHash.generate(newShop.password); //crypt password
console.log(newShop)
    await newShop.save();             
 
    res
      .status(200)
      .json({ msg: `Shop Professional account created successfully!`, newShop });
      console.log(125)
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not register Shop!" }] });
  }
};

//login
exports.ShopLogin = async (req, res) => {
  var { password, email } = req.body;
  try {
    email = email.toLowerCase();
    let foundShop = await shopModel.findOne({ email });
    if (!foundShop)
      return res
        .status(404)
        .send({ errors: [{ msg: "Check your combination! " }] });

    const pass = foundShop.password;
    const comparePass = passwordHash.verify(password, pass);
    if (!comparePass)
      return res
        .status(404)
        .send({ errors: [{ msg: "Check your combination! " }] });

    const token = jwt.sign(
      {
        id: foundShop.idShop,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    res.status(200).json({ msg: `Shop  logged`, foundShop, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Can not login!" }] });
  }
};

// // //Send mail to reset password
// exports.ResetPassword = async (req, res, next) => {
//   try {
//     let { email } = req.body;
//     email = email.toLowerCase();
//     console.log(email);
//     let foundShop = await shopModel.findOne({ email });
//     if (!foundShop)
//       return res
//         .status(404)
//         .send({ error: [{ msg: "Email does not exist!" }] });

// //     //Generate OTP
//     foundShop.OTP = Math.floor(100000 + Math.random() * 900000).toString();
//     // console.log(foundShop.OTP);
//     await foundShop.save();

//     const DOMAIN = "sandbox36c8c1a8f8014eb2862a5882b8d5278c.mailgun.org";
//     const mg = mailgun({
//       apiKey: "16b3dc7dbeb555bb665313c78b49eafe-602cc1bf-f1906692",
//       domain: DOMAIN,
//     });
//     const data = {
//       from: "Petoo <no-reply@petoo.tn>",
//       to: foundShop.email,
//       subject: "Rest password for Petoo Account",
//       text: `Ched your OTP 3leya ${foundShop.OTP}`,
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
//     let foundShop = await shopModel.findOne({ email });

//     if (!foundShop)
//       return res
//         .status(404)
//         .send({ error: [{ msg: "Email does not exist!" }] });

//     if (foundShop.OTP !== otp.toString())
//       return res.status(403).send({ error: [{ msg: "OTP does not match!" }] });

//     hashedPass = passwordHash.generate(password);
//     foundShop.password = hashedPass;

//     foundShop.OTP = null;
//     await foundShop.save();
//     res.status(200).send({ msg: "Password successfully changed!" });
//   } catch (error) {
//     res.status(500).send({ errors: [{ msg: "Can not reset password" }] });
//   }
// };
