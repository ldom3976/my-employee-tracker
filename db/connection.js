const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jad#120298',
    database: 'employees'
});

module.exports = db;