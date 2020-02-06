const express = require("express");
const IndexController = require("../controllers/Home/IndexController");

const router = express.Router();

router.post("/login", IndexController.login);

module.exports = router;
