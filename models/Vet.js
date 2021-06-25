const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const vetSchema = new Schema ({
idVet: { type: String, required: true },
nom:{type: String, required: true},
prenom:{type: String, required: true},
email:{type:String, required:true, unique:true},
password:{type:String, required:true},
phoneNumber:{type:Number, required:true},
dateOfBirth: { type: String, minlength: 10, default: Date.now },
gender: { type: String, default: null },
adress:{type:String, required:true},
ville:{type:String, required:true},
codePostale:{type:Number, required:true},
petId:{type:Array, default:[]},
notificationId:{type:Array, default:[]},
orderId:{type:Array, default:[]},
about:{type:String, default:""},
cin:{type:Number, required:true},
profilePicture: { type: String, default: "" },
role:{ type: String, default: "vet" }

})



const vetModel = mongoose.model("Vet", vetSchema);
module.exports = vetModel;
