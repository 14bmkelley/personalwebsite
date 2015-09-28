var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var router = require("./controllers/router")(express.Router());

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));
app.use(cookieParser());
app.use("/", express.static("./libs"));
app.use("/res", express.static("./public"));
app.use("/", router);

app.use(function(request, response) {
  response.render("template", {
    "title": "not_found"
  });
});

module.exports = app;
