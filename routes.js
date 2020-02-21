const router = require("express").Router();

const burgerRoutes = require("./controllers/burgerController");
const customerRoutes = require("./controllers/customerController");
const htmlRoutes = require("./controllers/htmlController");

router.use("/burger", burgerRoutes);
router.use("/customer", customerRoutes);
router.use("/", htmlRoutes);

module.exports = router;
