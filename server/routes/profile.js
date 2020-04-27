const express = require("express");
const router = express.Router();
const db = require("../helpers/models/index");
const users = db.users;
const passport = require("passport");

router.get("/", 
passport.authenticate("jwt", { session: false }),
(req, res,) => {
  res.status(200).send("you are in profile" + req.user);
  }
);

module.exports = router;
