const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	database: "informatics",
	password: "password1234",
	user: "root",
});

module.exports = db;
