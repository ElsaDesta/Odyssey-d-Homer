require("dotenv").config();
const mysql = require("mysql2");

module.exports = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
  dialect: "mysql"
};
