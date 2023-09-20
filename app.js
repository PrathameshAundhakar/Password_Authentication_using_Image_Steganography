const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const mongoose = require("mongoose");
const hash = require("./hash");
const Signup = require("./Signup");
const Login = require("./login");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get("/", function (req, res) {
    res.render("register");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.redirect("/");
});

app.post("/register", function (req, res) {   // let password = req.body.inputPassword; 
    let password = hash.hash(req.body.username, req.body.inputPassword);
    // console.log(password);
    password = Signup.Signup(req.body.username.toString(), password.toString());
    if (password == 1) {
        res.render("success");
    } else {
        res.render("failure");
    }
});

app.post("/login", function (req, res) {

    let password = hash.hash(req.body.username, req.body.inputPassword);
    // console.log(password);
    password = Login.Login(req.body.username.toString(), password.toString());
    if (password == 1) {
        res.render("success");
    } else {
        res.render("failure");
    }
});

app.listen(3000, function () {
    console.log("App is listening at port 3000");
}); 
