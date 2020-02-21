const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  req.body.name = req.body.name.trim().toUpperCase();
  db.Customer.create(req.body).then(dbCustomer => res.json(dbCustomer));
});

router.get("/", (req, res) => {
  db.Customer.findAll().then(dbCustomers => res.json(dbCustomers));
});

router.put("/:id", (req, res) => {
  req.body.name = req.body.name.trim().toUpperCase();
  db.Customer.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbCustomer => res.json(dbCustomer));
});

router.get("/:id", (req, res) => {
  db.Customer.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbCustomer => res.json(dbCustomer));
});

router.get("/withburgers", (req, res) => {
  db.Customer.findAll({
    include: [db.Burger]
  }).then(dbCustomers => res.json(dbCustomers));
});

router.delete("/:id", (req, res) => {
  db.Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCustomer => res.json(dbCustomer));
});

module.exports = router;
