var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

// require models for syncing
var db = require("./models");

// set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static directory
app.use(express.static("public"));

// set up handlebars
var ehb = require("express-handlebars");
app.engine("handlebars", ehb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//importing my routes from the controllers file.
const htmlRoutes = require("./controllers/htmlController");
const customerRoutes = require("./controllers/customerController");
const burgerRoutes = require("./controllers/burgerController");

//setting my app to use the routes, the first arguent is the prefix applied to all routes in the file
app.use("/", htmlRoutes);
app.use("/api/customer", customerRoutes); //all routes in customerRoutes will start with /api/customer
app.use("/api/burger", burgerRoutes); //all routes in burgerRoutes will start with /api/burger

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("express app listening on port", PORT));
});
