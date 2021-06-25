const appointmentModel = require("../models/Appointment");
const ownerModel = require("../models/owner");
const petModel = require("../models/pet");
const Notification = require("../models/Notification");
const uniqid = require("uniqid");

//app creation by Owner
exports.AppointmentCreateByOwner = async (req, res) => {
  try {
    const { vetID, petID, ownerID, appointment } = req.body;

    const newAppointment = new appointmentModel(appointment);
    newAppointment.idAppointment = uniqid("App-"); //Create specific Id for Appointment, not the mongoDB one

    //Security procedures
    //Checking if There are IDS
    if (!vetID || !ownerID || !petID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, none is found!" }] });
    }

    //checking if the IDS given exist in our data base
    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    const foundPet = await petModel.findOne({ idPet: petID });
    if (!foundVet || !foundOwner || !foundPet) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Cannot find profiles" }] });
    }
    newAppointment.idVet = vetID; //Added the idVet to the Appointment
    newAppointment.idPet = petID; //Added the idPet to the Appointment
    newAppointment.idOwner = ownerID; //Added the idPOwner to the Appointment
    newAppointment.confirmedByOwner = true; // since it's created by the owner it's confirmed by him

    foundVet.appointmentId.push(newAppointment.idAppointment); //adding idApp to Vet's appointment table
    foundOwner.appointmentId.push(newAppointment.idAppointment); //adding idApp to owners's appointment table

    //Create success notification of appointment creation for the OWNER
    const newOwnerNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `you have booked an appointment for ${foundPet.name} with ${foundVet.prenom} on ${newAppointment.date}, wait the confimation!`,
    });
    //adding the notif id to the OWNER
    foundOwner.notificationId.push(newOwnerNotification.idNotification);

    //Create a  notification  for the VET
    const newVetNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `An appointment has been booked with you for ${foundOwner.prenom} and his pet ${foundPet.name} on ${newAppointment.date}, please confirm , cancel or edit time!`,
    });
    //adding the notif id to the VET
    foundVet.notificationId.push(newVetNotification.idNotification);

    //Saving
    await newAppointment.save();
    await foundVet.save();
    await foundPet.save();
    await foundOwner.save();
    await newOwnerNotification.save();
    await newVetNotification.save();

    res.status(200).json({
      msg: `Appointment created successfully by owner!`,
      newAppointment,
      newOwnerNotification,
      newVetNotification,
    });
  } catch (error) {
    res
      .status(500)
      .send({ errors: [{ msg: "Can not create Appointment by owner" }] });
  }
};

//app creation by Vet
exports.AppointmentCreateByVet = async (req, res) => {
  try {
    const { vetID, petID, ownerID, appointment } = req.body;

    const newAppointment = new appointmentModel(appointment);
    newAppointment.idAppointment = uniqid("App-"); //Create specific Id for Appointment, not the mongoDB one

    //Security procedures
    //Checking if There are IDS
    if (!vetID || !ownerID || !petID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }

    //checking if the IDS given exist in our data base
    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    const foundPet = await petModel.findOne({ idPet: petID });
    if (!foundVet || !foundOwner || !foundPet) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Cannot find profiles" }] });
    }
    newAppointment.idVet = vetID; //Added the idVet to the Appointment
    newAppointment.idPet = petID; //Added the idPet to the Appointment
    newAppointment.idOwner = ownerID; //Added the idPOwner to the Appointment
    newAppointment.confirmedByVet = true; // since it's created by the Vet it's confirmed by him

    foundVet.appointmentId.push(newAppointment.idAppointment); //adding idApp to Vet's appointment table
    foundOwner.appointmentId.push(newAppointment.idAppointment); //adding idApp to owners's appointment table

    //Create success notification of appointment creation for the Vet
    const newVetNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `you have booked an appointment with ${foundOwner.prenom} and his pet ${foundPet.name} on ${newAppointment.date}, wait the confimation!`,
    });
    //adding the notif id to the Vet
    foundVet.notificationId.push(newVetNotification.idNotification);

    //Create a  notification  for the OWNER
    const newOwnerNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `An appointment has been booked with you for and ${foundPet.name} with ${foundVet.prenom} ${foundVet.nom} on ${newAppointment.date}! , please confirm.`,
    });
    //adding the notif id to the Owner
    foundOwner.notificationId.push(newOwnerNotification.idNotification);

    //Saving
    await newAppointment.save();
    await foundVet.save();
    await foundPet.save();
    await foundOwner.save();
    await newOwnerNotification.save();
    await newVetNotification.save();

    res.status(200).json({
      msg: `Appointment created successfully by vet!`,
      newAppointment,
      newOwnerNotification,
      newVetNotification,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ errors: [{ msg: "Can not create Appointment by vet!" }] });
  }
};

