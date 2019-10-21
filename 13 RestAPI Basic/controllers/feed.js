const {validationResult} = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ 
      title: "First Post", 
      content: "This is the first post!",
      imageUrl:'images/Anish(image).jpg',
      creator:{
        name:'Anish'
      },
      createdAt: new Date()
     }]
  });
};

exports.createPost = (req, res, next) => {
  const err = validationResult(req);
  if(!err.isEmpty()){
    return res.status(422).json({message:"An Error Occured kindly cjeck it on ur server side",err:err})
  }
  const title = req.body.title;
  const content = req.body.content;

  const post =  new Post({
    title: title,
    content: content,
    image:'images/Anish(image).jpg',
    creator:{name:'Anish'}
  })

  post.save().then(result => {
    res.status(201).json({
      message: "Post created successfully!",
      post: result
    });
  })
 
};
