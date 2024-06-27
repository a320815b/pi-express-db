var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Lucelia Ribeiro de Andrade',
    date: new Date().toLocaleDateString()
    time: new Date().toLocaleTimeString()
  });
});

module.exports = router;
