var express = require('express');
var router = express.Router();

router.get('/users', function (req, res) {
  res.send('Got a GET request at /users');
});

router.post('/user', function (req, res) {
  res.send('Got a POST request at /users');
});

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /users');
});

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /users');
});

module.exports = router;
