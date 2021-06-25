const userModel = require("../models/owner");
const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token)
      return res.status(401).send({ errors: [{ msg: "No access!" }] });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userLogged = await userModel
      .findOne({ idUser: decoded.id })
      .select("-password");
    if (!userLogged)
      return res.status(402).send({ errors: [{ msg: "No such account!" }] });
    req.userLogged = userLogged;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized!" }] });
  }
};
