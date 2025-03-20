require('dotenv').config();
const { Client } = require("pg");
console.log('DB_HOST:', process.env.DB_HOST);
const client = new Client({
  user: "denver.axelsen",
  password: "new_secure_password",
  host: "localhost",
  database: "capstone_db",
  port: process.env.DB_PORT,
});

module.exports = { client }