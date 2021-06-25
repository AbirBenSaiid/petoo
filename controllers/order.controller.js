const orderModel = require("../models/Order");
const ownerModel = require("../models/owner");
const shopModel = require("../models/Shop");
const productModel = require("../models/Product");
const Notification = require("../models/Notification");
const uniqid = require("uniqid");


exports.OrderCreate = async (req, res) => {

  try {
    const { shopID, productID,ownerID, order } = req.body;
    
    if (!ownerID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Log in first" }] });
    }
    const foundOwner = await ownerModel.findOne({ idUser: ownerID });
    if (!foundOwner) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }
    const newOrder = new orderModel(order);
    const foundShop = await shopModel.findOne({ idShop: shopID });
    const foundProduct= await productModel.findOne({ idProduct: productID });

    //Create success notification of product creation
    const newNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `${foundOwner.prenom} have just ordred ${newOrder.quantity} ${foundProduct.name}!`,
    });

    //adding the notif id to the shop
    foundShop.notificationId.push(newNotification.idNotification);




    newOrder.idOrder = uniqid("Order-"); //Create specific Id for Order, not the mongoDB one
    newOrder.idProduct = productID; //Added the idUser to the product
    newOrder.idOwner = ownerID; //Added the idUser to the product
    newOrder.idShop = shopID; //Added the idUser to the product
    foundOwner.orderId.push(newOrder.idOrder); //adding idOrderto order table of owner
    foundShop.orderId.push(newOrder.idOrder); //adding idOrderto order table of shop

    await newOrder.save();
    await foundOwner.save();
    await foundShop.save();

    await newNotification.save();

    // some clg's
   
    res.status(200).json({
      msg: `Order created successfully!`,
      newOrder,
      newNotification,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not create Order" }] });
  }
};

exports.OrderEdit = async (req, res) => {
  try {
    const { orderID} = req.body;
    //const foundOrder = await orderModel.findOne({ idOrder: orderID });
    let newData = await orderModel.findOneAndUpdate(
      { idOrder: orderID },
      { $set: { ...req.body } },
      { new: true }
    );
    
    res.status(200).send({ msg: "Order edited successfully", newData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not modify Order!" }] });
  }
};

//getting all Orders
exports.allOrders = async (req, res) => {
  try {
    const foundAllOrders = await orderModel.find();
    res.status(200).send({ msg: "all orders", foundAllOrders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get All orders" }] });
  }
};

exports.getOrdersOfOwner = async (req, res) => {
  try {
    const { idOwner } = req.body;
    const foundOwner = await ownerModel.findOne({ idOwner});

    if (!foundOwner)
      //check owner exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    if (foundOwner.orderId.length === 0) {
      // checking if he has pets
      return res
        .status(400)
        .send({ errors: [{ msg: "You have'nt placed any orders yet" }] });
    }

    const arrayOfOrders = await Promise.all(
      await foundOwner.orderId.map(async (order) => {
        const hisOrders = await orderModel.findOne({ idOrder: order });
        return hisOrders;
      })
    );
    res.status(200).send({ msg: "All your Orders", arr: await arrayOfOrders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get your orders!" }] });
  }
};


exports.getOrdersOfShop = async (req, res) => {
  try {
    const { idShop } = req.body;
    const foundShop = await shopModel.findOne({ idShop });

    if (!foundShop)
      //check Shop exists
      return res
        .status(400)
        .send({ errors: [{ msg: "Login first, please!" }] });

    if (foundShop.orderId.length === 0) {
      // checking if he has pets
      return res
        .status(400)
        .send({ errors: [{ msg: "no one have any orders yet" }] });
    }

    const arrayOfOrders = await Promise.all(
      await foundShop.orderId.map(async (order) => {
        const hisOrders = await orderModel.findOne({ idOrder: order });
        return hisOrders;
      })
    );
    res.status(200).send({ msg: "All your Orders", arr: await arrayOfOrders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get your orders!" }] });
  }
};
