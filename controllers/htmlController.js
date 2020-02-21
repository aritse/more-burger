const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Customer.findAll().then(customers => {
    db.Burger.findAll().then(burgers => res.render("index", { customers, burgers }));
  });
});

module.exports = router;
