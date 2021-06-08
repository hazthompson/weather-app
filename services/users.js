let db = require('./db');

async function getById(id) {
  let conn = await db.connect();
  let user = conn.query('SELECT * FROM users WHERE id = ?', [id]);

  if (!user) {
    throw new Error('404');
  }

  return user;
}

async function getAll() {
  let conn = await db.connect();
  let users = conn.query('SELECT * FROM users');

  return users;
}

// connection.end();

module.exports = { getById, getAll };
