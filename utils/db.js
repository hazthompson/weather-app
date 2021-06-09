// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'weather_app',
// });

const { Sequelize } = require('sequelize');

// Info on how to connect to database with sequelize:
// https://sequelize.org/master/manual/getting-started.html
const sequelize = new Sequelize('weather_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
