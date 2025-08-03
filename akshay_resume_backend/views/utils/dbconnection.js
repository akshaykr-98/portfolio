const mysql = require('mysql2')
require('dotenv').config();

if (process.env.NODE_ENV == 'production') {
    dbHost = process.env.DB_HOST
    dbName = process.env.DB_NAME
    dbUser = process.env.DB_USER
    dbPass = process.env.DB_PASS
} else {
    dbHost = 'localhost'
    dbName = 'master'
    dbUser = 'root'
    dbPass = ''
}

const connection = mysql.createConnection({
    host: dbHost,     // host for connection(127.0.0.1)
    port: 3306,            // default port for mysql is 3306
    database: dbName,     // database from which we want to connect our node application
    user: dbUser,          // username of the mysql connection
    password: dbPass     // password of the mysql connection
})

connection.connect(function (err) {
    if (err) {
        console.log("error while connecting to database", JSON.stringify(err.message));
        return;

    }
    console.log("Successfully connected to the mysql database");
})

function executeQuery(query, values) {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

module.exports = executeQuery