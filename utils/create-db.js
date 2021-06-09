const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

connection.query('CREATE DATABASE weather_app;', function (err, results) {
  if (err) throw err;

  console.log('Database created.');

  connection.query('USE weather_app;', function (err, _results) {
    if (err) throw err;

    connection.query(
      `
      CREATE TABLE users (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(20) NOT NULL,
        lastName VARCHAR(20)
      );
    `,
      function () {
        console.log('Table users created.');
        connection.end();
      }
    );
  });
});

// connection.connect(async function (err, result) {
//   if (err) throw err;

//   console.log('Connected to mysql. Creating database.');

//   await connection.query('CREATE DATABASE weather_app;');
//   console.log('Database created.');

//   await connection.query('USE weather_app;');

//   await connection.query(`
//     CREATE TABLE users (
//       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//       firstName VARCHAR(20) NOT NULL,
//       lastName VARCHAR(20)
//     );
//   `);
//   console.log('Table users created.');

//   connection.end();
// });
