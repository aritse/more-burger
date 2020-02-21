const ehb = require("express-handlebars");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", ehb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => console.log(`express app listening on ${PORT}`));
// toggle if models change
// require("./models")
//   .sequelize.sync()
//   .then(() => app.listen(port, () => console.log(`express app listening on ${port}`)));
