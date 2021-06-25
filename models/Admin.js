const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const adminSchema = new Schema ({
idAdmin: { type: String, required: true },
nom:{type: String, required: true},
prenom:{type: String, required: true},
gender: { type: String, default: null },
image: { type: String, default: "" },
email:{type:String, required:true, unique:true},
password:{type:String, required:true},
phoneNumber:{type:Number, required:true},
dateNaissance: { type: String, minlength: 10, default: Date.now },
adresse: { type: String, maxlength: 50, default: "" },
ville: { type: String, default: "" },
codePostale: { type: String, maxlength: 4, default: "" },
notificationId:{type:Array, default:[]},
role:{ type: String, default: "Admin" }

})


module.exports = Admin = model("admin", adminSchema);