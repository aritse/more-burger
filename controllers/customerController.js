const db = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  db.Customer.findAll({}).then(dbCustomers => res.json(dbCustomers));
});

router.post("/", (req, res) => {
  db.Customer.create(req.body).then(dbCustomer => res.json(dbCustomer));
});

router.get("/withburgers", (req, res) => {
  db.Customer.findAll({
    include: [db.Burger]
  }).then(dbCustomers => res.json(dbCustomers));
});

router.put("/:id", (req, res) => {
  db.Customer.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbCustomer => res.json(dbCustomer));
});

router.delete("/:id", (req, res) => {
  db.Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCustomer => res.json(dbCustomer));
});

module.exports = router;
