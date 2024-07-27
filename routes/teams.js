var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

const allDetails =  JSON.parse(fs.readFileSync(path.join(__dirname, '../public/javascripts/teams.json'), 'utf8'));

router.get('/', function(req, res,next) {
  res.render('teams', { teams: allDetails });
});

module.exports = router;


