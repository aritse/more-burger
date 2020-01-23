var express = require("express");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//importing my routes from the controllers file.
const htmlRoutes = require("./controllers/htmlController");
const customerRoutes = require("./controllers/customerController");
const burgerRoutes = require("./controllers/burgerController");

//setting my app to use the routes, the first arguent is the prefix applied to all routes in the file
app.use("/", htmlRoutes);
//all routes in customerRoutes will start with /api/customer
app.use("/api/customer", customerRoutes);
//all routes in burgerRoutes will start with /api/burger
app.use("/api/burger", burgerRoutes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
