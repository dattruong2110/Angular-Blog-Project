const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

// Middleware
app.use(cors());
app.options('*', cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Getting the posts
app.use('/api/posts', (req, res, next) => {
  const post = [
    {
      id: uuidv4(),
      title: "This is from server",
      content: "Server first content",
      comments: [],
      isLike: 0,
    },
    {
      id: uuidv4(),
      title: "This is from server",
      content: "Server second content",
      comments: [],
      isLike: 0,
    },
  ];
  res.status(200).json({
    message: 'posts fetched successfully',
    posts: post
  });
});

// Posting data
app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  res.status(200).json({
    message: 'Post added successfully'
  })
})

module.exports = app;
