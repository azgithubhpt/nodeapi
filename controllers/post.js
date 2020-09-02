const Post = require("../models/post");
const { body, validationResult } = require("express-validator");

exports.getPosts = (req, res, next) => {
  const posts = Post.find()
    .then((posts) => {
      res.json({ posts: posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res, next) => {
  const post = new Post(req.body);
  post
    .save()
    .then((result) => {
      res.status(200).json({
        post: result,
      });
    })
    .catch((error) => console.log(error));
  next();
};
