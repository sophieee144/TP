const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

// Quiz route
app.get("/quiz", (req, res) => {
  res.render("quiz");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
