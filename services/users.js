let db = require('../utils/db');

async function getById(id) {
  let conn = db.connect();
  let user = conn.query('SELECT * FROM users WHERE id = ?', [id]);

  if (!user) {
    throw new Error('404');
  }

  return user;
}

async function getAll() {
  let conn = db.connect();
  let users = conn.query('SELECT * FROM users');

  return users;
}

async function createUser({ firstName, lastName }) {
  let conn = await db.connect();
  await conn.query(`
    INSERT INTO users (first_name, last_name) VALUES (${firstName}, ${lastName});
  `);
  conn.end();

  return users;
}

// connection.end();

module.exports = { getById, getAll };
