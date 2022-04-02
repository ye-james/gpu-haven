const Pool = require('pg').Pool;
require('dotenv').config()

const db = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "gpuhaven",
    host: "localhost",
    port: "5432"
});

module.exports = db;