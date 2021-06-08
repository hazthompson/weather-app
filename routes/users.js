var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Got a GET request at /users');
});

router.post('/', function (req, res) {
  res.send('Got a POST request at /users');
});

router.put('/', function (req, res) {
  res.send('Got a PUT request at /users');
});

router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /users');
});

module.exports = router;
