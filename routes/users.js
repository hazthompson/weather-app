var express = require('express');
var router = express.Router();
const User = require('../models/User');

router.get('/', async function (req, res) {
  const users = await User.findAll();
  res.json(users);
});

router.post('/', async function (req, res) {
  const { firstName, lastName } = req.body;

  if (!firstName) {
    res.json({ error: 'Please provide a firstName.' });
  } else {
    await User.create({ firstName, lastName });
    res.status(201).end();
  }
});

router.put('/', function (req, res) {
  res.send('Got a PUT request at /users');
});

router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /users');
});

module.exports = router;
