var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.json([
    { id: 1, username: 'first-person' },
    { id: 2, username: 'second-person' },
  ]);
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
