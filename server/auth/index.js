require("dotenv").config();
const {APP_SECRET} = process.env;
// add passport strategies - local & jwt


const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JwtStratety = require('Passport-jwt').Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const bcrypt = require("bcrypt");

const db = require("../helpers/models/index");
const users = db.users;


passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    (email, password, done) => {
      users
        .findOne({ where: { email: email } })
        .then((foundUser) => {
          //if the user is not found
          !foundUser &&
            done(null, false, { message: "can't find a user with this email" });
          // when user is found use bcrypt to the incoming pass to the database pass
          bcrypt
            .compare(password, foundUser.password)
            //comapre passowrd on new user to the user in the db
            .then((isUser) => isUser && done(null, foundUser.dataValues))
            //is user then send values to the front end -one liner ifs-
            .catch((compareErr) =>
              console.error(`compare error: ${compareErr}`)
            );
        })
        .catch((queryError) => console.error(`Query error: ${queryError}`));
    }
  )
);

    passport.use(
      new JwtStratety(
        {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: APP_SECRET,
        },
        (jwtPayload, done) => {
          users.findOne({ where: { email: jwtPayload.email} })
          .then((user) => done(null, user.dataValues))
          .catch((jwtErr) => console.error(`JWT Error: ${jwtErr}`));
        }
      )
      );
