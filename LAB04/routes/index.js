var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'My Favorite Actors' });
});

router.get('/leo', function(req, res) {
  res.render('leo');
});

router.get('/emma', function(req, res) {
  res.render('emma');
});

router.get('/tom', function(req, res) {
  res.render('tom');
});

router.get('/zendaya', function(req, res) {
  res.render('zendaya');
});

module.exports = router;
