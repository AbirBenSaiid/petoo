const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Ower Schema
const ownerSchema = new Schema({
  idUser: { type: String, required: true }, //required ID
  nom: { type: String, required: true, minlength: 2, maxlength: 20 }, //required nom
  prenom: { type: String, required: true, minlength: 2, maxlength: 20 }, //required prenom
  password: { type: String, required: true }, //required password
  email: { type: String, required: true }, //required email
  phoneNumber: { type: String, default: null },
  dateNaissance: { type: String, minlength: 10, default: Date.now },
  gender: { type: String, default: null },
  adresse: { type: String, maxlength: 50, default: "" },
  ville: { type: String, default: "" },
  codePostale: { type: String, maxlength: 4, default: "" },
  maxPetNumber: { type: Number, max: 3, default: 0 },
  profilePicture: { type: String, default: "" },
  ownedPets: { type: Array, default: [] },
  OTP: { type: String, default: "" },
  notificationId: { type: Array, default: [] }, // table of notifs
  orderId: { type: Array, default: [] }, //
  role: { type: String, default: "petOwner" },
  CIN: { type: String, default: "", length: 8 }, // vet realted
  about: { type: String, default: "" },
  proNumber: { type: String, default: "" },
  appointmentId: { type: Array, default: [] },
  isBanned : {type:Boolean,default : false},
});

//Owner model
const ownerModel = mongoose.model("Owner", ownerSchema);
module.exports = ownerModel;
