const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const shopSchema = new Schema ({
idShop: { type: String, required: true },
shopName:{type: String, required: true},
email:{type:String, required:true, unique:true},
password:{type:String, required:true},
phoneNumber:{type:Number, required:true},
taxNumber:{type:Number, required:true},
adresse:{type:String, required:true},
ville:{type:String, required:true},
codePostale:{type:Number, required:true},
shippingFees:{type:Number, default:0},
productId:{type:Array,default:[]},
notificationId:{type:Array, default:[]},
orderId:{type:Array, default:[]},
about:{type:String, default:""},
role:{ type: String, default: "shop" },
legalContact:{
    nom:{type: String, required: true},
    prenom:{type: String, required: true},
    email:{type:String, required:true, unique:true},
    phoneNumber:{type:Number, required:true},
    adresse:{type:String, required:true},
    ville:{type:String, required:true},
    codePostale:{type:Number, required:true},
    CIN:{type:Number, required:true}

},


})




const shopModel = mongoose.model("Shop", shopSchema);
module.exports = shopModel;
