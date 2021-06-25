const blogModel = require("../models/Blog");
const ownerModel = require("../models/owner");
const uniqid = require("uniqid");

//register
exports.BlogCreate = async (req, res) => {

  try {
    const { blog, userID } = req.body;
  
    const newBlog = new blogModel(blog);
    if (!userID) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, Log in first" }] });
    }
    const foundUser = await ownerModel.findOne({ idUser: userID });
    if (!foundUser) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Error, try again later" }] });
    }

    
    const { nom, prenom } = foundUser; // we'reb going to add the name of the author , wether admin or Vet
    
    newBlog.preview = (newBlog.content).substring(0, 100)+ "..."
    newBlog.idBlog = uniqid("Blog-"); //Create specific Id for blog, not the mongoDB one
    newBlog.idAuthor = userID; //Added the idUser to the blog
    newBlog.author= prenom + " " + nom

    //Saving
    await newBlog.save();
    
    res.status(200).json({
      msg: `Blog created successfully!`,
      newBlog
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not create Blog" }] });
  }
};

//Edit
exports.BlogEdit = async (req, res) => {
  try {
    const { blogID, userID } = req.body;
  
    const foundBlog = await blogModel.findOne({idBlog: blogID})
    const foundUser = await ownerModel.findOne({idUser: userID})
  
    //checking if the user is the right Author 
    if(foundUser.idUser !== foundBlog.idAuthor ){
      return res.status(404).send({ errors: [{ msg: "You cannot edit this Blog" }] })
    }

    let newData = await blogModel.findOneAndUpdate(
      { idBlog: blogID},
      { $set: { ...req.body } },
      { new: true }
    );
    
    res.status(200).send({ msg: "Blog edited successfully", newData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not modify Blog" }] });
  }
};

//getting all Pets
exports.AllBlogs = async (req, res) => {
  try {
    const foundAllBlogs = await blogModel.find();
    res.status(200).send({ msg: "all Blogs", foundAllBlogs });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "Can not get All blogs" }] });
  }
};
