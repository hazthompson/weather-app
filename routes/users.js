var express = require('express');
var router = express.Router();
let users = require('./services/users');

router.get('/', async function (req, res) {
  const allUsers = await users.getAll();
  res.json(allUsers);
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
