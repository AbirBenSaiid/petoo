const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  idAppointment: { type: String, required: true },
  date: { type: String, default: Date.now },
  confirmedByOwner: { type: Boolean, default: false },
  confirmedByVet: { type: Boolean, default: false },
  isDone: { type: Boolean, default: false },
  idPet: { type: String, default: "" },
  idVet: { type: String, default: "" },
  idOwner: { type: String, default: "" },
  description: { type: String, default: "" },
});
const appointmentModel = mongoose.model("Appointment", appointmentSchema);
module.exports = appointmentModel;
