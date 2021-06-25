const routerBlog = require("express").Router();
const {
  BlogCreate,
  BlogEdit,
  AllBlogs,
} = require("../controllers/blog.controller");
const { creationBlog, validationBlog } = require("../middlewares/validateBlog");

//Creation
routerBlog.post("/create", creationBlog(), validationBlog, BlogCreate);

//Edit
routerBlog.post("/edit", BlogEdit);

// //Get All
routerBlog.get("/getAllBlogs", AllBlogs);

module.exports = routerBlog;
