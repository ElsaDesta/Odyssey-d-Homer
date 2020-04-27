const express = require("express");
const router = express.Router();
const db = require("../helpers/models/index");
const users = db.users;
const bcrypt = require("bcrypt");

/**
 * POST for Vote Submission into vote_table
 */
router.post("/", (req, res, next) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastname: req.body.lastname,
  };
  //adding the new user to the databasetable
  //bcrypt is async--it takes
  bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      users
        .create(
          {
            email: user.email,
            password: hash,
            name: user.name,
            lastname: user.lastname,
          },
          { returning: true }
        )
        .then(() => res.status(200).send({ message: "You have registered!" }))
        .catch((userErr) => console.error(`user error: ${userErr}`));
    })

    .catch((hashErr) => console.error(`hashing errors: ${hashErr}`));
});

module.exports = router;

//const newUser = new user ({  })
