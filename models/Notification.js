const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const notificationSchema = new Schema({
  idNotification: { type: String, required: true },
  msg: { type: String, required: true },
  creationDate: { type: String, required: true, default: Date.now },
  isRead: { type: Boolean, default: false },
});

module.exports = notification = model("notification", notificationSchema);
