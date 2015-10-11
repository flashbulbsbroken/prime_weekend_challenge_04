var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  console.log('router html');
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
