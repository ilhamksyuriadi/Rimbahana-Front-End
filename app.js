let express = require("express");
let path = require("path");

let app = express();

//View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Set static path
app.use(express.static(path.join(__dirname, "public")));

//Route
app.get("/", (req, res) => {
  res.render("index");
});

//Set server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
