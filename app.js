let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

//View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Set static path
app.use(express.static(path.join(__dirname, "public")));

//Set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Route
//Home page
app.get("/", (req, res) => {
  res.render("index");
});

//Information page
app.get("/information", (req, res) => {
  res.render("info");
});

//Registration page
app.get("/registration", (req, res) => {
  res.render("regis");
});

//Set server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
