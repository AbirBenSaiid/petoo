const routerProduct = require("express").Router();

const { ProductCreate, ProductEdit , allProduct, getProductsOfShop} = require("../controllers/product.controller");
const { creationProduct, validationProduct } = require("../middlewares/validateProduct");

//Route of product creation with some verification on inputs
routerProduct.post("/create", creationProduct(), validationProduct, ProductCreate);

routerProduct.post("/edit", ProductEdit);
routerProduct.get("/allProducts", allProduct);
routerProduct.post("/shopproduct", getProductsOfShop )

module.exports = routerProduct;
