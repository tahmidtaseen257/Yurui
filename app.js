//external modules
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

//express setup
app.use(express.static(__dirname + "/client"));
app.set("view engine", "ejs");

//routing
app.get("/", (req, res) => {
  res.render("main");
});

//listening to the port
app.listen(port, () => {
  console.log(`The server is running at the port ${port}`);
});
