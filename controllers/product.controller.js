const petModel = require("../models/pet");
const shopModel = require("../models/Shop");
const productModel = require("../models/Product");
const Notification = require("../models/Notification");
const uniqid = require("uniqid");

//register
exports.ProductCreate = async (req, res) => {

  try {
    const { product, shopID } = req.body;
    const newProduct = new productModel(product);
  //Security procedures
    if (!shopID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }
    const foundShop = await shopModel.findOne({ idShop: shopID });
  
    if (!foundShop) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Cannot find Shop" }] });
    }

    
    newProduct.idProduct = uniqid("Product-"); //Create specific Id for Product, not the mongoDB one
    newProduct.idShop = shopID; //Added the idShop to the product
    foundShop.productId.push(newProduct.idProduct); //adding idProduct to shop's product table 
    

  
    //Create success notification of product creation
    const newNotification = new Notification({
      idNotification: uniqid("Notif-"),
      msg: `You have just added ${newProduct.name}!`,
    });

    //adding the notif id to the shop
    foundShop.notificationId.push(newNotification.idNotification);

    //Saving
    await newProduct.save();
    await foundShop.save();
    await newNotification.save();

    
    
    
    res.status(200).json({
      msg: `Product created successfully!`,
      newProduct,
      newNotification,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not create Product!" }] });
  }
};

exports.ProductEdit = async (req, res) => {
  try {
    const { productID , shopID} = req.body ;
    
    //check the product
const foundProduct= await productModel.findOne({ idProduct: productID })
if (!foundProduct){
  return res
  .status(404)
  .send({ errors: [{ msg: "Error, can't find product" }] });
}

//check the shop
const foundShop= await shopModel.findOne({ idShop: shopID })
if (!foundShop){
  return res
  .status(404)
  .send({ errors: [{ msg: "Error, can't find your Shop" }] });
}


const { productId } = foundShop;
// Getting all products that this SPECIFIC shop has
const foundProductinArray = await Promise.all(
  productId.map(async (el) => {
    const product = await productModel.findOne({ idProduct: el });
    const { idProduct } = product;
    return idProduct;
  })
);
//testing if the product id already existing in owned product of THAT SPECIFIC shop
const foundProductOfShop = foundProductinArray.includes(foundProduct.idProduct);

if (!foundProductOfShop) {
  return res.status(405).send({
    errors: [
      {
        msg: "You cannot edit this product",
      },
    ],
  });
}

    let newData = await productModel.findOneAndUpdate(
      { idProduct: productID },
      { $set: { ...req.body} },
      { new: true }
    );
    console.log(newData);
    res.status(200).send({ msg: "Product edited successfully", newData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not modify Product!" }] });
  }
};


exports.allProduct = async (req, res) => {
  try {
    const foundAllProducts = await productModel.find();
    res.status(200).send({ msg: "all products", foundAllProducts });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get All products" }] });
  }
};

exports.getProductsOfShop = async (req, res) => {
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
        .send({ errors: [{ msg: "No products available yet!" }] });
    }

    const arrayOfProducts = await Promise.all(
      await foundShop.oorderId.map(async (product) => {
        const hisProducts = await productModel.findOne({ idProduct: product });
        return hisProducts;
      })
    );
    res.status(200).send({ msg: "All Products", arr: await arrayOfProducts });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get the products" }] });
  }
};
