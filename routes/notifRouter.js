const notifOwner = require("express").Router();
const {
  markReadNotif,
  getNotif,
  checkAllAtOnce,
} = require("../controllers/notif.controller");

//mark read only one notif at once
notifOwner.post("/isRead", markReadNotif);

//get All notif for the connected user
notifOwner.post("/getnotif", getNotif);

//check all notifs at once
notifOwner.post("/checkAllAtOnce", checkAllAtOnce);
//export
module.exports = notifOwner;
