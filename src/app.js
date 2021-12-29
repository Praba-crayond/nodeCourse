const express = require("express");
const path = require("path");

const app = express();

// define path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../templates");

// setup handle bar engine and views location
app.set("view engine", "hbs");
app.set("views", viewspath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/help", (req, res) => {
  res.render("help", { message: "how can I help u" });
});
console.log("adadad");
app.listen(8080, () => {
  console.log("Server is up on port 8080");
});
