const jwt = require("jsonwebtoken");
const ownerModel = require("../models/owner");
const Notification = require("../models/Notification");
const uniqid = require("uniqid");
const passwordHash = require("password-hash");
const mailgun = require("mailgun-js");

//register
exports.Register = async (req, res) => {
  try {
    let { email } = req.body;
    email = email.toLowerCase();
    const foundOwner = await ownerModel.findOne({ email });
    if (foundOwner)
      return res.status(400).send({ errors: [{ msg: "Email already exist" }] });

    let newOwner = new ownerModel({ ...req.body });
    newOwner.idUser = uniqid("Owner-"); //Create specific Id for Owner, not the mongoDB one

    newOwner.password = passwordHash.generate(newOwner.password); //crypt password
    await newOwner.save();

    res.status(200).json({ msg: `Account created successfully!` });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Can not register!" }] });
  }
};

//login
exports.Login = async (req, res) => {
  var { password, email } = req.body;
  try {
    email = email.toLowerCase();
    let foundOwner = await ownerModel.findOne({ email });
    if (!foundOwner)
      return res
        .status(404)
        .send({ errors: [{ msg: "Check your combination! " }] });
    if (foundOwner.isBanned ==true )
    return res
    .status(404)
    .send({ errors: [{ msg: "You are banned from the platform please call support " }] });
    const pass = foundOwner.password;
    const comparePass = passwordHash.verify(password, pass);
    if (!comparePass)
      return res
        .status(404)
        .send({ errors: [{ msg: "Check your combination! " }] });

    const token = jwt.sign(
      {
        id: foundOwner.idUser,
      },
      process.env.SECRET_KEY,
      { expiresIn: "8h" }
    );

    res.status(200).json({ msg: `Owner logged`, foundOwner, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Can not login!" }] });
  }
};

//Send mail to reset password
exports.ResetPassword = async (req, res) => {
  try {
    let { email } = req.body;
    email = email.toLowerCase();
    let foundUser = await ownerModel.findOne({ email });
    if (!foundUser)
      return res
        .status(404)
        .send({ error: [{ msg: "Email does not exist!" }] });

    //Generate OTP
    foundUser.OTP = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(foundUser.OTP);
    await foundUser.save();

    const DOMAIN = "sandbox09128b64974140b5b326116e19613ad5.mailgun.org";
    const mg = mailgun({
      apiKey: "24f3dfe1e5acba7712d5dbd9d0263b20-602cc1bf-e1643176",
      domain: DOMAIN,
    });
    const data = {
      from: "Petoo <no-reply@petoo.tn>",
      to: foundUser.email,
      subject: "Rest password for Petoo Account",
      text: `Ched your OTP 3leya ${foundUser.OTP}`,
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
    res
      .status(200)
      .send({ msg: "Email sent Successfully! Check your email box.", email });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Can not send email!" }] });
  }
};

//validateOTP CODE
exports.validateOTP = async (req, res) => {
  try {
    let { email, otp, password } = req.body;
    email = email.toLowerCase();
    let foundUser = await ownerModel.findOne({ email });

    if (!foundUser)
      return res
        .status(404)
        .send({ error: [{ msg: "Email does not exist!" }] });
    if (foundUser.OTP !== otp.toString())
      return res.status(403).send({ errors: [{ msg: "OTP does not match!" }] });

    hashedPass = passwordHash.generate(password);
    foundUser.password = hashedPass;

    foundUser.OTP = null;
    await foundUser.save();
    res.status(200).send({ msg: "Password successfully changed!" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Can not reset password" }] });
  }
};

//getting all Owners
exports.allOwners = async (req, res) => {
  try {
    const foundAllOwners = await ownerModel.find({
      idUser: { $regex: "Owner-" },
    });
    res.status(200).send({ msg: "all owners", foundAllOwners });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get All owners" }] });
  }
};

exports.OwnerEdit = async (req, res) => {
  try {
    const { user } = req.body;
    if (!user)
      return res
        .status(404)
        .send({ errors: [{ msg: "Something went wrong!" }] });
    const { idUser, password } = user;
    let foundUser = await ownerModel.findOne({ idUser });
    if (password) {
      //if pass has ben changed
      newPassword = passwordHash.generate(password); //crypt
      foundUser = await ownerModel.findOneAndUpdate(
        { idUser },
        {
          $set: { ...user, password: newPassword },
        }
      );
    } else {
      //if NOT
      foundUser = await ownerModel.findOneAndUpdate(
        { idUser },
        {
          $set: { ...user },
        }
      );
    }
    const newNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `Your modifications in your profile were applied successfully!`,
    });

    foundUser.notificationId.push(newNotification.idNotification);

    await foundUser.save();
    await newNotification.save();

    res.status(200).send({ msg: "Profile edited successfully!", foundUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not modify!" }] });
  }
};

