var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit:10,
  host: "remotemysql.com",
  user: "hxPSqm6TO7",
  password: "yfoP5yEYip",
  database: 'hxPSqm6TO7'
});

module.exports.pool = pool;