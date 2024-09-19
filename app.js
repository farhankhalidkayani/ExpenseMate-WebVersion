const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
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
  let q = "SELECT count(*) FROM expenses";
  connection.query(q, (err, count) => {
    if (err) {
      res.render("dberr.ejs", { message: err.sqlMessage });
    } else {
      res.render("index.ejs", { count: count[0]["count(*)"] });
    }
  });
});
app.get("/expenses", (req, res) => {
  let q = "SELECT * FROM expenses";
  connection.query(q, (err, expenses) => {
    if (err) {
      res.render("dberr.ejs", { message: err.sqlMessage });
    } else {
      res.render("expenses.ejs", { expenses });
    }
  });
});
app.get("/expenses/new", (req, res) => {
  res.render("newForm.ejs");
});
app.post("/expenses", (req, res) => {
  let q =
    "INSERT INTO expenses (amount,category,date,description) VALUES (?,?,?,?)";
  let { amount, category, date, description } = req.body;
  connection.query(q, [amount, category, date, description], (err, result) => {
    if (err) {
      res.render("dberr.ejs", { message: err.sqlMessage });
    } else {
      res.redirect("/expenses");
    }
  });
});
app.get("/expenses/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = "SELECT * FROM expenses WHERE id = ?";
  connection.query(q, [id], (err, expense) => {
    if (err) {
      res.render("dberr.ejs", { message: err.sqlMessage });
    } else {
      res.render("editForm.ejs", { expense: expense[0] });
    }
  });
});
app.patch("/expenses/:id", (req, res) => {
  let { id } = req.params;
  let { amount, category, date, description } = req.body;
  let q =
    "UPDATE expenses SET amount= ? , category=? , date=? , description=? WHERE id = ?";
  connection.query(
    q,
    [amount, category, date, description, id],
    (err, result) => {
      if (err) {
        res.render("dberr.ejs", { message: err.sqlMessage });
      } else {
        res.redirect("/expenses");
      }
    }
  );
});
app.delete("/expenses/:id", (req, res) => {
  let { id } = req.params;
  let q = "DELETE FROM expenses WHERE id = ?";
  connection.query(q, [id], (err, result) => {
    if (err) {
      res.render("dberr.ejs", { message: err.sqlMessage });
    } else {
      res.redirect("/expenses");
    }
  });
});
app.use("/", (req, res) => {
  res.render("404.ejs");
});
app.listen(3000);
