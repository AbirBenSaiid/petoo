const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const orderSchema = new Schema ({
idOrder: { type: String, required: true },
idProduct: { type: String, required: true },
idShop: { type: String, required: true },
idOwner: { type: String, required: true },
quantity: { type: Number, required: true },
status: { type: String, default: "Pending" },
clientBillingInformation: {
    nom: { type: String, required: true, minlength: 2, maxlength: 20 }, //required nom
    prenom: { type: String, required: true, minlength: 2, maxlength: 20 }, //required prenom
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true }, //required email
    adresse: { type: String, maxlength: 50, required: true },
    ville: { type: String, required: true },
    codePostale: { type: String, maxlength: 4, required: true },
}

})




const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;
