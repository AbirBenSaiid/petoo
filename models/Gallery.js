const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const gallerySchema = new Schema ({
idGallery: { type: String, required: true },
photoUrls:{type: Array, default: []},
creationDate:{type: String, default: Date.now},
idOwner:  { type: String, required: true },
})


module.exports = Gallery = model("gallery", galleySchema);