const petModel = require("../models/pet");
const ownerModel = require("../models/owner");
const Notification = require("../models/Notification");
const uniqid = require("uniqid");
const appointment = require("../models/Appointment");

//register
exports.PetCreate = async (req, res) => {
  // we have ownedPets = [idPets]
  // we have name of pet to create
  try {
    const { pet, ownerID } = req.body;
    console.log(req.body);
    const newPet = new petModel(pet);
    const { vaccines, knownAllergies, petPictures } = pet;
    if (!ownerID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    if (!foundOwner) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Cannot find Owner" }] });
    }

    if (foundOwner.maxPetNumber === 3) {
      return res.status(404).send({
        errors: [
          { msg: "You already reached the maximum number of owned Pets!" },
        ],
      });
    }
    const { ownedPets } = foundOwner; // ====== Houniii fama mochkla quelques part marakeztech maaha ======== ..
    // Getting all names of pets that this SPECIFIC owner is already having
    const foundPetArray = await Promise.all(
      // promise.all besh trod map method async khaterha mel man mahech async
      ownedPets.map(async (el) => {
        const pet = await petModel.findOne({ idPet: el });
        console.log(pet);
        const { name } = pet;
        return name;
      })
    );
    //testing if the name of pet already existing is ownedPets of THAT SPECIFIC owner
    const foundPetOfOwner = foundPetArray.includes(newPet.name);
    // console.log(foundPetOfOwner);
    if (foundPetOfOwner) {
      return res.status(405).send({
        errors: [
          {
            msg: "You already used that name for an existing pet! Please change the name",
          },
        ],
      });
    }
    newPet.idPet = uniqid("Pet-"); //Create specific Id for Pet, not the mongoDB one
    newPet.idOwnerOfPet = ownerID; //Added the idUser to the pet
    foundOwner.ownedPets.push(newPet.idPet); //adding idPet to ownedPets table of owner
    foundOwner.maxPetNumber++;

    //initale some arrays
    if (vaccines !== {}) {
      newPet.vaccines.push(vaccines);
    }
    newPet.knownAllergies.push(knownAllergies);
    newPet.petPictures.push(petPictures);

    //Create success notification of pet creation
    const newNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `You have just added ${newPet.name}!`,
    });
    foundOwner.notificationId.push(newNotification.idNotification);

    //Saving
    await newPet.save();
    await foundOwner.save();
    await newNotification.save();

    // some clg's
    console.log(foundOwner.maxPetNumber);
    console.log(foundPetArray);
    res.status(200).json({
      msg: `Pet created successfully!`,
      newPet,
      newNotification,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not create Pet!" }] });
  }
};

exports.PetEdit = async (req, res) => {
  try {
    const { idPet } = req.params;
    console.log(req.body);
    let newData = await petModel.findOneAndUpdate(
      { idPet: idPet },
      { $set: { ...req.body } },
      { new: true }
    );
    console.log(newData);
    res.status(200).send({ msg: "Pet edited successfully", newData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not modify Pet!" }] });
  }
};

//getting all Pets
exports.allPets = async (req, res) => {
  try {
    const foundAllPets = await petModel.find();
    res.status(200).send({ msg: "all pets", foundAllPets });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get All owners" }] });
  }
};

exports.getPetsOfOwner = async (req, res) => {
  try {
    const { idUser } = req.body;
    const foundOwner = await ownerModel.findOne({ idUser });

    if (!foundOwner)
      //check owner exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    if (foundOwner.ownedPets.length === 0) {
      // checking if he has pets
      return res
        .status(400)
        .send({ errors: [{ msg: "Create a pet first please!" }] });
    }

    const arrayOfPets = await Promise.all(
      await foundOwner.ownedPets.map(async (pet) => {
        const hisPet = await petModel.findOne({ idPet: pet });
        return hisPet;
      })
    );
    res.status(200).send({ msg: "All your Pets", arr: await arrayOfPets });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get your pets!" }] });
  }
};

//get assigned pet from appointment to vet
exports.getAssignedPets = async (req, res) => {
  try {
    const { idVet } = req.body;
    if (!idVet) {
      return res.status(404).send({ errors: [{ msg: "Nothing was found!" }] });
    }
    let foundVet = await ownerModel.findOne({ idUser: idVet });

    if (!foundVet) {
      return res.status(404).send({ errors: [{ msg: "Vet was found!" }] });
    }

    const arrayOfAssignedIDPets = await Promise.all(
      foundVet.appointmentId.map(async (app) => {
        const findApp = await appointment.findOne({ idAppointment: app });
        if (findApp.confirmedByVet) return findApp.idPet;
      })
    );
    const arryofNonFilteredPets = await Promise.all(
      arrayOfAssignedIDPets.map(async (pet) => {
        const pt = await petModel.findOne({ idPet: pet });
        if (typeof pet !== undefined && pet !== null) return pt;
        else return;
      })
    );
    const uniqArrayOfPets = arryofNonFilteredPets.filter((e) => e !== null);
    //remove duplicated objects inside array
    const arrayOfPets = [
      ...new Map(uniqArrayOfPets.map((item) => [item.id, item])).values(),
    ];
    // arrayOfPets = [...new Set(arrayOfPets)];
    res
      .status(200)
      .send({ msg: "All your assigned Pets", arr: await arrayOfPets });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ errors: [{ msg: "Can not get your assigned pets!" }] });
  }
};
