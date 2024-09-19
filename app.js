const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "Raja_farhan123",
});
app.get("/", (req, res) => {
  res.send("Server Working Perfectly");
});
app.listen(3000);
