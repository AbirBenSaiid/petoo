const notification = require("../models/Notification");
const ownerModel = require("../models/owner");

//mark Read notif
exports.markReadNotif = async (req, res) => {
  const { idUser, idNotif } = req.body;
  try {
    const foundNotifOwner = await ownerModel.findOne({ idUser });

    if (!foundNotifOwner)
      //check owner exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    if (!idNotif)
      //check notif exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    const foundNotifInOwner = foundNotifOwner.notificationId.includes(idNotif);

    if (!foundNotifInOwner)
      //check if notif exists in owner notif table
      return res
        .status(400)
        .send({ errors: [{ msg: "This notification doesn't exist" }] });

    const foundNotif = await notification.findOne({ idNotification: idNotif });

    if (!foundNotif)
      return res
        .status(400)
        .send({ errors: [{ msg: "No such Notification" }] });

    if (!foundNotif.isRead) foundNotif.isRead = true;
    else
      return res
        .status(400)
        .send({ msg: "This notification is already read!", read: true });

    await foundNotif.save();

    res.status(200).send({
      msg: `This notif is read`,
      isReadAt: Date.now().toString(),
      foundNotif,
    }); //payload c'est un obbjet qui contient un msg, isReadAt et foundNotif
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not read notification!" }] });
  }
};

//getting all notifs for the current user
exports.getNotif = async (req, res) => {
  try {
    const { idUser } = req.body;
    const foundOwner = await ownerModel.findOne({ idUser }); //hatitha entre () mich {} khater ena badalt fel redux ki nab3athha b3aththa men ghadi objet , kenet ghalta khater

    if (!foundOwner)
      //check owner exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    const arrayOfNotifications = await Promise.all(
      await foundOwner.notificationId.map(async (notif) => {
        const fn = await notification.findOne({ idNotification: notif });

        return fn;
      })
    );

    //payload is table of objects of notifs
    res
      .status(200)
      .send({ msg: "All notifs", arr: await arrayOfNotifications });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get notifs!" }] });
  }
};

// check all notifs all at once
exports.checkAllAtOnce = async (req, res) => {
  const { idUser } = req.body;
  // console.log(idUser);
  // console.log(notificationId);
  try {
    const foundNotifOwner = await ownerModel.findOne({ idUser });

    if (!foundNotifOwner)
      //check owner exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    if (!foundNotifOwner.notificationId) {
      //check notif exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });
    }

    const { notificationId } = foundNotifOwner;
    const arrayOfNotifications = await Promise.all(
      notificationId.map(async (notif) => {
        const nn = await notification.findOne({
          isRead: false,
          idNotification: notif,
        });
        return nn;
      })
    );
    // console.log(arrayOfNotifications);
    const changedArray = await Promise.all(
      arrayOfNotifications.map(async (notif) => {
        if (notif !== null && notif !== undefined && notif.isRead !== true) {
          notif.isRead = true;
          // console.log(notif);
          await notif.save();
        }
        return notif;
      })
    );
    // console.log(changedArray);
    res.status(200).send({ msg: "Cest bon, all checked" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get notifs!" }] });
  }
};
