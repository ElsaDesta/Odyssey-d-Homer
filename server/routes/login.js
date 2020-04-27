require("dotenv").config();

const express = require("express");
const router = express.Router();
const db = require("../helpers/models/index");


const jwt = require("jsonwebtoken");
const passport = require("passport");
const {APP_SECRET} = process.env;

router.post("/", (req, res, next) => {
    //add login route logic
    passport.authenticate("local", (err, user, info) => {
        err && res.status(500).send(err);
        !user && res.status(400).send(info);

        //get uuid generator for the secret
        const token = jwt.sign(JSON.stringify(user), APP_SECRET);
         //jsonstring becuse we are sending it to the clinet?

         const secureUser = {
             email: user.email,
             name: user.name,
             lastname: user.lastname
         };
        return res.status(200).send({ secureUser, token }); //for the quest store in redux??

    })(req, res, next);
    
});

module.exports = router;