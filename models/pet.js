const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//pet Schema
const petSchema = new Schema({
  idPet: { type: String, required: true }, //required ID
  idOwnerOfPet: { type: String, required: true }, //required Id of the Owner of the pet
  name: { type: String, required: true }, // required name
  petType: { type: String, required: true }, //required type of Pet
  race: { type: String, default: "animal" },
  age: { type: String, default: Date.now },
  gender: { type: String, default: null },
  petPictures: { type: Array, default: [] },
  petProfilePicture: {
    type: String,
    default:
      "https://halepetdoorsofaz.com/wp-content/uploads/2019/03/Dog-and-Cat-Silhouette.png",
  },
  isVaccined: { type: Boolean, default: false },
  isDead: { type: Boolean, default: false },
  isOwned: { type: Boolean, default: true },
  color: { type: String, default: "" }, //
  distinguishingMark: { type: String, default: "" }, //
  petCoverPicture: { type: String, default: "" }, //
  knownAllergies: { type: Array, default: [String] }, //
  vaccines: { type: Array, default: [] }, //array of objects {vaccineName, Date }
  medecines: { type: Array, default: [] }, //array of objects {medecineName, Date ,Reason} FOR VETO
});

//pet model
const petModel = mongoose.model("Pet", petSchema);
module.exports = petModel;
