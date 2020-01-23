const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", function(req, res) {
  db.Customer.findAll().then(function(dbCustomers) {
    res.json(dbCustomers);
  });
});

router.get("/withburger", function(req, res) {
  db.Customer.findAll({ include: [db.Burger] }).then(function(dbCustomers) {
    res.json(dbCustomers);
  });
});

router.post("/", function(req, res) {
  db.Customer.create(req.body).then(function(dbCustomer) {
    res.json(dbCustomer);
  });
});

module.exports = router;
