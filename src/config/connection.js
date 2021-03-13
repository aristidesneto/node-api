const mysql = require('mysql2')

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} = process.env

console.log(DB_HOST, DB_DATABASE, DB_PORT, DB_USER, DB_PASSWORD)

const connection  = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
})

module.exports = connection