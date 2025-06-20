var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Favorite Actors' });
});

router.get('/robert', function(req, res) {
  res.render('robert');
});

router.get('/emma', function(req, res) {
  res.render('emma');
});

router.get('/leo', function(req, res) {
  res.render('leo');
});

router.get('/zendaya', function(req, res) {
  res.render('zendaya');
});

module.exports = router;
