const db = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  db.Burger.findAll().then(dbBurgers => res.json(dbBurgers));
});

router.post("/", (req, res) => {
  db.Burger.create(req.body).then(dbBurger => res.json(dbBurger));
});

router.get("/withcustomer", (req, res) => {
  db.Burger.findAll({
    include: [db.Customer]
  }).then(dbBurgers => res.json(dbBurgers));
});

router.put("/:id", (req, res) => {
  db.Burger.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbBurger => res.json(dbBurger));
});

router.delete("/:id", (req, res) => {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbBurger => res.json(dbBurger));
});

module.exports = router;
