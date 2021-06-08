var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db',
});

module.exports = connection;
