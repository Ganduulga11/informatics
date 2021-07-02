const express = require("express");
const cors = require("cors");
const database = require("./config/database");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post("/intro", (req, res) => {
	const title = req.body.title;
	const body = req.body.body;

	var sqlInsertIntro = `INSERT INTO intro (intro_title, intro_body) VALUES ('${title}','${body}')`;
	database.query(sqlInsertIntro, (err, result) => {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

app.get("/", (req, res) => {
	let sqlSelect = `SELECT * FROM intro`;
	database.query(sqlSelect, (err, result) => {
		if (err) {
			res.send(err);
		} else {
			res.json(result);
		}
	});
});

app.listen(3003, () => {
	console.log("runnig on port");
});
