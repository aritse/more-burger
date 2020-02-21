const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  req.body.burgerName = req.body.burgerName.trim().toUpperCase();
  db.Burger.create(req.body).then(dbBurger => res.json(dbBurger));
});

router.get("/", (req, res) => {
  db.Burger.findAll().then(dbBurgers => res.json(dbBurgers));
});

router.put("/:id", (req, res) => {
  db.Burger.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbBurger => res.json(dbBurger));
});

router.get("/:id", (req, res) => {
  db.Burger.findAll({
    where: {
      CustomerId: req.params.id
    }
  }).then(dbBurger => res.json(dbBurger));
});

router.get("/devoured", (req, res) => {
  db.Burger.findAll({
    where: {
      devoured: 1
    }
  }).then(dbBurgers => res.json(dbBurgers));
});

router.get("/available", (req, res) => {
  db.Burger.findAll({
    where: {
      devoured: 0
    }
  }).then(dbBurgers => res.json(dbBurgers));
});

router.delete("/:id", (req, res) => {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbBurger => res.json(dbBurger));
});

module.exports = router;
