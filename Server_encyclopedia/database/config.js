
require('dotenv').config();

const mysql = require('mysql');


const config = {
    host: 'localhost',
    user: process.env.USERNAME_SQL,
    password: process.env.PASSWORD_SQL,
    database: process.env.DATABASE,
    port: '3306'
}


const db = mysql.createConnection(config);

db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

module.exports = { db }