// Not Sure about the following ,so if Correct ,we'll then create edit by owner
exports.AppointmenttEditbyVet = async (req, res) => {
  try {
    const { vetID, ownerID, appointmentID, newDateOfAppointment } = req.body;
    //check the the Accounts (vet and owner)
    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    let foundAppointment = await appointmentModel.findOne({
      idAppointment: appointmentID,
    });
    if (!foundVet || !foundOwner || !foundAppointment) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, can't find accounts" }] });
    }

    const { appointmentId } = foundVet;
    /// Getting all appointments that this SPECIFIC vet has
    const foundAppinArray = await Promise.all(
      appointmentId.map(async (el) => {
        const app = await appointmentModel.findOne({ idAppointment: el });
        const { idAppointment } = app;
        return idAppointment;
      })
    );
    //testing if the app id already existing in the appointment Array of THAT SPECIFIC vet
    const foundAppOfVet = foundAppinArray.includes(
      foundAppointment.idAppointment
    );
    //if it doesnt, he can't edit it
    if (!foundAppOfVet) {
      return res.status(405).send({
        errors: [
          {
            msg: "You cannot edit this appointment",
          },
        ],
      });
    }

    //checking the new date of appointment
    if (Number(newDateOfAppointment) < Number(Date.now().toString())) {
      return res.status(400).send({
        errors: [
          {
            msg: "You cannot set a date for appointment in the Past!",
          },
        ],
      });
    }

    foundAppointment.date = newDateOfAppointment;
    foundAppointment.confirmedByVet = true;
    //send a notif to owner to inform about new appointment modifications & confirmation by Vet
    if (foundAppointment.confirmedByVet && foundAppointment.confirmedByOwner) {
      //set new notif to owner
      const newOwnerNotification = new Notification({
        idNotification: uniqid("Notif-"),
        msg: `Your appointment was modified by ${foundVet.nom} and set a new date on ${newDateOfAppointment}, check it!`,
      });

      //set new notif to Vet
      const newVetNotification = new Notification({
        idNotification: uniqid("Notif-"),
        msg: `You modified an appointment and set a new date on ${newDateOfAppointment}, check it!`,
      });
      //save notif for owner & vet
      await newOwnerNotification.save();
      await newVetNotification.save();

      //adding the notif id to the Owner
      foundOwner.notificationId.push(newOwnerNotification.idNotification);
      //adding the notif id to the Vet
      foundVet.notificationId.push(newVetNotification.idNotification);

      // if confirmed by both, we save modified owner & modified Vet
      await foundOwner.save();
      await foundVet.save();
    }

    //Saving
    await foundAppointment.save();

    //send 200
    res.status(200).send({
      msg: "Appointment edited successfully by vet!",
      foundAppointment,
      // newOwnerNotification,
      // newVetNotification,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ errors: [{ msg: "Can not modify Appointment by vet!" }] });
  }
};

//edit appointment by owner
exports.AppointmenttEditbyOwner = async (req, res) => {
  try {
    const { vetID, ownerID, appointmentID, newDateOfAppointment } = req.body;
    //check the the Accounts (vet and owner)
    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    let foundAppointment = await appointmentModel.findOne({
      idAppointment: appointmentID,
    });
    if (!foundVet || !foundOwner || !foundAppointment) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, can't find accounts" }] });
    }

    const { appointmentId } = foundVet;
    /// Getting all appointments that this SPECIFIC vet has
    const foundAppinArray = await Promise.all(
      appointmentId.map(async (el) => {
        const app = await appointmentModel.findOne({ idAppointment: el });
        const { idAppointment } = app;
        return idAppointment;
      })
    );
    //testing if the app id already existing in the appointment Array of THAT SPECIFIC vet
    const foundAppOfVet = foundAppinArray.includes(
      foundAppointment.idAppointment
    );
    //if it doesnt, he can't edit it
    if (!foundAppOfVet) {
      return res.status(405).send({
        errors: [
          {
            msg: "You cannot edit this appointment",
          },
        ],
      });
    }

    //checking the new date of appointment
    if (Number(newDateOfAppointment) < Number(Date.now().toString())) {
      return res.status(400).send({
        errors: [
          {
            msg: "You cannot set a date for appointment in the Past!",
          },
        ],
      });
    }

    foundAppointment.date = newDateOfAppointment;
    foundAppointment.confirmedByOwner = true;
    //send a notif to owner to inform about new appointment modifications & confirmation by Vet
    if (foundAppointment.confirmedByVet && foundAppointment.confirmedByOwner) {
      //set new notif to owner
      const newOwnerNotification = new Notification({
        idNotification: uniqid("Notif-"),
        msg: `Your modified your appointment and set a new date on ${newDateOfAppointment}!`,
      });

      //set new notif to Vet
      const newVetNotification = new Notification({
        idNotification: uniqid("Notif-"),
        msg: `Your appointment with ${foundOwner.nom} was modified and set a new date on ${newDateOfAppointment}, check it!`,
      });
      //save notif for owner & vet
      await newOwnerNotification.save();
      await newVetNotification.save();

      //adding the notif id to the Owner
      foundOwner.notificationId.push(newOwnerNotification.idNotification);
      //adding the notif id to the Vet
      foundVet.notificationId.push(newVetNotification.idNotification);

      // if confirmed by both, we save modified owner & modified Vet
      await foundOwner.save();
      await foundVet.save();
    }

    //Saving
    await foundAppointment.save();

    //send 200
    res.status(200).send({
      msg: "Appointment edited by owner successfully",
      foundAppointment,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ errors: [{ msg: "Can not modify Appointment by owner!" }] });
  }
};

