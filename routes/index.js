const express = require('express');
const router = express.Router();
var path = require('path');
var fs = require('fs');

var blogPosts = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/javascripts/posts.json'), 'utf8'));

router.get('/', (req, res) => {
  res.render('index', { posts: blogPosts });
});

module.exports = router;
