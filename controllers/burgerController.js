const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", function(req, res) {
  db.Burger.findAll().then(function(dbBurgers) {
    res.render("index", { burgers: dbBurgers });
  });
});

router.get("/withcustomer", function(req, res) {
  db.Burger.findAll({ include: [db.Customer] }).then(function(dbBurgers) {
    res.json(dbBurgers);
  });
});

router.post("/", function(req, res) {
  db.Burger.create(req.body).then(function(dbBurger) {
    res.json(dbBurger);
  });
});

module.exports = router;
