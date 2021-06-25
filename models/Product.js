const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const productSchema = new Schema ({
idProduct: { type: String, required: true },
idShop: { type: String, required: true },
name:{type: String, required: true},
color:{type: String, default:""},
description:{type: String, default:""},
price:{type: String, required: true},
brand:{type: String, default:""},
promoPrice:{type: String, default: ""},
productType:{type: String, default: ""}, //Food, accessoire, jeu.....
photo:{type: String, default:""},

})


module.exports = mongoose.model("Product", productSchema);