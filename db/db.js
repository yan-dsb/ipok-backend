var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "desenvolvimento",
  password: "321242",
  database: "desenv_i"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
