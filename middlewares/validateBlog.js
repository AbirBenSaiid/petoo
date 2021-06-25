const { validationResult, check } = require("express-validator");

exports.creationBlog = () => [
  check("blog.title", "Give your blog a title!").isLength({ min: 2 }),
  check("blog.content", "Please enter the content of ytour blog").isLength({ min: 130 }),
];

exports.validationBlog = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