// app accept by Owner
exports.AppointmentAcceptbyOwner = async (req, res) => {
  try {
    const { vetID, ownerID, petID, appointmentID } = req.body;

    if (!appointmentID || !vetID || !ownerID || !petID) {
      return res.status(400).send({
        errors: [
          {
            msg: "No such Appointment!",
          },
        ],
      });
    }
    //updating the appointment details
    let foundApp = await appointmentModel.findOne({
      idAppointment: appointmentID,
    });
    foundApp.confirmedByOwner = true;

    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    const foundPet = await petModel.findOne({ idPet: petID });

    //Create a  notification  for the VET
    const newNotificationVet = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `The Appointment with  ${foundOwner.prenom} and his pet ${foundPet.name} on ${foundApp.date} has been accepted!`,
    });
    const newNotificationOwner = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `You accepted tou Appointment with ${foundVet.nom} for ${foundPet.name} on ${foundApp.date}!`,
    });

    //adding the notif id to the VET & Owner
    foundVet.notificationId.push(newNotificationVet.idNotification);
    foundOwner.notificationId.push(newNotificationOwner.idNotification);
    //Saving
    await foundApp.save();
    await foundVet.save();
    await foundOwner.save();
    await newNotificationVet.save();
    await newNotificationOwner.save();

    res.status(200).json({
      msg: `Appointment accepted by owner successfully!`,
      foundApp,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ errors: [{ msg: "Can not accept Appointment by owner!" }] });
  }
};

// app accept by Vet
exports.AppointmentAcceptbyVet = async (req, res) => {
  try {
    const { vetID, ownerID, petID, appointmentID } = req.body;

    if (!appointmentID || !vetID || !ownerID || !petID) {
      return res.status(400).send({
        errors: [
          {
            msg: "No such Appointment!",
          },
        ],
      });
    }
    //updating the appointment details
    let foundApp = await appointmentModel.findOne({
      idAppointment: appointmentID,
    });
    foundApp.confirmedByVet = true;
    const foundVet = await ownerModel.findOne({ idUser: vetID });
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    const foundPet = await petModel.findOne({ idPet: petID });

    //Create a  notification  for the OWNER
    const newNotificationOwner = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `The Appointment with  ${foundVet.prenom} for ${foundPet.name} on ${foundApp.date} has been accepted!`,
    });
    const newNotificationVet = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `You accepted the Appointment with  ${foundOwner.prenom} for ${foundPet.name} on ${foundApp.date}!`,
    });

    //adding the notif id to the OWNER
    foundOwner.notificationId.push(newNotificationOwner.idNotification);
    foundVet.notificationId.push(newNotificationVet.idNotification);

    //Saving
    await foundApp.save();
    await foundVet.save();
    await foundOwner.save();
    await newNotificationOwner.save();
    await newNotificationVet.save();

    res.status(200).json({
      msg: `Appointment accepted successfully!`,
      foundApp,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ errors: [{ msg: "Can not accept Appointment by vet!" }] });
  }
};

exports.getMyAppointments = async (req, res) => {
  try {
    const { idUser } = req.body;
    if (!idUser) {
      return res.status(404).send({ errors: [{ msg: "No user found!" }] });
    }
    const foundUser = await ownerModel.findOne({ idUser });

    if (!foundUser) {
      return res.status(404).send({ errors: [{ msg: "No user found 2!" }] });
    }
    const arrayOfAppointments = await Promise.all(
      foundUser.appointmentId.map(async (appointment) => {
        const app = await appointmentModel.findOne({
          idAppointment: appointment,
        });
        return app;
      })
    );
    // console.log(arrayOfAppointments);
    res.status(200).send({ msg: "your appointments", arrayOfAppointments });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get My appointments!" }] });
  }
};
