var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
const Blogs =  JSON.parse(fs.readFileSync(path.join(__dirname, '../public/javascripts/posts.json'), 'utf8'));
/* GET users listing. */
router.get('/', function(req, res,next) {
  res.render('blogs', { posts: Blogs });
});

module.exports = router;
