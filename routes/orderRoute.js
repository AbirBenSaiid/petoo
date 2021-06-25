const routerOrder = require("express").Router();

const {OrderCreate, OrderEdit, getOrdersOfOwner,getOrdersOfShop } = require("../controllers/order.controller");
const { creationOrder, validationOrder } = require("../middlewares/validateOrder");



//Route of pet creation with some verification on inputs
routerOrder.post("/create", creationOrder(), validationOrder, OrderCreate);


routerOrder.put("/edit",OrderEdit );

routerOrder.post("/ownerOrders",getOrdersOfOwner );

routerOrder.post("/shopOrders",getOrdersOfShop );




//get pets of that specific owner
// routerPet.post("/getYourPets", getPetsOfOwner);

module.exports = routerOrder;
