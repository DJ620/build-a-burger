// Requiring my dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

// Creating my express server
const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Telling my server to use the api routes in the burgers_controller.js file
app.use(routes);

// Spinning up my server when the file is run
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});