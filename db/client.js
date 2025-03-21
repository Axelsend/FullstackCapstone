require('dotenv').config();
const { Client } = require("pg");
console.log('DB_HOST:', process.env.DB_HOST);
const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = { client }