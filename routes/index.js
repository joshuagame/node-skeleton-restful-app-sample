var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the <b>Node.js RESTful simple study skeleton application</b>')
});

module.exports = router;
