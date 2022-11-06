const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

// Middleware
app.use(cors());
app.options('*', cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Getting the posts
app.use('/api/posts', (req, res, next) => {
  const post = [
    {
      id: "1811060165",
      title: "This is from server",
      content: "Server first content",
      date: 'Nov 4, 2022, 7:41:55 PM',
    },
    {
      id: "1811060166",
      title: "This is from server",
      content: "Server second content",
      date: 'Nov 4, 2022, 7:45:55 PM'
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
