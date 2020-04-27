require("dotenv").config();
const {APP_SECRET} = process.env; //secret token

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profile");
const loginRouter = require("./routes/login");



require('./auth/index'); //alows the routes to use the middleware. passoprt

const db = require("./helpers/models/index");
const app = express();
//connect db
db.connector.sync();



app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);


app.use("/auth", authRouter); //where authRouter is imported
app.use("/auth/profile", profileRouter);
app.use("/auth/login", loginRouter);



// // implement the API part

/// in case path is not found, return the 'Not Found' 404 code and forward to handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
