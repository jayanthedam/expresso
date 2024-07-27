const express = require('express')
const router = express.Router()
const path = require('path');
const fs = require('fs');

const events =  JSON.parse(fs.readFileSync(path.join(__dirname, '../public/javascripts/gallery.json'), 'utf8'));

router.get('/', function(req, res, next) {
  res.render('gallery', { events: events });
});

module.exports = router;