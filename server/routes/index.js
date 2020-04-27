var express = require("express");
var router = express.Router();
const db = require("../helpers/models");


/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({ title: "Express" });
});

module.exports = router;
