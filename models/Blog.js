const mongoose= require ('mongoose')
const {Schema, model}= mongoose

const blogSchema = new Schema ({
idBlog: { type: String, required: true },
title: { type: String, required: true },
content: { type: String, required: true },
creationDate:{type: String, default: Date.now },
author: { type: String, default:"Petoo" },
idAuthor: { type: String, required: true },
preview: {type:String, default:""},
blogPicture: {
    type: String,
    default: 
      "https://img.money.com/2021/03/Insurance-Pet-2021-Morning-Consult-Survey-Covid.jpg?quality=60&w=800",
  },
})

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;