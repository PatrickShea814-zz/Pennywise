const router = require("express").Router();
const contactRoute = require("./form");

// Contact Us Route
router.use("/form", contactRoute);

module.exports = router;
